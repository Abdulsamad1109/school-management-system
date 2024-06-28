import React, { useContext } from 'react'
import { courseContext } from '../App'

const RegisteredCourses = () => {
    let {registeredCourses,setRegisteredCourses} = useContext(courseContext)
    
    const remove = (i)=>{
      let d = registeredCourses.filter((_,index)=> i !== index)
      setRegisteredCourses(d)
    } 

    const total = registeredCourses.reduce((acc, registeredCourse)=> acc + parseInt(registeredCourse.unit), 0)

  return (
    <div>
     {
        registeredCourses.length? 
        <table className='border ml-6'>
          <thead>
            <tr>
              <th className='border'>S/N</th>
              <th className='border'>Course Code</th>
              <th className='border'>Course Title</th>
              <th className='border'>Course Unit</th>
            </tr>
          </thead>
          <tbody>
            {registeredCourses.map((registeredCourse,i)=>
            <tr key={i}>
              <td className='border'>{i+1}</td>
              <td className='border'>{registeredCourse.code}</td>
              <td className='border'>{registeredCourse.title}</td>
              <td className='border'>{registeredCourse.unit}</td>
              <td className='border'><button onClick={()=>remove(i)} className='border-2 w-24 rounded-lg h-9 text-gray-100 bg-blue-950'>Remove</button></td>
            </tr>
            )}
            <tr>
            <th className='border'>TOTAL</th> 
            <td className='border'></td>
            <td className='border'></td>
            <td className='border'>{total}</td>
          </tr>
          </tbody>
        </table>
        :
        <div>NO COURSES SELECTED!!!</div>
      }
    </div>
  )
}

export default RegisteredCourses
