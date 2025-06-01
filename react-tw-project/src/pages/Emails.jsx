import React, {useEffect} from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router'

function Emails() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', {})
  const [emails, setEmails] = useLocalStorage('emails', [])

  const navigate = useNavigate

  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  }, [])

  return (
    <section className="my-12">
      <div className="container mx-auto">
        {
          emails.length > 0 ? <table className='w-full'>
            <tbody>
              {
                emails.map((email, index) => <tr key={index.id}>
                                  <td className='border border-gray-200 px-4 py-2'>{email.fullname}</td>
                                  <td className='border border-gray-200 px-4 py-2'>{email.email}</td>
                                  <td className='border border-gray-200 px-4 py-2'>{email.subject}</td>
                                  <td className='border border-gray-200 px-4 py-2'>{email.message}</td>
                                  
                </tr>)
              }
            </tbody>
          </table> : <p>You haven't received any emails yet!</p>
        }
      </div>
    </section>
  )
}

export default Emails