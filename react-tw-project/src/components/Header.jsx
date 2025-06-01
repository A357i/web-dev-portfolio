import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
    const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', {})
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const [cart, setCart] = useLocalStorage('cart', [])

    const handleLogout = () => {
        setIsLoggedIn(false)
        setLoggedInUser(null)
        navigate('/')
    }

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#" className='w-[200px] flex gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-8 fill-blue-500'><path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z"/>
                        </svg>
                        <span className='text-xl text-blue-900'>Trendify</span>
                    </a>

                <div className="flex lg:hidden">
                    <button onClick={() => setIsOpen(isOpen => !isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                    
                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    </div>
                </div>

    <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
        <div className="flex flex-col md:flex-row gap-6">
            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:my-0" to="/">Home</Link>
            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:my-0" to="/shop">Shop</Link>
            <div className="flex justify-start md:block">
                <Link to="/cart" className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 flex gap-2 items-center" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>

                    Cart ({cart.length})
                </Link>
            </div>
            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:my-0" to="/contact">Contact</Link>
                    {
                        isLoggedIn ? <>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:my-0" to="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" >Logout</button>
                        </> : <>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:my-0" to="/login">Login</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:my-0" to="/register">Register</Link>
                        </>
                    }
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header