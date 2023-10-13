const mongoose = require('mongoose')

const YoutubeVideosModel = new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const YoutubeVideos = mongoose.model('YoutubeVideosModel', YoutubeVideosModel);

module.exports = YoutubeVideos;