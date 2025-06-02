import React, { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="bg-[var(--bg-color)]">
      <div className="container px-4 sm:px-6 py-6 sm:py-12 mx-auto">
        <div className="flex items-center flex-col text-center">
          <p className="font-medium text-blue-500 dark:text-blue-400 text-sm sm:text-base">Contact us</p>
          <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">Get in touch</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm"> Our team is always here to chat.{' '}
            <button className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-2 py-1 transition-transform duration-200 touch-active:scale-105" onClick={() => setIsChatOpen(!isChatOpen)} >Chat Now</button>
          </p>
        </div>

        {isChatOpen && (
          <div className="mt-4 p-3 sm:p-4 bg-gray-100 rounded-lg text-center text-gray-700 animate-fade-in">
            <p className="text-xs sm:text-sm">Welcome to the live chat! (This is a placeholder for a real chat feature.)</p>
            <button className="mt-2 text-xs sm:text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-2 py-1 transition-transform duration-200 touch-active:scale-105" onClick={() => setIsChatOpen(false)} > Close Chat </button>
            <button className="mt-2 text-xs sm:text-sm text-green-500 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full px-2 py-1 transition-transform duration-200 touch-active:scale-105" disabled > Send Message </button>
          </div>
        )}

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-24">
          <div className="flex items-center flex-col text-center">
            <span className="inline-block p-2 sm:p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 transform transition-transform duration-300 hover:scale-110 touch-active:scale-105" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <h2 className="mt-3 text-base sm:text-lg font-medium text-gray-800 dark:text-white">Email</h2>
            <p className="mt-1 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Our friendly team is here to help.</p>
            <p className="mt-1 text-blue-500 dark:text-blue-400 text-xs sm:text-sm cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 transition-transform duration-200 touch-active:scale-105" onClick={() => handleCopy('avdiajeti0612@gmail.com', 'email')} >
              avdiajeti0612@gmail.com
              {copied === 'email' && (
                <span className="ml-1 text-xs text-green-500 animate-pulse">Copied!</span>
              )}
            </p>
          </div>

          <div className="flex items-center flex-col text-center">
            <span className="inline-block p-2 sm:p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 transform transition-transform duration-300 hover:scale-110 touch-active:scale-105" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <h2 className="mt-3 text-base sm:text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
            <p className="mt-1 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Lorem, ipsum dolor.</p>
            <p className="mt-1 text-blue-500 dark:text-blue-400 text-xs sm:text-sm cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 transition-transform duration-200 touch-active:scale-105" onClick={() => handleCopy('+1 (555) 000-0000', 'phone')} >
              +1 (555) 000-0000
              {copied === 'phone' && (
                <span className="ml-1 text-xs text-green-500 animate-pulse">Copied!</span>
              )}
            </p>
          </div>
        </div>
      </div>
      {copied && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in-out">Copied {copied === 'email' ? 'email' : 'phone'} to clipboard!</div>
      )}
    </section>
  );
}

export default Contact;