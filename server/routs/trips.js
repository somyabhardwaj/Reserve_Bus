const express = require("express")
const _ = require('lodash');
const router = express.Router()
const Trips = require("../models/tripsSchema")

router.post("/trip", async (req,res)=>{
  try{
    const data = req.body;
    const response = await Trips.create(data)
    res.status(200).json({response})
  }
  catch(err){
    res.status(401).send({err})
  }
})


// router.get("/trips", async (req, res) => {
//   try {
//       const { from, to, date, arrival, departure, startRating, endRating, operators } = req.query;
//       let query = {};

//       if (from) {
//           query.from = from;
//       }
//       if (to) {
//           query.to = to;
//       }

//       if (date) {
//           query.date = date;
//       }

//       if (arrival) {
//           query.arrival = arrival;
//       }
//       if (departure) {
//           query.departure = departure;
//       }

//       if (startRating !== undefined && endRating !== undefined) {
//           query.rating = { $gte: startRating, $lte: endRating };
//       } else if (startRating !== undefined) {
//           query.rating = { $gte: startRating };
//       } else if (endRating !== undefined) {
//           query.rating = { $lte: endRating };
//       }

//       if (operators) {
//           query.operators = operators;
//       }

//       const resp = await Trips.find(query).limit(50);
//       return res.status(200).json({ resp });
//   } catch (error) {
//       return res.status(500).send(error);
//   }
// });


router.get("/trip", async (req, res) => {
  try {
    const { from, to, date, arrival, departure, startRating, endRating, operators, busOwnerID, SeatBooked } = req.query;

    const query = _.pickBy(
      {
        date: date && new Date(parseInt(date)).toISOString(),
        busOwnerID,
        from,
        to,
        SeatBooked,
        arrival,
        departure,
        rating: (startRating && endRating) && { $gte: startRating, $lte: endRating },
        operator: operators && { $in: Array.isArray(operators) ? operators : [operators] },
      },
      _.identity
    );

    const data = await Trips.find(query).limit(50);

    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ err: error.message });
  }
});


module.exports =router