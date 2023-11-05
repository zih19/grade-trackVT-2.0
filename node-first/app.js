const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");    // give errors if you run some sorts of setting
                                 // middleware
require("dotenv").config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
}).then(() => {
    console.log("DB Connected");
}).catch(()=> {
    console.log("Unable to Connect to DB");
})

// use Parsing Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Using routes
//const userRoutes = require('./routes/user');
//app.use('/api', userRoutes);

const port = process.env.PORT || 8000; // The first item, which is called process.env.PORT, is to ensure 
                                       // the port is running on a local machine.

//start a server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})