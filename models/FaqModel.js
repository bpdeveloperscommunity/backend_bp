const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    answer:{
        type:String,
        require:true
    }
})

const FaqModel = new mongoose.model('FaqModel', FaqSchema)
module.exports = FaqModel