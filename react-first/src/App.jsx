import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  
  // Step 1: I will create reusable components

  return (
    <div className="App">
      <BrowserRouter>

          <Routes>
              <Route exact path="/" element="" /> {/* Home page */}
              <Route path="/about" element="" /> {/* About Page */}
              <Route path="/faculties" element="" /> {/* Faculty Page */}

              <Route path="/login" element=""/> {/* Login Page */}
              <Route path="/login/forgetpassword" element="" /> {/* Forget Password */}
              <Route path="/login/forgetpassword/resetpassword" element="" /> {/* Reset Password */}
              <Route path="/login/forgetpassword/resetpassword/success" element="" /> {/* What happen if the password resets successfully? */}
              <Route path="/register" element="" /> {/* Register Page */}
              <Route path="/register/success" element="" />{/* What happen if the page registers successfully */}

              
               {/* Once I click the major card/button, the course card/button appears. At the same time, the user selects one of those to access both the textual information and the graphical visualization of these courses. */}
              <Route path="/login/majors/:id" element="" /> {/* Major */}
              <Route path="/login/courses/:id" element="" /> {/* Course */}
              <Route path="login/major/courses/coursenumber" element="" /> {/* Course Number */}
              <Route path="login/majors/courses/coursenumber/dashboard" element="" /> {/* Dashboard */}
              <Route path="login/majors/courses/coursenumber/piechart" element="" /> {/* Pie Chart In General */}
              <Route path="login/majors/courses/coursenumber/columnchart" element="" /> {/* Column Chart In General */}
              <Route path="login/majors/courses/coursenumber/linechart" element="" /> {/* Line Chart In General */}
              
              <Route path="login/major/courses/coursenumber/instructor" element="" /> {/* Specific Instructor for this course */}
              <Route path="login/major/courses/coursenumber/instructor/piechart" element="" /> {/* Pie Chart for Specific Instructor */}
              <Route path="login/major/courses/coursenumber/instructor/columnchart" element="" /> {/* Column Chart for Specific Instructor */}
              <Route path="login/major/courses/coursenumber/instructor/linechart" element="" />{/* Line Chart for Specific Instructor */}
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
