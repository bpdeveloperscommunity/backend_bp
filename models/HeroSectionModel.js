const mongoose = require('mongoose')

const HeroSectionSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    subtitle:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    backgroundImage:{
        type:String,
        require:true
    },
    backgroundColor:{
        type:String,
        require:true
    },
    festivalTime:{
        type:Boolean,
        require:true
    }
})

const HeroSectionModel = new mongoose.model('HeroSectionModel', HeroSectionSchema)
module.exports = HeroSectionModel