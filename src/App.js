import LandingPage from './Components/LandingPage';
import { Route, Routes, Link, useNavigation } from 'react-router-dom';
import StudentRegistration from './Components/StudentRegistration';
import StudentDashboard from './Components/StudentDashboard';
import LogOut from './Components/LogOut';
import Login from './Components/Login';
import Formick from './Formick';
import './App.css';
import AdminDashboard from './Components/AdminDashboard';
import AdminLogin from './Components/AdminLogin';
import StaffLogin from './Components/StaffLogin';
import StaffRegistration from './Components/StaffRegistration';
import StaffDashboard from './Components/StaffDashboard';
import { createContext, useState } from 'react';
import RegisteredCourses from './Components/RegisteredCourses';

export const courseContext = createContext();

function App() {
  let [displayCourses, setDisplayCourses] = useState([])
  let [registeredCourses, setRegisteredCourses] = useState([])
  let [unit, setUnit] = useState("")

  
  return (
    <div className=''>
      <courseContext.Provider value={{displayCourses,setDisplayCourses,registeredCourses,setRegisteredCourses,
      unit,setUnit
      }}>
      <header>
        <nav className='flex items-center justify-center w-full'>
          <div className='flex items-center justify-between space-x-8 italic font-bold'>
          <Link to='/' >Home</Link>
          <Link to='/studentregistration'>Register as a student</Link>
          <Link to='/login'>login as a tudent</Link>
          <Link to='/stafflogin'>login as a staff</Link>
          </div>
       </nav>
      </header>

      <LogOut/>
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/studentregistration' element={<StudentRegistration/>}></Route>
      <Route path='/studentdashboard' element={<StudentDashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/stafflogin' element={<StaffLogin/>}></Route>
      <Route path='/staffregistration' element={<StaffRegistration/>}></Route>
      <Route path='/staffdashboard' element={<StaffDashboard/>}></Route>
      <Route path='/registeredcourses' element={<RegisteredCourses/>}></Route>
      </Routes>
      </courseContext.Provider>
     
    </div>
  );
}


export default App;
