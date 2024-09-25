const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    youtube: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Project', projectSchema)
