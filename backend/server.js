require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
const projectRoutes = require("./routes/projectRoutes")
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const path = require('path')
const cors = require('cors')

const app = express();
app.use(cors());
const _dirname = path.dirname('')



//middleware logger (middlewaRE is the checker before a request is sent)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

//connecting to routes
app.use('/api/projects', projectRoutes)
app.use('/api/users', userRoutes)

//conect  to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //request listening
        app.listen(process.env.PORT, () => {
            console.log('hello')
        })
    })
    .catch((e) => {
        console.log(e);
    })




process.env