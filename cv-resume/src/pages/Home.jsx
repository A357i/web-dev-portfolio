import React, { useEffect, useState } from 'react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[85vh] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 relative overflow-hidden flex flex-col justify-center items-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50 animate-fade-out">
          <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      <div className={`w-full flex flex-col items-center text-center transition-opacity duration-500 ${ isLoaded ? 'opacity-100' : 'opacity-0' }`} >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>Hi, I'm <span className="text-[var(--main-color)]">Avdi Ajeti</span></h1>
        <h3 className="mt-2 text-base sm:text-lg md:text-xl lg:text-4xl font-semibold text-[var(--main-color)] animate-slide-up" style={{ animationDelay: '0.4s' }}>Fullstack Developer</h3>
        <p className="mt-3 max-w-xl text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Skilled in front-end development and modern web technologies. Passionate about creating efficient, user-friendly digital solutions and continuously improving my skills.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <a href="#contact" className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[var(--main-color)] text-white rounded-lg text-sm sm:text-base md:text-lg transition hover:bg-transparent hover:text-[var(--main-color)] border border-[var(--main-color)] focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]" aria-label="Send a message to Avdi Ajeti" >Send Message</a>
        </div>

        <div className="mt-4 flex justify-center gap-3 animate-slide-up" style={{ animationDelay: '1s' }}>
          {[{
            href: 'https://discordapp.com/users/871169634089447455',
            label: "Discord",
            icon: (
              <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
            ),
          }, {
            href: 'https://github.com/A357i/',
            label: "GitHub",
            icon: (
              <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
            ),
          }, {
            href: 'https://t.me/a357ii',
            label: "Telegram",
            icon: (
              <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
            ),
          }].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-[var(--main-color)] text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]" aria-label={`Visit Avdi Ajeti's ${label} profile`} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">{icon}</svg></a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
