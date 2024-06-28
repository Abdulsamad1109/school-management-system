import React, { useContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import { courseContext } from '../App'

const StaffDashboard = () => {
  const {unit,setUnit} = useContext(courseContext)
  let [courses, setCourses] = useState([])
  let [code, setCode] = useState("")
  let [title, setTitle] = useState("")
  // let [unit, setUnit] = useState("")


  
 

  const add =()=>{
    let combine = {code,title,unit: parseInt(unit)}
    setCourses([...courses, combine])
    let studentCourses = JSON.parse(localStorage.getItem("studentCourses") || "[]")
    studentCourses.push(combine)
    localStorage.setItem("studentCourses", JSON.stringify(studentCourses))
    setCode("")
    setTitle("")
    setUnit("")
  }

  const total = courses.reduce((acc, course) => acc + course.unit, 0)


  return (
    <div className='m-6'>
      <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder=' code' className='border border-gray-400 outline-none w-32 rounded-lg h-8'/>
      <input value={title} onInput={(e)=>setTitle((e.target.value))} placeholder=' title' className='border border-gray-400 outline-none w-32 rounded-lg h-8'/>
      <input value={unit} onInput={(e)=>setUnit((e.target.value))} placeholder=' unit' className='border border-gray-400 outline-none w-32 rounded-lg h-8'/> <br/>
      <button onClick={add} className='border-2 w-32 rounded-lg h-10 text-lg text-gray-100 bg-blue-950'>Add course</button>


      {
      courses.length ? 
      <table className='border'>
        <thead>
          <tr>
            <th className='border'>S/N</th>
            <th className='border'>Course Code</th>
            <th className='border'>Course Title</th>
            <th className='border'>Course Unit</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course,i)=>(
          <tr key={i}>
            <td className='border'>{i+1}</td>
            <td className='border'>{course.code}</td>
            <td className='border'>{course.title}</td>
            <td className='border'>{course.unit}</td>
          </tr>
          ))}
          <tr>
            <th className='border'>TOTAL</th>
            <td className='border'></td>
            <td className='border'></td>
            <td className='border'>{total}</td>
          </tr>
        </tbody>
      </table>:
      <div>NO COURSES ADDED!!</div>
      }
    </div>
  )
}

export default StaffDashboard
