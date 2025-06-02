import React, { useState, useEffect } from 'react';

const SkillCard = ({ title, description, bgColor, iconColor, additionalInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg shadow-md ${bgColor} flex-1 mx-1 sm:mx-2 transform transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}  >
      <div className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full ${iconColor} mb-1 sm:mb-2`}></div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      {isHovered && (
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2 transition-opacity duration-300">{additionalInfo}</p>
      )}
    </div>
  );
};

function About() {
  const quotes = [
    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
      priority: "code is my priority",
    },
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson",
      priority: "readability matters",
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      priority: "innovation drives me",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [goalProgress, setGoalProgress] = useState([30, 50, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-3xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800">About Me</h1>

        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-400 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
            <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full"></div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Full-Stack Developer</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-1 sm:mb-2">Passionate about creating innovative web solutions</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-4">
              A frontend-focused developer actively expanding into full-stack development. I enjoy learning by building small projects and am committed to improving both my technical skills and problem-solving mindset.
            </p>
            <div className="bg-gray-100 p-2 sm:p-3 rounded-lg inline-block transition-opacity duration-500">
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 italic">
                "{quotes[currentQuoteIndex].text}" <br />
                <span className="text-gray-500">— {quotes[currentQuoteIndex].author}</span>
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold mt-1">
                {quotes[currentQuoteIndex].priority}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8 gap-3 sm:gap-0">
          <SkillCard title="Frontend Focus" description="Modern UI/UX with React & Tailwind CSS" bgColor="bg-blue-50" iconColor="bg-blue-500" additionalInfo="Skilled in creating responsive, user-friendly interfaces." />
          <SkillCard title="Backend Skills" description="Database management & server-side logic" bgColor="bg-green-50" iconColor="bg-green-500" additionalInfo="Actively learning backend development with a focus on MySQL and data modeling." />
          <SkillCard title="Problem Solver" description="Analytical thinking & creative solutions" bgColor="bg-purple-50" iconColor="bg-purple-500" additionalInfo="Proven ability to tackle complex challenges with innovative solutions." />
        </div>

        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-black">Current Goals</h2>
          <ul className="list-disc list-inside text-gray-700">
            {[
              "Exploring backend development, with ongoing learning in MySQL and server-side concepts.",
              "Actively learning and looking forward to contributing to open-source and collaborative development.",
              "Learning full-stack development by building practical projects and improving problem-solving skills.",
            ].map((goal, index) => (
              <li key={index} className="mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm md:text-base">{goal}</span>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mt-1">
                  <div
                    className="bg-teal-500 h-2 sm:h-2.5 rounded-full"
                    style={{ width: `${goalProgress[index]}%`, transition: 'width 1s ease-in-out' }}
                  ></div>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                  {goalProgress[index]}% Complete
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;