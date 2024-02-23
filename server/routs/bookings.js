const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bookings = require('../models/bookingsSchema');


// GET route to fetch data based on state or district
router.post('/bookings', async (req, res) => {
    try {
      // Retrieve data from MongoDB
      const data = req.body
      
      const response = await Bookings.create(data)
     return res.status(200).json(response);
      
    } catch (error) {
      console.error('Error fetching data from MongoDB', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/bookings', async (req, res) => {
    try {
      // Retrieve data from MongoDB

      const response = await Bookings.find().limit(50)
     return res.status(200).json(response);
      
    } catch (error) {
      console.error('Error fetching data from MongoDB', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;

