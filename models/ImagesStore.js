const mongoose = require('mongoose')

const ImageStoreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})
const ImageStoreModel = new mongoose.model('ImageStore', ImageStoreSchema)

module.exports = ImageStoreModel