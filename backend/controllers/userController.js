const User = require('../models/Users')
const jwt = require('jsonwebtoken')


//create token
const createToken = (_id) => {
    return jwt.sign({_id},process.env.JWT,{expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.login(username, password)

        //create JWT 
        const token = createToken(user._id) 

        res.status(200).json({username,token})
    }catch(e) {
        res.status(400).json({error: e.message})

    }
}
//signup user
const signupUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.signup(username, password)

        //create JWT 
        const token = createToken(user._id) 

        res.status(200).json({username, token})
    }catch(e) {
        res.status(400).json({error: e.message})

    }
}


module.exports = {loginUser,signupUser}