const mongoose = require('mongoose')
const chatSchema = new mongoose.Schema({
    
        message:{
            type:String, 
            required:true
        },
        questions:{
            type:String,
            required:true
        },
        response:{
            type:String,
            required:true
        }
    
})