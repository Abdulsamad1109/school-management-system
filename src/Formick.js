import { Formik, useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const Formick = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("fill your name").min(5, "must be more than five"),
    password: Yup.string().required("fill your password").min(5, "must be more than 6"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "it must be the same with password")
  })
  
    const initialValues = {
        name:"taye",
        password:"",
        confirmPassword:""
    }

    const onSubmit = (values) => {
      console.log(values);
    }
    let {handleChange, handleSubmit,values:{name,password,confirmPassword}, ...formik} = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    // console.log(formik);
  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='name' onChange={handleChange}  value={name}/>
        <input name='password' placeholder='password' onChange={handleChange} value={password}/>
        <input name='confirmPassword' placeholder='confirm password' onChange={handleChange} value={confirmPassword}/>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Formick
