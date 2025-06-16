import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Collaborated on a summer project with a senior software developer to enhance functionality by creating and modifying database schema objects in SQL Server 2008 R2 system, ensuring seamless operations for business-critical functions.",
    "Improved the stability and performance of the database system, ensuring seamless operations for business-critical functions.",
    "Delivered SQL queries to extract and analyze data for business use, enhancing decision-making processes and providing actionable insights."
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="relative card p-8 ml-12 border-l-4 border-blue-600">
              <div className="absolute -left-16 top-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Data Science Intern</h3>
                  <p className="text-blue-600 font-medium">Westcoast Actuaries Inc.</p>
                </div>
                <span className="text-gray-500 font-medium">May 2024 - August 2024</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Leadership */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leadership</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Programming Tutor</h4>
                <span className="text-gray-500 font-medium">Jul 2023 - Present</span>
              </div>
              <p className="text-gray-700">
                Tutored students in Python, helping them improve their understanding of core programming concepts by conducting weekly 1-on-1 sessions and tailored lesson plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;