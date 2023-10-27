const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    answers:[{
        type:String,
        required:true
    }],
    correctAnswer:{
        type:String,
        required:true
    }

})
const QuizModel = mongoose.model("quiz", QuizSchema)
module.exports = QuizModel