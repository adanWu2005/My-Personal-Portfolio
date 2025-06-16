import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const coursework = [
    'Discrete Structures II',
    'Logic for Computing Science',
    'Computer Architecture',
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Software Specifications'
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 border-l-4 border-blue-600">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <GraduationCap size={24} className="text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computing (Honours)</h3>
                  <p className="text-blue-600 font-medium">Queen's University</p>
                </div>
              </div>
              <span className="text-gray-500 font-medium">Kingston, ON</span>
            </div>
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Cumulative GPA: 3.9
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;