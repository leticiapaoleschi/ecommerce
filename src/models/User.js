//criando model de usuario para que ele possa cadastrar um smartphone 

const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', Schema)