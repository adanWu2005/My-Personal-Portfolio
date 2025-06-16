import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Mail size={32} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:adanwu30@gmail.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                adanwu30@gmail.com
              </a>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Phone size={32} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a 
                href="tel:647-537-3205" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                647-537-3205
              </a>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <MapPin size={32} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Richmond Hill, Ontario</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="https://github.com/adanWu2005" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Visit Adan Wu's GitHub Profile"
            >
              <Github size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a 
              href="https://www.linkedin.com/in/adan-wu-382a142a3/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Visit Adan Wu's LinkedIn Profile"
            >
              <Linkedin size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;