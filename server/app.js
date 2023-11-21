const connectDB = require('./config/db');
const port = 5000;

const express = require('express');
const app = express();
const cors = require('cors');

const shoeRoute = require('./routes/shoeRoute');

app.use(cors());

app.use(express.json());
connectDB();

// to make public folder static
app.use("/public",express.static(__dirname + "/public"));

//use router by express
app.use(shoeRoute);


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})
