//criando model do objeto 
const mongoose = require('mongoose')
const User = require('./User')

const Schema = new mongoose.Schema({
   model:{
    type: String, 
    required: true
   },

   price:{
    type: Number,
    required: true
   },

   brand:{
    type: String,
    required: true
   },

   color:{
    type: String,
    required: true
   },
   
   code:{
    type: String,
    required: true
   },

   startdate:{
    type: String, 
   },

   endDate:{
    type: String,
   },

    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Smartphone', Schema)