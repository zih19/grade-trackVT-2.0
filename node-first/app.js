const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");    // give errors if you run some sorts of setting
                                 // middleware
const dotenv = require("dotenv").config();

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
        //console.log(departments);
        res.json(departments);
    }catch(error){
        console.error('Error finding departments', error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.post("/api/departments", async(req, res) => {
    try{
        const departmentsCollection = req.db.collection("Departments");
        const newDepartment = req.body;
        if(!newDepartment.department) {
            return res.status(404).json({message: "Department Not Found"});
        }
        const existing_department = await departmentsCollection.findOne({department: newDepartment.department});
        if(existing_department) {
            return res.status(409).json({message: "Department Already Existed"});
        }
        await departmentsCollection.insertOne(newDepartment);
        return res.status(201).json({message: "The new department is added successfully."});
    }catch(error) {
        console.error('Error inserting a new department', error);
        res.status(500).json({message: "Internal Server Error"});
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
        console.error("Error fetching majors within the department", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.post("/api/:department_id", async(req, res) => {
    const department = req.params.department_id;
    const new_major = req.body;
    try{
        const majorCollection = req.db.collection("Majors")
        const selected_department = await majorCollection.findOne({department: department})
        if(selected_department) {
            const result = await majorCollection.updateOne(
                {department: selected_department},
                {$push: {majors: new_major}} 
            );
            if (result.modifiedCount === 0) {
                return res.status(404).json({message: "The major is not added"})
            }
            return res.status(201).json({message: "The new major is added successfully to a new department", new_major});
        }
        else {
            await majorCollection.insertOne({department: department, majors:[new_major]})
            return res.status(201).json({message: "Both the department and the major are added successfully", 
                                         department: department, majors:[new_major]})             
        }
    }catch(error) {
        console.error("Error adding a new major to a department", error);
        res.status(500).json({message: "Internal Server Error"});
    }
})

app.put("/api/:department_id", async(req, res) => {
    const department_id = req.params.department_id;
    const edited_major = req.body;
    try{
      const majorsCollection = req.db.collection("Majors");
    //   const selected_department = await majorsCollection.findOne({"majors.id": edited_major.id, department: department_id});
    //   if (!selected_department) {
    //     return res.status(404).json({message: "Major Not Found"});
    //   }
      const result = await majorsCollection.updateOne(
        {major: edited_major.id, department: selected_department},
        {$set:{"majors.$": new_major}}
      );
      if (result.modifiedCount === 0) {
          return res.status(404).json({message: "The major is updated unsuccessfully."});
      }
      return res.status(200).json({message: "The major is added successfully",
                                   department: department_id, edited_major});
    }catch(error){
        console.error("Error updating the major", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.delete("/api/:department_id", async(req, res)=> {
   const department_id = req.params.department_id;
   const major_abbreviation = req.body.id;
   try{
    const departmentsCollection = req.db.collection("Majors");
    const department = await departmentsCollection.findOne({department: department_id});
    if(!department){
        return res.status(404).json({message: "Not Found"});
    }
    const deleted_major = await departmentsCollection.updateOne(
        {department: department_id},
        {$pull: {majors: {id: major_abbreviation}}}
    )

    if (deleted_major.modifiedCount === 0) {
        return res.status(404).json({message: "Major Not Found or Already Deleted"});
    }
    return res.status(204).json({message: "The course" + deleted_major + "is successfully deleted."});
   }catch(error) {
     console.error("Error deleting a specific major", error);
     res.status(500).json({message: "Internal Server Error"});
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
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.post("/api/:department_id/:major_id", async(req, res) => {
    const department_id = req.params.department_id;
    const major_id = req.params.major_id;
    const course_added = req.body;
    if (!course_added || !course_added.number || !course_added.title) {
        return res.status(400).json({message: "The course number to be added is not provided."});
    }
    try{
        const coursesCollection = req.db.collection("Courses");
        const major_selected = await coursesCollection.findOne({major: major_id, department: department_id});
        if (major_selected) {
            const result = await coursesCollection.updateOne(
                {major: major_id, department: department_id},
                {$push: {courses: course_added}}
            );
            if (result.modifiedCount === 0) {
                return res.status(404).json({message: "The new course" + course_id + "is not added."});
            }
            return res.status(201).json({message: "The new course with course number" + major_id + "is added successfully", 
                                         course_added});
        }
        else{
           const result = await coursesCollection.insertOne({
               major: major_id,
               department: department_id,
               courses: [course_added]
           });
           return res.status(201).json({message: "The course and the corresponding department and major are created successfully", 
                                        document: result.ops[0]});
        }
    }catch(error){
        console.error("Error adding a course to the major page", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.put("/api/:department_id/:major_id", async(req, res) => {
    const department_id = req.params.department_id;
    const major_id = req.params.major_id;
    const edited_course = req.body;
    try{
       const coursesCollection = req.db.collection("Courses");
       const course_selected = await coursesCollection.updateOne(
          {"courses.number": edited_course.number, major: major_id, department: department_id},
          {$set:{"courses.$": edited_course}}
       );
       if (course_selected.modifiedCount === 0) {
          return res.status(404).json({message: "The course is updated unsuccessfully."});
       }
       return res.status(200).json({message: "The course is updated successfully", 
                                    department: department_id, major: major_id, edited_course});
    }catch(error){
        console.error("Error updating one course within the major", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.delete("/api/:department_id/:major_id", async(req, res)=> {
    const department_id = req.params.department_id;
    const major_id = req.params.major_id;
    const course_deleted = req.body.number;

    if (!course_deleted) {
        return res.status(400).json({message: "The course number to delete is not provided."});
    }

    try{
        const coursesCollection = req.db.collection("Courses");
        const course = await coursesCollection.findOne({department: department_id, major: major_id});
        if (!course){
            return res.status(404).json({message: "Course Not Found"});
        }
        const result = await coursesCollection.updateOne(
            {department: department_id, major: major_id},
            {$pull: {courses:{number: course_deleted}}}
        )
        if (result.modifiedCount === 0) {
           return res.status(404).json({message: "The course with the number" + course_deleted + "is deleted unsuccessfully."});
        }
        return res.status(204).end();
    }catch(error){
        console.error("Error In Deleting a Course From a Major");
        res.status(500).json({message: "Internal Server Error"});
    }
});


app.get("/api/:department_id/:major_id/:course_id", async(req, res) => {
    const{department_id, major_id, course_id} = req.params;
    try{
        const courseSpecificCollection = await req.db.collection("Courses_Description");
        const course_content = await courseSpecificCollection.findOne({
            course_id: course_id, 
            major_id: major_id, 
            department_id: department_id
        });
        if (!course_content) {
            return res.status(404).json({message: "Not Found"});
        }
        return res.json(course_content);
    }catch(error){
        console.error("Error loading a specific course", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.post("/api/:department_id/:major_id/:course_id", async(req, res) => {
    const {department_id, major_id, course_id} = req.params;
    const course_content = req.body;
    try{
        const courseContentCollection = req.db.collection("Courses_Description");
        const course_selected = await courseContentCollection.findOne({course_id, major_id, department_id});
        if (course_selected) {
            return res.status(409).json({message: "The course content already exists in the database."});
        }
        await courseContentCollection.insertOne({course_id, major_id, department_id, course_content});
        return res.status(201).json({message: "The course content of a specific course is added successfully", 
                                     course_id, major_id, department_id, ...course_content});
    }catch(error){
        console.error("Error fetching the course content based on a specific course", error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

app.put("/api/:department_id/:major_id/:course_id", async(req, res) => {
   const {department_id, major_id, course_id} = req.params;
   const edited_course_content = req.body;
   try{
    const courseContentCollection = req.db.collection("Courses_Description");
    const course_selected = await courseContentCollection.findOne({course_id, major_id, department_id});
    if (!course_selected) {
        return res.status(404).json({message: "The course is not found"});
    }


    const result = await courseContentCollection.updateOne(
        {course_id, major_id, department_id},
        {$set: {edited_course_content}}
    )

    if (result.modifiedCount === 0) {
        return res.status(404).json({message: "The course content is updated unsuccessfully."});
    }

    return res.status(201).json({message: "The course is updated successfully", 
                                 course_id, major_id, department_id});

   }catch(error){
       console.error("Error updating the course content", error);
       res.status(500).json({message: "Internal Server Error"});
   }
});

app.delete("api/:department_id/:major_id/:course_id", async(req, res) => {
   const {department_id, major_id, course_id} = req.params;

   try{
    const courseContentCollection = req.db.collection("Courses_Description");
    const course_selected = await courseContentCollection.deleteOne({course_id, major_id, department_id});

    if (course_selected.modifiedCount === 0){
        return res.status(404).json({message: "The course content of the course" + major_id + "is not found/already deleted."});
    }
    return res.status(204).end();

   }catch(error){
     console.error("Error deleting the content of the course description");
     res.status(500).json({message: "Internal Server Error"});
   }
});


//middleware
//app.use(express.json())

// Using routes
//const userRoutes = require('./routes/user');
//app.use('/api', userRoutes);
//app.use('/', require('./routes/authRouter'));



const port = process.env.PORT || 8000; // The first item, which is called process.env.PORT, is to ensure 
                                       // the port is running on a local machine.

//start a server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})