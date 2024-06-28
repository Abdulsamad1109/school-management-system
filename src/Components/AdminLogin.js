import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
   let [email, setEmail]= useState()
   let [password, setPassword]= useState()
   let navigate = useNavigate()


   const login = ()=>{
    let myEmail = "admin@gmail.com"
    let myPassword = "ADMIN"
    email === myEmail && password === myPassword ? navigate("/admindashboard"):alert("incorrect datails")
    setEmail("")
    setPassword("")
   }
  return (
    <div>
      <div className='flex flex-col items-center m-32 justify-center space-y-8'>
      <input type='email' className='border border-gray-400 outline-none w-72 rounded-lg h-8' value={email} onInput={(e)=>(setEmail(e.target.value))} placeholder='email' />
      <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' value={password} onInput={(e)=>(setPassword(e.target.value))}  placeholder='password' />
      <button className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950' onClick={login}>Log In</button>
    </div>
    </div>
  )
}

export default AdminLogin
