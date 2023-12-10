import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MajorDescription from './pages/MajorDescription.jsx';
import TopbarSpec from './pages/Components/TopbarSpecific.jsx';
import ForgotPassword from './pages/Forgot-Password.jsx';
import Success from './pages/Success.jsx';
import RegisterSuccess from './pages/RegisterSuccess.jsx';
import Majors from './pages/Majors.jsx';
import Courses from './pages/Courses.jsx';
import Dashboard from './pages/DashboardGeneral.jsx';

const App = () => {
  
  // Step 1: I will create reusable components
  const [signedIn, setSignIn] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
          <TopbarSpec setSignIn={setSignIn} signedIn={signedIn}/>
          <Routes>
              <Route exact path="/" element = {<Home/>}/>
              <Route path="/About" element = {<About/>}/>
              <Route path="/majordescription/:majorId" element={<MajorDescription />}/>
              <Route path="/Login" element = {<Login setSignIn={setSignIn}/>}/>
              <Route path="/Register" element={<Register />} />
              <Route path="/Forgot-Password" element={<ForgotPassword/>}/>
              <Route path="/Success" element={<Success/>}/>
              <Route path="/RegisterSuccess" element={<RegisterSuccess />} />
              <Route path="/:department" element={<Majors/>} />
              <Route path="/:department/:majorId" element={<Courses/>} />
              <Route path="/:department/:majorId/:courseId" element={<Dashboard/>} />

          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;