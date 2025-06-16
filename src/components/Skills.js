import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ['Python', 'Java', 'JavaScript', 'CSS', 'HTML', 'SQL', 'R', 'C++', 'DAX', 'M'],
      colorClass: "skill-badge-blue"
    },
    {
      title: "Developer Tools", 
      skills: ['Git', 'GitHub', 'AWS', 'Jira', 'Confluence', 'Power BI'],
      colorClass: "skill-badge-green"
    },
    {
      title: "Libraries/Frameworks",
      skills: ['ReactJS', 'ExpressJS', '.NET', 'TypeScript', 'NodeJS', 'Angular'],
      colorClass: "skill-badge-purple"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={category.colorClass}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;