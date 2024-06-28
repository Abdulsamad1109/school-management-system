import React, { useState } from 'react'
import StudentDasboard from './StudentDashboard'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import '../App.css'
import { Formik, useFormik, validationSchema } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


const StudentRegistration = () => {
  let navigate = useNavigate();


  const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required"),
    password: Yup.string().required("required").min(7, "min of password must be 7 characters"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "confirm password must be the same with password")
  })

  const myHandleSubmit = async(values)=>{
  
    let {confirmPassword, ...rest} = values

    await axios.post("http://127.0.0.1:5000/studentRegForm", {...rest});

    let result = await axios.get("http://127.0.0.1:5000/see-users") 
    console.log(result);
    
    navigate('/studentdashboard');
  }
   console.log();

  let {handleChange, values: {firstName, lastName, email, password, confirmPassword}, handleSubmit, errors} = useFormik({
    initialValues,
    onSubmit: myHandleSubmit,
    validationSchema
  });
  // console.log(Formik);
  
 
  return ( 
    <div className='flex flex-col items-center m-32 justify-center'>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input name='firstName' onChange={handleChange} value={firstName} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   firstname'/>
          <small className='text-red-700 font-bold'>{errors.firstName}</small>
          <input name='lastName' onChange={handleChange} value={lastName} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   lastname'/>
          <small className='text-red-700 font-bold'>{errors.lastName}</small>
          <input name='email' type='email' onChange={handleChange} value={email} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   email'/>
          <small className='text-red-700 font-bold'>{errors.email}</small>
          <input name='password' onChange={handleChange} value={password} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   password'/>
          <small className='text-red-700 font-bold'>{errors.password}</small>
          <input name='confirmPassword' onChange={handleChange} value={confirmPassword} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   confirmPassword'/>
          <small className='text-red-700 font-bold'>{errors.confirmPassword}</small>
          <input type='submit' value="Register" className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950'/>
        </form>
        <div className='flex items-center justify-center'> Already have an account? <Link className='text-blue-700' to='/login'>login</Link></div>
      </div>
    </div>
  )
}

export default StudentRegistration

 
















// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const StudentRegistration = () => {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("required"),
//     lastName: Yup.string().required("required"),
//     email: Yup.string().required("required"),
//     password: Yup.string().required("required").min(7, "min of password must be 7 characters"),
//     confirmPassword: Yup.string().oneOf([Yup.ref("password")], "confirm password must be the same with password")
//   });

//   const handleSubmit = async (values) => {
//     const radm = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
//     const rnd = Math.round(radm);
//     const toNum = String(rnd);

//     // Save to local storage
//     let studentLoginDetails = JSON.parse(localStorage.getItem("studentLoginDetails") || "[]");
//     studentLoginDetails.push({ ...values, matricNum: toNum });
//     localStorage.setItem("studentLoginDetails", JSON.stringify(studentLoginDetails));

//     // Send to server
//     await axios.post("http://127.0.0.1:5000/studentRegForm", { ...values, matricNum: toNum });

//     // Alert
//     alert(`Your matric number is ${toNum}`);
//   };

//   const { handleChange, values, handleSubmit: formikSubmit, errors } = useFormik({
//     initialValues,
//     onSubmit: handleSubmit,
//     validationSchema
//   });

//   return (
//     <div className='flex flex-col items-center m-32 justify-center'>
//       <form onSubmit={formikSubmit} className='flex flex-col space-y-4'>
//         <input name='firstName' onChange={handleChange} value={values.firstName} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   firstname'/>
//         <small className='text-red-700 font-bold'>{errors.firstName}</small>
//         <input name='lastName' onChange={handleChange} value={values.lastName} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   lastname'/>
//         <small className='text-red-700 font-bold'>{errors.lastName}</small>
//         <input name='email' type='email' onChange={handleChange} value={values.email} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   email'/>
//         <small className='text-red-700 font-bold'>{errors.email}</small>
//         <input name='password' onChange={handleChange} value={values.password} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   password'/>
//         <small className='text-red-700 font-bold'>{errors.password}</small>
//         <input name='confirmPassword' onChange={handleChange} value={values.confirmPassword} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='   confirmPassword'/>
//         <small className='text-red-700 font-bold'>{errors.confirmPassword}</small>
//         <input type='submit' value="Register" className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950'/>
//       </form>
//     </div>
//   );
// };

// export default StudentRegistration;