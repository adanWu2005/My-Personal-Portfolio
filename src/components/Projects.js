import React from 'react';
import { Database, Brain, Code, ExternalLink, Github, Dumbbell, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "UrbanInsight: AI-Powered Real Estate Market Intelligence Platform",
      description: "Full-stack data analytics dashboard for real estate market research with demographic, employment, and crime trend analysis across U.S. cities.",
      technologies: ['Python', 'Pandas', 'Streamlit'],
      icon: Database,
      gradient: "from-blue-500 to-blue-600",
      techColorClasses: "bg-blue-100 text-blue-800",
      websiteUrl: "https://city-data-analysis-dashboard.onrender.com/", // Replace with your actual URL
      githubUrl: "https://github.com/adanWu2005/City-Data-Analysis-Dashboard" // Replace with your actual repo
    },
    {
      title: "Facial Landmark Detector",
      description: "Full-stack facial landmark detection web application for real-time and static image analysis with 68 facial landmarks visualization.",
      technologies: ['Python', 'Dlib', 'OpenCV', 'Gradio'],
      icon: Brain,
      gradient: "from-purple-500 to-purple-600",
      techColorClasses: "bg-purple-100 text-purple-800",
      websiteUrl: "https://your-facial-landmark-detector.gradio.app", // Replace with your actual URL
      githubUrl: "https://github.com/adanWu2005/Facial-Landmark-Comparer" // Replace with your actual repo
    },
    {
      title: "VSAlgo: Interactive Sorting Algorithm Visualizer",
      description: "Interactive visualization tool for sorting algorithms including Bubble Sort, Merge Sort, and Insertion Sort with real-time execution display.",
      technologies: ['ReactJS', 'CSS'],
      icon: Code,
      gradient: "from-green-500 to-green-600",
      techColorClasses: "bg-green-100 text-green-800",
      websiteUrl: "https://vsalgo.onrender.com/", // Replace with your actual URL
      githubUrl: "https://github.com/adanWu2005/Visual-Algorithm-Sorter" // Replace with your actual repo
    },
        {
      title: "FitterJitters: AI Food Recognition and Biometric Integration Hub",
      description: "Full-stack fitness tracking application with AI food recognition and Fitbit integration for comprehensive health monitoring.",
      technologies: ['ReactJS', 'Node.js', 'Fitbit API', 'JWT'],
      icon: Dumbbell,
      gradient: "from-orange-500 to-red-600",
      techColorClasses: "bg-orange-100 text-orange-800",
      websiteUrl: "https://fitterjitter.onrender.com/", // Replace with your actual URL
      githubUrl: "https://github.com/adanWu2005/Shapeshift-Workout-Tracker-Website" // Replace with your actual repo
    },
    {
      title: "OpenAI API Image Generator",
      description: "Interactive image generation tool powered by OpenAI API. Users can upload images and generate AI-powered custom images with real-time processing and dynamic creation.",
      technologies: ['ReactJS', 'OpenAI API', 'Node.js', 'Express.js'],
      icon: Sparkles,
      gradient: "from-pink-500 to-purple-600",
      techColorClasses: "bg-pink-100 text-pink-800",
      websiteUrl: "https://imagenerateai.onrender.com/", // Replace with your actual URL
      githubUrl: "https://github.com/adanWu2005/ImagenerateAI-Frontend" // Replace with your actual repo
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="card">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <IconComponent size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className={`${project.techColorClasses} px-2 py-1 rounded text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Website
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;