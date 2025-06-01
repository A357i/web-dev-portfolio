import { useLocalStorage } from '@uidotdev/usehooks'
import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router'

function Register() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)

  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) navigate('/dashboard')
  }, [])

  const handleRegister = event => {
    event.preventDefault()
    const data = event.target.elements 
    
    const user = {
      firstname: data.firstname.value,
      lastname: data.lastname.value,
      email: data.email.value,
      password: data.password.value
    }

    if(users.length > 0) {
      const emailAlreayInUse = users.filter(user => user.email == data.email.value).length > 0
      if (emailAlreayInUse) {
        alert(`${data.email.value} already in use!`)
      } else {
        setUsers([...users, user])
      }
    } else {
      setUsers([user])
    }
    event.target.reset()
    alert('Message was sent successfully')
    navigate('/login')
  }

  return (
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/11402446/file/original-16b74d9bdc1cd5e5b09556d16dc59b01.jpg?resize=1024x768&vertical=center')" }} >
            </div>

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>


                    <form method='POST' onSubmit={handleRegister} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" name='firstname' id='firstname' placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                            <input type="text" placeholder="Snow" name='lastname' id='lastname' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johnsnow@example.com" name='email' id='email' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                            <input type="password" placeholder="Enter your password" name='password' id='password' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <button
                            className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Sign Up </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                        <Link to="/Login" className='flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>Login</Link>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register