const mongoose = require('mongoose');

const AdwantagesSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
})

const AdwantagesModel = new mongoose.model('AdwantagesModel', AdwantagesSchema)
module.exports = AdwantagesModel