import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik, validationSchema } from 'formik'
import * as Yup from 'yup'

const StaffRegistration = () => {
  let navigate = useNavigate()
  let password = Math.random().toString(36).slice(2, 10)

  const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password,
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required"),
    password: Yup.string().required("required").min(7, "min of password must be 7 characters")
  })

  let {handleChange, values: {firstName, lastName, email,},
    handleSubmit, errors} = useFormik({
    initialValues,
    onSubmit(values){
      console.log(values);
      let staffLoginDetails = JSON.parse(localStorage.getItem("staffLoginDetails") || "[]")
      staffLoginDetails.push(values)
      localStorage.setItem("staffLoginDetails", JSON.stringify(staffLoginDetails))
      alert(`Registration successful1. Staff password is ${password}`);
      navigate("/admindashboard")
    },
    validationSchema
  });



  return (
    <div className='flex flex-col items-center m-32 justify-center'>
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input name='firstName' onChange={handleChange} value={firstName} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='firstname'/>
          <small className='text-red-700 font-bold'>{errors.firstName}</small>
          <input name='lastName' onChange={handleChange} value={lastName} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='lastname'/>
          <small className='text-red-700 font-bold'>{errors.lastName}</small>
          <input name='email' type='email' onChange={handleChange} value={email} className='border border-gray-400 outline-none w-72 rounded-lg h-8' placeholder='email'/>
          <small className='text-red-700 font-bold'>{errors.email}</small>
          <input type='submit' value="Register staff" className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950'/>
        </form>
      </div>
    </div>
  )
}

export default StaffRegistration
