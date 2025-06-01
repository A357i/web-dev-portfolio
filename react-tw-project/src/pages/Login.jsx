import { useLocalStorage } from '@uidotdev/usehooks'
import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router'

function Login() {
    const [users, setUsers] = useLocalStorage('users', [])
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
    const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', {})

    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn) navigate('/dashboard')
    }, [])

    const handleLogin = event => {
    event.preventDefault()
    const data = event.target.elements 
    

    const email = data.email.value
    const password = data.password.value

    const user = users.filter(user => (user.email == email && user.password == password))
    if(user.length > 0){
        setIsLoggedIn(true)
        setLoggedInUser(user[0])
        navigate('/dashboard')
    } else {
        alert('Credentials does not match')
    }
    
    }

    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                    <form method='POST' onSubmit={handleLogin} className=" gap-6 mt-8 md:grid-cols-2">

                        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="px-6 py-4">
                                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                                    <div className="w-full mt-4">
                                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" name='email' placeholder="Email Address" aria-label="Email Address" />
                                    </div>

                                    <div className="w-full mt-4">
                                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" name='password' placeholder="Password" aria-label="Password" />
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign In
                                        </button>
                                    </div>
                            </div>

                            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                                <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                                <Link to="/register" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login