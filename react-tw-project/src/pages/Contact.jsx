import { useLocalStorage } from '@uidotdev/usehooks'
import React from 'react'
import { useNavigate } from 'react-router'

function Contact() {
  const [emails, setEmails] = useLocalStorage('emails', [])

  const navigate = useNavigate();

  const handleContact = event => {
    event.preventDefault()
    const data = event.target.elements 
    
    const email = {
      fullname: data.fullname.value,
      email: data.email.value,
      subject: data.subject.value,
      message: data.message.value
    }

    if(emails.length > 0) {
      setEmails([...emails , email])
    } else {
      setEmails([email])
    }
    event.target.reset()
    alert('Message was sent successfully')
    // navigate('/')
  }

  return (
    <section className="my-12">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Contact</h2>

          <form method='POST' onSubmit={handleContact} className='w-1/2 mt-12'>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="fullname">Fullname</label>
                      <input id="fullname" name='fullname' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                      <input id="emailAddress" name='email' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div className='col-span-2'>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="subject">Subject</label>
                      <input id="subject" name='subject' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>
                  
                  <div className='col-span-2'>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="message">Message</label>
                    <textarea id="message" name='message' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                  </div>

              </div>
              <div className="flex justify-end mt-6">
                  <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send</button>
              </div>
          </form>
      </div>
    </section>
  )
}

export default Contact