const mongoose = require("mongoose");

const TripsSchema = mongoose.Schema({
    date: { 
        type: Date,
         required: true
         },
    from: {
         type: String, 
         required: true },
    to: { type: String,
         required: true 
        },
    busOwnerID: Number,
    startTime: Date,
    EndTime: Date,
    category: String,
    SeatBooked: [],
    bus_no: String,
    animeties_list: [String],
    busFare: Number,
    busName: String
});

const Trips = mongoose.model('Trips', TripsSchema);

module.exports = Trips;
