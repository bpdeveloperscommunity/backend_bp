const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
const Blogs = mongoose.model('blogs', BlogSchema)
module.exports = Blogs