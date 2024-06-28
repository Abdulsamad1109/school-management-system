import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StaffLogin = () => {
  let [email, setEmail]= useState("")
  let [password, setPassword]= useState("")
  let navigate = useNavigate()

  const login = ()=>{
    let result =  JSON.parse(localStorage.getItem("staffLoginDetails"));

      let findUser = result.find(user=>user.email == email && user.password == password); 
      if(findUser){
         navigate ("/staffdashboard");
      }
      else{
        alert ("please input the correct details");
      }

    }

  return (
    <div className='flex flex-col items-center m-32 justify-center space-y-8'>
      <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' value={email} onInput={(e)=>(setEmail(e.target.value))} placeholder='  email' />
      <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' value={password} onInput={(e)=>(setPassword(e.target.value))}  placeholder='  password' />
      <button className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950' onClick={login}>Log In</button>
    </div>
  )
}

export default StaffLogin
