const mongoose = require('mongoose')

const HeroImagesSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    
    about:{
        type:String,
        required:true
    }
})
const heroimagesModal = new mongoose.model('heroimages', HeroImagesSchema);
module.exports = heroimagesModal;