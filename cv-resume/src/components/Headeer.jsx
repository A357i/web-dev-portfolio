import React, { useState } from 'react';

import logo from '../img/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative shadow dark:bg-gray-800 bg-transparent">
      <div className="container px-4 py-3 mx-auto sm:px-6 md:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <a href="#" className="flex items-center"><img src={logo} alt="Logo" className="h-8 sm:h-10" /></a>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white lg:hidden focus:outline-none" aria-label="Toggle menu" >
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10" > <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" /></svg>
            </button>
          </div>

          <div className={`absolute inset-x-0 z-20 w-full px-4 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${ isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full' } sm:px-6 md:px-8`} >
            <div className="flex flex-col space-y-2 -mx-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4 lg:mx-4">
              <a href="#home" onClick={() => setIsOpen(false)}  className="block px-3 py-2 mx-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition sm:text-base md:text-lg" >Home</a>
              <a href="#about" onClick={() => setIsOpen(false)}  className="block px-3 py-2 mx-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition sm:text-base md:text-lg" >About</a>
              <a href="#education" onClick={() => setIsOpen(false)} className="block px-3 py-2 mx-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition sm:text-base md:text-lg" >Education </a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 mx-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition sm:text-base md:text-lg" >Skills</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mx-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition sm:text-base md:text-lg" >Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;