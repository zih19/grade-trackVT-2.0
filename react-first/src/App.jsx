import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import MajorDescription from './pages/MajorDescription.jsx';
import TopbarSpec from './pages/Components/TopbarSpecific.jsx';
import Forgot_Password from './pages/Forgot-Password.jsx';
import Success from './pages/Success.jsx';
import Majors from './pages/Majors.jsx';
import Courses from './pages/Courses.jsx';
import Dashboard from './pages/DashboardGeneral.jsx';

const App = () => {
  
  // Step 1: I will create reusable components
  const [signedIn, setSignIn] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
          <TopbarSpec signedIn={signedIn}/>
          <Routes>
              <Route exact path="/" element = {<Home/>}/>
              <Route path="/About" element = {<About/>}/>
              <Route path="/majordescription/:majorId" element={<MajorDescription />}/>
              <Route path="/Login" element = {<Login setSignIn={setSignIn}/>}/>
              
              <Route path="/Forgot-Password" element={<Forgot_Password/>}/>
              <Route path="/Success" element={<Success/>}/>
              <Route path="/:department" element={<Majors/>} />
              <Route path="/:department/:majorId" element={<Courses/>} />
              <Route path="/:department:/:majorId/:courseId" element={<Dashboard/>} />

          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;

//<Route path="/login/forgetpassword" element="" /> {/* Forget Password */}
//<Route path="/login/forgetpassword/resetpassword" element="" /> {/* Reset Password */}
//<Route path="/login/forgetpassword/resetpassword/success" element="" /> {/* What happen if the password resets successfully? */}
//<Route path="/register" element="" /> {/* Register Page */}
//<Route path="/register/success" element="" />{/* What happen if the page registers successfully */}

//{/* Once I click the major card/button, the course card/button appears. At the same time, the user selects one of those to access both the textual information and the graphical visualization of these courses. */}
//<Route path="/login/majors/:id" element="" /> {/* Major */}
//<Route path="/login/courses/:id" element="" /> {/* Course */}
//<Route path="login/major/courses/coursenumber" element="" /> {/* Course Number */}
//<Route path="login/majors/courses/coursenumber/dashboard" element="" /> {/* Dashboard */}
//<Route path="login/majors/courses/coursenumber/piechart" element="" /> {/* Pie Chart In General */}
//<Route path="login/majors/courses/coursenumber/columnchart" element="" /> {/* Column Chart In General */}
//<Route path="login/majors/courses/coursenumber/linechart" element="" /> {/* Line Chart In General */}
//
//<Route path="login/major/courses/coursenumber/instructor" element="" /> {/* Specific Instructor for this course */}
//<Route path="login/major/courses/coursenumber/instructor/piechart" element="" /> {/* Pie Chart for Specific Instructor */}
//<Route path="login/major/courses/coursenumber/instructor/columnchart" element="" /> {/* Column Chart for Specific Instructor */}
//<Route path="login/major/courses/coursenumber/instructor/linechart" element="" />{/* Line Chart for Specific Instructor */}