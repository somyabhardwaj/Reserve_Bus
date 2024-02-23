const express = require("express");
const connectToMongo = require("./db");
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('public'));
app.use("/api",require("./routs/trips"))
app.use("/api",require("./routs/statesDistrict"))
app.use("/api",require("./routs/bookings"))
app.use("/api",require("./routs/stripe"))

const storeItems = new Map([
[1,{price:10000,name:"Bus"}],
[2,{price:10000,name:"Bus"}]
])
 
app.get("/", (req, res) => {
    res.send("App is online");
});

// Start the MongoDB connection and then start the server
connectToMongo()
    app.listen(5000, () => {
        console.log("App listening on port 5000");
    });



  