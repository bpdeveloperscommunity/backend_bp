const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    trainingMode:{
        type:String,
        require:true
    },
})

const courseModel = new mongoose.model('courseModel', coursesSchema)

module.exports = courseModel