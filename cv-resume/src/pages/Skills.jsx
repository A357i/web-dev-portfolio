import React, { useState, useEffect } from 'react';

const SkillButton = ({ skill, bgColor, textColor, onClick, isActive }) => (
  <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full ${bgColor} ${textColor} font-semibold text-xs sm:text-sm shadow-md cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`} onClick={onClick} onTouchStart={onClick}>
    {skill}
  </div>
);

const ProficiencyBar = ({ skill, level, color }) => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFillLevel(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-3 sm:mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-xs sm:text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-xs sm:text-sm font-medium text-gray-700">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
        <div
          className={`h-2 sm:h-2.5 rounded-full ${color} transition-all duration-1000`}
          style={{ width: `${fillLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isExpandingOpen, setIsExpandingOpen] = useState(true);

  const skillDetails = {
    HTML5: "Expertise in building semantic and accessible web structures.",
    CSS3: "Proficient in creating responsive and modern designs.",
    JavaScript: "Strong skills in dynamic and interactive web development.",
    React: "Experienced in building reusable UI components.",
    Tailwind: "Skilled in rapid UI development with utility-first CSS.",
    MySQL: "Knowledgeable in database design and query optimization.",
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-2xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Full-Stack Developer Skills</h1>

        <div className="flex flex-col lg:flex-row justify-between mb-6 sm:mb-8 gap-4 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:pr-4">
            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-center bg-purple-600 text-white py-1 sm:py-2 rounded-t-lg">Frontend Technologies</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <SkillButton skill="HTML5" bgColor="bg-orange-500" textColor="text-white" onClick={() => handleSkillClick('HTML5')} isActive={activeSkill === 'HTML5'} />
              <SkillButton skill="CSS3" bgColor="bg-blue-600" textColor="text-white" onClick={() => handleSkillClick('CSS3')} isActive={activeSkill === 'CSS3'} />
              <SkillButton skill="JavaScript" bgColor="bg-yellow-400" textColor="text-black" onClick={() => handleSkillClick('JavaScript')} isActive={activeSkill === 'JavaScript'} />
              <SkillButton skill="React" bgColor="bg-cyan-400" textColor="text-black" onClick={() => handleSkillClick('React')} isActive={activeSkill === 'React'} />
              <SkillButton skill="Tailwind" bgColor="bg-teal-400" textColor="text-black" onClick={() => handleSkillClick('Tailwind')} isActive={activeSkill === 'Tailwind'} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-4">
            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-center bg-teal-600 text-white py-1 sm:py-2 rounded-t-lg">Backend Technologies</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <SkillButton skill="MySQL" bgColor="bg-blue-700" textColor="text-white" onClick={() => handleSkillClick('MySQL')} isActive={activeSkill === 'MySQL'} />
              <SkillButton skill="More to come..." bgColor="bg-gray-300" textColor="text-gray-600" />
              <SkillButton skill="Expanding..." bgColor="bg-gray-300" textColor="text-gray-600" />
            </div>
          </div>
        </div>

        {activeSkill && (
          <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gray-100 rounded-lg text-center text-xs sm:text-sm text-gray-700">
            {skillDetails[activeSkill] || "More details coming soon!"}
          </div>
        )}

        <div className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-blue-600">Proficiency Level</h2>
          <ProficiencyBar skill="HTML/CSS" level={90} color="bg-green-500" />
          <ProficiencyBar skill="JavaScript" level={85} color="bg-purple-500" />
          <ProficiencyBar skill="React" level={80} color="bg-blue-500" />
          <ProficiencyBar skill="Tailwind" level={75} color="bg-teal-500" />
          <ProficiencyBar skill="MySQL" level={55} color="bg-orange-500" />
        </div>

        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 flex justify-between items-center text-black">
            Currently Expanding
            <button className="text-xs sm:text-sm text-teal-600 hover:text-teal-800 px-2 py-1 rounded" onClick={() => setIsExpandingOpen(!isExpandingOpen)}> {isExpandingOpen ? 'Collapse' : 'Expand'} </button>
          </h2>
          {isExpandingOpen && (
            <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm">
              <li>MySQL (Currently Learning)</li>
              <li>PHP 8.3 & Laravel 12 (In Progress)</li>
              <li>RESTful APIs</li>
              <li>Git & Version Control</li>
              <li>Cloud Deployment</li>
              <li>Testing Frameworks</li>
            </ul>
          )}
        </div>

        <p className="text-center text-gray-600 text-xs sm:text-sm">
          Passionate about creating end-to-end web solutions
        </p>
      </div>
    </div>
  );
}

export default Skills;