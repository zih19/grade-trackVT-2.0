const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");    // give errors if you run some sorts of setting
                                 // middleware
require("dotenv").config();

url = 'mongodb+srv://CS3754:ylCTHhBItUFSZgij@gradetrackvt.kntubny.mongodb.net/';
dbName = 'GradeTrackVT';

const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(async(req, res, next) => {
    try{
       await client.connect();
    }catch(error){
       console.error("Error connecting to: ", dbName);
       res.status(500).json({ message: 'Internal Server Error' });
       return;
    }
    req.db = client.db(dbName);
    next();
});

// use Parsing Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("api/majors", async(req, res) => {
    try {
        const majorCollection = req.db.collection("Majors_Eng");
        const majors =await majorCollection.find({}).toArray();
        res.json(majors);
    }catch(error){
        console.error("Error Finding Majors: ", error)
        res.status(500).json({ message: "Error fetching majors" })
    }
});

app.get('api/majors/:major_id', async(req, res) => {
    const major_chosen = req.params.major_id;
    try{
      //const id_chosen = req.params.id;
      const majorCollection = req.db.collection("Courses_Eng");
      const courses = await majorCollection.find({major: major_chosen }).toArray();
      res.json(courses);
    }catch(error){
        console.error("Error Selecting the Major: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.get('api/majors/:major_id/:course_id', async(req, res) => {
    try{
       const course_id_chosen = req.params.course_id;
       const major_id_chosen = req.params.major_id;
       const courseCollection = req.db.collection("Courses_Description");
       const course_selected = await courseCollection.findOne({course_id: course_id_chosen, major_id: major_id_chosen});
       if (!course_selected){
          return res.status(404).json({message: "Not Found"});
       }
       return res.json(course_selected);

    }catch(error){
        console.error("Error Selecting the course: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});



// Using routes
//const userRoutes = require('./routes/user');
//app.use('/api', userRoutes);



const port = process.env.PORT || 8000; // The first item, which is called process.env.PORT, is to ensure 
                                       // the port is running on a local machine.

//start a server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})