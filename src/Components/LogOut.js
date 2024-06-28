import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useState } from 'react'


const LogOut = () => {  
  let [firstName, setFirstName] = useState("")
  
  const profile = async()=>{
    let retrivedToken =  JSON.parse(localStorage.getItem("myJwtToken"));
    let sam = await axios.get("http://127.0.0.1:5000/profile", {
      headers: {
        "authorization": `Bearer ${retrivedToken.token}`
      }
    })
    console.log(sam.data);
    }

    const clickkkk = async()=>{
      let result = await axios.get("http://127.0.0.1:5000/get_all") 
      console.log(result.data);
    }

    const dropEdit = async()=>{
      let result = await axios.post("http://127.0.0.1:5000/editName", {firstName});
      setFirstName(" ")
      console.log(result.data);
    }

    

  return (
    <div>
      <input value={firstName} onInput={(e)=>setFirstName(e.target.value)} placeholder='edit firstName'/>
      <button onClick={dropEdit}>Edit firstName</button> <br/>
      <button onClick={clickkkk}>Get ALL</button> <br/>
      {/* <div>{display}</div> */}
      {/* <button className='border' onClick={clickk}>click me</button> */}
      {/* <button className='border' onClick={profile}>Profile</button> */}

    </div>
  )
}

export default LogOut
