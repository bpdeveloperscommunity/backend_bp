const mongoose = require('mongoose')
const EventsSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    eventType:{
        type:String,
        required:true
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
    },
    topic:{
        type:String
    }

})


const EventsModel = new mongoose.model('eventsModel', EventsSchema)

module.exports = EventsModel