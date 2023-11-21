const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");    // give errors if you run some sorts of setting
                                 // middleware
require("dotenv").config();

url = "mongodb+srv://CS3754:ylCTHhBItUFSZgij@gradetrackvt.kntubny.mongodb.net/";
dbName = "GradeTrackVT";

const client = new MongoClient(url);

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

app.get("/api/departments", async(req, res) => {
    try{
        const departmentsCollection = req.db.collection("Departments");
        const departments = await departmentsCollection.find({}).toArray();
        console.log(departments);
        res.json(departments);
    }catch(error){
        console.error('Error finding departments');
        res.status(500).json({message: "Error fetching departments"});
    }
});


app.get("/api/:department_id", async(req, res) => {
    const department_abbreviation = req.params.department_id;
    try{
        const MajorsCollection = req.db.collection("Majors");
        const department = await MajorsCollection.findOne({department: department_abbreviation});
        if (!department){
            return res.status(404).json({message: "Not Found"});
        }
        return res.json(department.majors);
    }catch(error) {
        console.error("Error finding a specific department");
        res.status(500).json({message: "Error fetching majors within the department"});
    }
});

app.get("/api/:department_id/:major_id", async(req, res) => {
    const department_id = req.params.department_id;
    const major_specified = req.params.major_id;
    try{
        const coursesCollection = req.db.collection("Courses");
        const major = await coursesCollection.findOne({major: major_specified, department: department_id});
        if (!major){
            return res.status(404).json({message: "Not Found"});
        }
        return res.json(major.courses);
    }catch(error) {
        console.error("Error finding a specific major", error);
        res.status(500).json({message: "Error fetching courses from a specific department"});
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