const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Mapping du json
const userSchema = new Schema({
    email: String,
    password: String
})
//export du module
module.exports = mongoose.model('user', userSchema, 'users')
