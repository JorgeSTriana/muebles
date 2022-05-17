const moongose = require('mongoose')   
const Schema = moongose.Schema

const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },    
})

module.exports = moongose.model('user', User)