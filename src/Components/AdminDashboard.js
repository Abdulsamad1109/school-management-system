import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='m-6'>
      <span className='rounded bg-blue-950 text-white p-2'><Link to='/staffregistration'>Register new staff</Link></span>
    </div>
  )
}

export default AdminDashboard
