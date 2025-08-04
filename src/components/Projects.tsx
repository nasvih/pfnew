import React from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Token Terra",
      description: "Real estate platform using Ethereum smart contracts for secure property transactions",
      tech: ["Ethereum", "Smart Contracts", "Web3", "React", "Node.js"],
      type: "Blockchain"
    },
    {
      title: "Old School Games",
      description: "Retro gaming platform featuring classics like Tetris with modern web technologies",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"],
      type: "Gaming"
    },
    {
      title: "Coetian",
      description: "Assistance platform using Google Maps for bus tracking and hostel management",
      tech: ["Google Maps API", "Real-time Tracking", "React", "Firebase"],
      type: "Platform"
    }
  ];

  const eventProjects = [
    {
      title: "Spandanam",
      description: "Event portal for college fest with scheduling and live result updates",
      url: "https://spandanam.cethalassery.ac.in",
      features: ["Live Updates", "Scheduling", "Registration"]
    },
    {
      title: "Agnitus",
      description: "Technical fest portal with event management and participant tracking",
      url: "https://agnitus.cethalassery.ac.in",
      features: ["Event Management", "Participant Tracking", "Live Results"]
    },
    {
      title: "Quasso Liberum",
      description: "Quiz competition platform with real-time scoring and leaderboards",
      url: "https://quassoliberum.cethalassery.ac.in",
      features: ["Real-time Scoring", "Leaderboards", "Timer System"]
    },
    {
      title: "FundUp",
      description: "Financial literacy club website with resources and program management",
      url: "https://fundup.cethalassery.ac.in",
      features: ["Resource Library", "Program Management", "Student Portal"]
    }
  ];

  const clientProjects = [
    { name: "HeednHeal", url: "https://heednheal.com", category: "Healthcare", desc: "Clinic with token booking system" },
    { name: "F2S International", url: "https://f2sinternational.com", category: "Business", desc: "International business services" },
    { name: "The Whimsical Studio", url: "https://thewhimsicalstudio.co", category: "Creative", desc: "Design studio portfolio" },
    { name: "Dhalanaturals", url: "http://dhalanaturals.com", category: "E-commerce", desc: "Natural products store" },
    { name: "WaynDays", url: "https://wayndays.com", category: "Lifestyle", desc: "Lifestyle and wellness platform" },
    { name: "Fruity Al Rawda", url: "http://fruityalrawda.shop", category: "E-commerce", desc: "Fresh fruits delivery" },
    { name: "Poochkoo", url: "https://poochkoo.com", category: "Pet Care", desc: "Pet care services" },
    { name: "Anazurellp", url: "http://anazurellp.com", category: "Legal", desc: "Legal services firm" },
    { name: "Seven Oaks Pet", url: "http://sevenoakspet.in", category: "Pet Care", desc: "Pet care and supplies" },
    { name: "TechSube", url: "http://techsube.netlify.app", category: "Technology", desc: "Tech solutions platform" }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects & Portfolio</h2>
          <p className="text-lg text-gray-600">
            A comprehensive showcase of technical projects, client work, and event management platforms
          </p>
        </div>

        {/* Featured Technical Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Technical Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Management Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Event Management Platforms</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {eventProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Client Projects Portfolio (15+ Websites)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clientProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{project.name}</h4>
                    <span className="text-xs text-blue-600 font-medium">{project.category}</span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <p className="text-gray-700 text-lg">
                <strong>15+ Client Websites Delivered</strong> spanning Healthcare, E-commerce, Business Services, 
                Legal, Pet Care, and Technology sectors with integrated SEO, hosting, and digital branding solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;