import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'


function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', {})

  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  }, [])

  return (
    <section className='my-12'>
      <div className="containter mx-auto">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="my-6">
          Fullname : {loggedInUser.fullname} || Email : {loggedInUser.email}
        </div>
        <h2 className="text-xl font-bold mt-12 mb-6">Manage</h2>
        <ul className='list-disc list-inside'>
          <li><Link to="/orders" className='text-blue-500 underline'>Orders</Link></li>
          {loggedInUser.email === 'admin@admin.com' && <li><Link to="/Emails" className='text-blue-500 underline'>Emails</Link></li>}
        </ul>
      </div>
    </section>
  )
}

export default Dashboard