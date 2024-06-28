
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { courseContext } from '../App'



const StudentDashboard = () => {
  const {displayCourses, setDisplayCourses,registeredCourses,setRegisteredCourses,unit,setUnit} = useContext(courseContext)
  let [pick, setPick] = useState("Select")
  
  
  let result =  JSON.parse(localStorage.getItem("studentCourses"));
  
  useEffect(()=>{
    setDisplayCourses(result)
  },[])
  

  const pickCourse = (i)=>{
    let selectedCourse = displayCourses[i]
    setRegisteredCourses([...registeredCourses, selectedCourse])
    // setPick("selected")

  }

  const total = displayCourses.reduce((acc, each) => acc + parseInt(each.unit), 0)
  return (
    <div className='ml-4'>
      <header className='flex items-center justify-between mx-6'>
        <span className='font-bold text-lg'>My Dashboard</span>
        <Link className='border-2 w-20 flex items-center justify-center rounded-md h-8 text- text-gray-100 bg-blue-950' to='/login'>LogOut</Link>
      </header>
      <table className='border ml-6'>
        <thead>
          <tr>
            <th className='border'>S/N</th>
            <th className='border'>Course Code</th>
            <th className='border'>Course Title</th>
            <th className='border'>Course Unit</th>
            <th className='border'>Course Sel.</th>
          </tr>
        </thead>
        <tbody>
          {displayCourses.map((each,i)=>
          <tr key={i}>
            <td className='border'>{i+1}</td>
            <td className='border'>{each.code}</td>
            <td className='border'>{each.title}</td>
            <td className='border'>{each.unit}</td>
            <td className='border'><button onClick={()=>pickCourse(i)} className='border-2 w-24 rounded-lg h-9 text-gray-100 bg-blue-950'>{pick}</button></td>
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
      <div >View my <Link className='text-blue-700' to='/registeredcourses'>Registered Courses</Link></div>
      
    </div>
  )
}

export default StudentDashboard














































// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { courseContext } from '../App';

// const StudentDashboard = () => {
//   const { displayCourses, setDisplayCourses, registeredCourses, setRegisteredCourses, unit, setUnit } = useContext(courseContext);
//   let [selectedButtons, setSelectedButtons] = useState(Array(displayCourses.length).fill(false));

//   let result = JSON.parse(localStorage.getItem("studentCourses"));

//   useEffect(() => {
//     setDisplayCourses(result);
//   }, []);

//   const pickCourse = (i) => {
//     console.log(i);
//     let selectedCourse = displayCourses[i];
//     setRegisteredCourses([...registeredCourses, selectedCourse]);
//     let newSelectedButtons = [...selectedButtons];
//     newSelectedButtons[i] = true;
//     setSelectedButtons(newSelectedButtons);
//   };

//   const total = displayCourses.reduce((acc, each) => acc + parseInt(each.unit), 0);

//   return (
//     <div className='ml-4'>
//       <header className='flex items-center justify-between mx-6'>
//         <span className='font-bold text-lg'>My Dashboard</span>
//         <Link className='border-2 w-20 flex items-center justify-center rounded-md h-8 text- text-gray-100 bg-blue-950' to='/login'>LogOut</Link>
//       </header>
//       <table className='border ml-6'>
//         <thead>
//           <tr>
//             <th className='border'>S/N</th>
//             <th className='border'>Course Code</th>
//             <th className='border'>Course Title</th>
//             <th className='border'>Course Unit</th>
//             <th className='border'>Course Sel.</th>
//           </tr>
//         </thead>
//         <tbody>
//           {displayCourses.map((each, i) =>
//             <tr key={i}>
//               <td className='border'>{i + 1}</td>
//               <td className='border'>{each.code}</td>
//               <td className='border'>{each.title}</td>
//               <td className='border'>{each.unit}</td>
//               <td className='border'><button onClick={() => pickCourse(i)} className='border-2 w-24 rounded-lg h-9 text-gray-100 bg-blue-950'>{selectedButtons[i] ? 'Selected' : 'Select'}</button></td>
//             </tr>
//           )}
//           <tr>
//             <th className='border'>TOTAL</th>
//             <td className='border'></td>
//             <td className='border'></td>
//             <td className='border'>{total}</td>
//           </tr>
//         </tbody>
//       </table>
//       <div>View my <Link className='text-blue-700' to='/registeredcourses'>Registered Courses</Link></div>
//     </div>
//   )
// }

// export default StudentDashboard;