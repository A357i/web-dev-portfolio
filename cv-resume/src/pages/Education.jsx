import React, { useState } from 'react';

function Education() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [filterYear, setFilterYear] = useState(null);

  const timelineItems = [
    {
      title: "Pursuing Masters Degree for Computer Engineering",
      year: "2023-27",
      description: "Currently enrolled in a Master's program focused on core areas such as artificial intelligence, web development, and system architecture.",
      details: "This includes advanced coursework in AI, web development, and system design. Expected graduation: 2027.",
    },
    {
      title: "Bootcamps & Learning",
      year: "2025",
      description: "Completed intensive online courses and bootcamps focused on full-stack web development, currently expanding backend skills and exploring cloud fundamentals.",
      details: "Completed intensive bootcamps on full-stack development and cloud technologies.",
    },
    {
      title: "Web Developer - Soft Skills",
      year: "2023",
      description: "Curious and self-motivated learner with strong attention to detail. Comfortable working independently or in teams, with a focus on consistency, and continuous improvement.",
      details: "Developed skills in teamwork, communication, and project management.",
    },
    {
      title: "Projects",
      year: "2023",
      description: "Actively working on new projects to apply backend concepts like MySQL and API integration as part of ongoing learning.",
      details: "Completed projects including e-commerce platforms and portfolio websites.",
    },
  ];

  const filteredItems = filterYear ? timelineItems.filter(item => item.year.includes(filterYear)) : timelineItems;

  const handleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section className="flex justify-center items-center flex-col min-h-auto pb-[5rem]">
      <h2 className="font-bold text-[2.6rem]">
        My <span className="text-[var(--main-color)]">Journey</span>
      </h2>

      {}
      <div className="mb-4">
        <select className="p-2 border border-gray-300 rounded" onChange={(e) => setFilterYear(e.target.value)} value={filterYear || ""} >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2025">2025</option>
          <option value="2023-27">2023-27</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="grow shrink basis-[40rem]">
          <h3 className="text-[2.5rem] mb-6 ml-8">Education</h3>
          <div className="border-l-[var(--main-color)] border-l-[0.2rem] border-solid">
            {filteredItems
              .filter(item => ["Pursuing Masters Degree for Computer Engineering", "Bootcamps & Learning"].includes(item.title))
              .map((item, index) => (
                <div key={index} className="relative pl-[2rem]">
                  <div className="relative p-[1.5rem] border-[0.2rem] border-solid border-[var(--main-color)] rounded-[0.6rem] mb-[2rem] cursor-pointer" onClick={() => handleExpand(index)} >
                    <div className="flex items-center gap-2 text-[var(--main-color)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "var(--main-color)" }} ><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                        </svg>
                      {item.year}
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                    {expandedItem === index && <p className="mt-2 text-sm text-gray-600">{item.details}</p>}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="grow shrink basis-[40rem]">
          <h3 className="text-[2.5rem] mb-6 ml-8">Projects & Soft Skills</h3>
          <div className="border-l-[var(--main-color)] border-l-[0.2rem] border-solid">
            {filteredItems
              .filter(item => ["Web Developer - Soft Skills", "Projects"].includes(item.title))
              .map((item, index) => (
                <div key={index + 2} className="relative pl-[2rem]">
                  <div className="relative p-[1.5rem] border-[0.2rem] border-solid border-[var(--main-color)] rounded-[0.6rem] mb-[2rem] cursor-pointer" onClick={() => handleExpand(index + 2)} >
                    <div className="flex items-center gap-2 text-[var(--main-color)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "var(--main-color)" }} ><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                    {expandedItem === index + 2 && <p className="mt-2 text-sm text-gray-600">{item.details}</p>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;