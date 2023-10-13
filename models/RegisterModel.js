const mongoose = require('mongoose')

const userregisterSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    course:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
userRegisterModel = new mongoose.model('userRegisterModel', userregisterSchema)

module.exports = userRegisterModel