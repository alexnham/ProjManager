const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
}}, {timestamps: true})

// static sign up method

userSchema.statics.signup = async function(username,password) {

    if(!username || !password) {
        throw Error('Fill All Fields')
    }
    if(!validator.isLength(username, {min:4,max:20})) {
        throw Error('Name Length Invalid (min: 4, max: 20)')
    }
    if(!validator.matches(username, "^[a-zA-Z0-9_\.\-]*$")) {
        throw Error('only letters, numbers, _, ., -, are allowed')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Weak Password')
    }
    
    const exists = await this.findOne({username})

    if (exists) {
        throw Error('username taken')
    }

    //password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({username,password:hash})

    return user
}
//static login 

userSchema.statics.login = async function(username, password) {
    if(!username || !password) {
        throw Error('Fill All Fields')
    }   
    const user = await this.findOne({username})

    if(!user) {
        throw Error('user does not exist')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('incorrect password')
    }
    return user
}

module.exports = mongoose.model('User', userSchema)
