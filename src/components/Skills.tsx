import React from 'react';
import { Server, Cloud, Code, Monitor, Users, Briefcase, Wrench, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="text-blue-600" size={24} />,
      skills: [
        "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform",
        "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration"
      ]
    },
    {
      title: "Cloud & Monitoring",
      icon: <Cloud className="text-teal-600" size={24} />,
      skills: [
        "AWS (EC2, S3, Route 53)", "Azure", "Prometheus", "Grafana",
        "Cloud Architecture", "Performance Monitoring", "Cost Optimization"
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="text-indigo-600" size={24} />,
      skills: [
        "HTML5", "CSS3", "JavaScript", "React", "Node.js", "SEO Optimization",
        "Responsive Design", "Domain Management", "Web Hosting"
      ]
    },
    {
      title: "Database & Systems",
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Database Design",
        "System Administration", "Linux/Unix", "Backup & Recovery"
      ]
    },
    {
      title: "Project Management",
      icon: <Briefcase className="text-orange-600" size={24} />,
      skills: [
        "Agile Methodology", "Team Leadership", "Client Communication",
        "Event Coordination", "Stakeholder Management", "Resource Planning"
      ]
    },
    {
      title: "IT Support & Operations",
      icon: <Wrench className="text-green-600" size={24} />,
      skills: [
        "Technical Support", "Troubleshooting", "System Maintenance",
        "Help Desk Operations", "Network Administration", "Hardware Support"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-pink-600" size={24} />,
      skills: [
        "Problem Solving", "Critical Thinking", "Adaptability",
        "Communication", "Time Management", "Mentoring"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Monitor className="text-gray-600" size={24} />,
      skills: [
        "Git", "VS Code", "Postman", "Slack", "Microsoft Office Suite",
        "CRM Systems", "Google Workspace", "Project Management Tools"
      ]
    }
  ];

  const proficiencyLevels = [
    { skill: "CI/CD Pipeline Development", level: 90 },
    { skill: "Web Development", level: 95 },
    { skill: "AWS Cloud Services", level: 85 },
    { skill: "Docker & Kubernetes", level: 80 },
    { skill: "Project Coordination", level: 90 },
    { skill: "Client Communication", level: 95 },
    { skill: "Problem Solving", level: 90 },
    { skill: "Team Leadership", level: 85 }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning technical expertise, project management, 
            and interpersonal abilities suitable for both IT and non-IT roles.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-blue-600 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role Alignment */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect for IT Roles</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                DevOps Engineer & Cloud Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Web Developer & Full-Stack Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                IT Operations & System Administration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Technical Support & Help Desk
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Excellent for Non-IT Roles</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Project Coordinator & Program Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Operations Manager & Process Improvement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Client Relations & Account Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Event Management & Coordination
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;