import React from 'react';
import { Code, Database, Brain, Award, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Computing Science Student at Queen's University</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Computing Science student with a strong academic record (3.9 GPA) and hands-on experience in data science and software development. My passion lies in leveraging technology to solve real-world problems and create meaningful impact.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With experience as a Data Science Intern at Westcoast Actuaries Inc., I've developed expertise in database management, data analysis, and creating actionable insights for business decision-making. I enjoy working on projects that combine technical complexity with practical applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-2 text-blue-600" />
                Richmond Hill, Ontario
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={20} className="mr-2 text-blue-600" />
                adanwu30@gmail.com
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={20} className="mr-2 text-blue-600" />
                647-537-3205
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Code size={32} className="mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
              <p className="text-sm text-gray-600">Building end-to-end applications with modern technologies</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <Database size={32} className="mx-auto mb-4 text-indigo-600" />
              <h4 className="font-semibold text-gray-900 mb-2">Data Science</h4>
              <p className="text-sm text-gray-600">Analyzing data to derive actionable business insights</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <Brain size={32} className="mx-auto mb-4 text-purple-600" />
              <h4 className="font-semibold text-gray-900 mb-2">Machine Learning</h4>
              <p className="text-sm text-gray-600">Implementing AI solutions for complex problems</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Award size={32} className="mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
              <p className="text-sm text-gray-600">Creating innovative solutions to technical challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;