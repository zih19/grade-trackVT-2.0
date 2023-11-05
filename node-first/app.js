//const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");    // give errors if you run some sorts of setting
                                 // middleware
require("dotenv").config();

url = 'mongodb+srv://CS3754:ylCTHhBItUFSZgij@gradetrackvt.kntubny.mongodb.net/'
const dbName = 'GradeTrackVT'

const client = new MongoClient(url, {useUnifiedTopology: true});

app.use(async (req, res, next) => {
    try{
        await client.connect();
    } catch(error) {
        console.error("Error connecting to mongodb: ", error);
        res.status(500).json("Internal Error Message!");
        return;
    }
    req.db = client.db(dbName);
    next();
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