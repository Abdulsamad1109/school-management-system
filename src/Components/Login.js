import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';

const Login = () => {
  let [loginmatricNum, setloginMatricNum]= useState("")
  let [loginPassword, setLoginPassword]= useState("")
  let navigate = useNavigate();


  const login = async()=>{
    let result = await axios.post("http://127.0.0.1:5000/studentLogin", {loginmatricNum, loginPassword})
    console.log(result.data);
    localStorage.setItem("myJwtToken", JSON.stringify(result.data))
    
      // if(result.data === "details are correct"){
      //       navigate ("/studentdashboard");
      // }
      // else{
      // alert ("incorrect details");
      // }
    
  }
  
  return (
    <div className='flex flex-col items-center m-32 justify-center space-y-8'>
      <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' value={loginmatricNum} onInput={(e)=>(setloginMatricNum(e.target.value))} placeholder='  matric num' />
      <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' value={loginPassword} onInput={(e)=>(setLoginPassword(e.target.value))}  placeholder='  password' />
      <button className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950' onClick={login}>Log In</button>
    </div>
  )
}

export default Login
