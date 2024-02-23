const mongoose = require("mongoose")

const connectToMongo = ()=>{

    mongoose.connect("mongodb+srv://somyabhardwaj004:Mongo89%40@sd.fulbygm.mongodb.net/reserve?retryWrites=true&w=majority").then(()=>{
        console.log("Connected Tp Mongo DB")
    })
    .catch((err)=>{
            console.log({err})
    })

}
module.exports = connectToMongo