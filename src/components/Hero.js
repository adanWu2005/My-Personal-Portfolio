import React from 'react';
import { User, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="container-padding py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Adan Wu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Computer Science Student
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through data analysis, web development, and machine learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
          <div className="mt-16">
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 animate-bounce cursor-pointer" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;