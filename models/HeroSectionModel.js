const mongoose = require('mongoose')

const HeroSectionSchema = new mongoose.Schema({
    heroText:[{
        title:{
            type:String,
            require:true
        },
        subtitle:{
            type:String,
            require:true
        },
    }],
    image:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        required:true
    },
    partners:{
        type:Number,
        required:true
    },
    minSalary:{
        type:Number,
        required:true
    },
    courseType:{
        type:String,
        required:true
    }
})

const HeroSectionModel = new mongoose.model('HeroSectionModel', HeroSectionSchema)
module.exports = HeroSectionModel