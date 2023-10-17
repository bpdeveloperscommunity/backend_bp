const mongoose = require('mongoose')
const UpcomingEventsSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    BookTicketLink:{
        type:String,
        require:true
    }

})

const PastEventsSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    }

})

const PastEventsModel = new mongoose.model('eventsModel', PastEventsSchema)

module.exports = PastEventsModel