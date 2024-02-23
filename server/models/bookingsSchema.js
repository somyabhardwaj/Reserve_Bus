const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    seats:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const Bookings =mongoose.model("Bookings",bookingSchema)

module.exports = Bookings;