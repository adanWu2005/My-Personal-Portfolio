import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Header = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => {
        scrollToSection(href);
        setMobileMenuOpen(false);
      }}
      className={`${
        mobile ? 'block w-full text-left px-4 py-2' : 'px-3 py-2'
      } text-sm font-medium transition-colors duration-200 rounded-md ${
        activeSection === href
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container-padding">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Adan Wu</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink href="home">Home</NavLink>
            <NavLink href="about">About</NavLink>
            <NavLink href="education">Education</NavLink>
            <NavLink href="experience">Experience</NavLink>
            <NavLink href="projects">Projects</NavLink>
            <NavLink href="skills">Skills</NavLink>
            <NavLink href="contact">Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="home" mobile>Home</NavLink>
            <NavLink href="about" mobile>About</NavLink>
            <NavLink href="education" mobile>Education</NavLink>
            <NavLink href="experience" mobile>Experience</NavLink>
            <NavLink href="projects" mobile>Projects</NavLink>
            <NavLink href="skills" mobile>Skills</NavLink>
            <NavLink href="contact" mobile>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;