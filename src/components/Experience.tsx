import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior DevOps Engineer",
      company: "Vahmine Technologies",
      period: "July 2024 – July 2025",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Optimized CI/CD pipelines with GitHub Actions for multiple projects",
        "Containerized and orchestrated deployments with Docker & Kubernetes",
        "Managed AWS infrastructure (EC2, S3, Route 53), ensured high uptime and cost-efficiency",
        "Automated configuration management with Ansible",
        "Implemented performance monitoring via Prometheus + Grafana",
        "Reduced deployment time by 60% through pipeline optimization"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 – Present",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Created 15+ websites with integrated SEO, hosting, and digital branding",
        "Developed complex applications including clinic booking systems with AWS integration",
        "Managed complete project lifecycle from conception to deployment",
        "Clients include healthcare, international business, e-commerce, and pet care industries",
        "Maintained 100% client satisfaction with timely delivery and post-launch support"
      ],
      projects: [
        { name: "HeednHeal.com", url: "https://heednheal.com", desc: "Clinic with token booking + AWS integration" },
        { name: "F2SInternational.com", url: "https://f2sinternational.com", desc: "International business portal" },
        { name: "Poochkoo.com", url: "https://poochkoo.com", desc: "Pet care services platform" },
        { name: "Anazurellp.com", url: "http://anazurellp.com", desc: "Legal services website" }
      ]
    },
    {
      title: "Website Head & Program Coordinator",
      company: "College of Engineering Thalassery",
      period: "2020 – 2024",
      location: "Thalassery, Kerala",
      type: "Leadership Role",
      achievements: [
        "Led college web projects for major fests & events (Spandanam, Agnitus, etc.)",
        "Built dynamic event portals with ticketing, scheduling, and live updates",
        "Coordinated 1000+ attendee operations, managed tech support and volunteers",
        "Streamlined event management processes through custom web solutions",
        "Trained and mentored junior team members in web development"
      ]
    },
    {
      title: "Founder",
      company: "FundUp Financial Literacy Club",
      period: "2023 – 2024",
      location: "College of Engineering Thalassery",
      type: "Leadership Role",
      achievements: [
        "Created and launched a financial literacy club from concept to execution",
        "Built comprehensive website fundup.cethalassery.ac.in",
        "Ran 4+ student-focused programs on budgeting & side hustles",
        "Engaged 200+ students in financial literacy initiatives",
        "Collaborated with industry experts for workshops and seminars"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">
            A diverse background spanning DevOps engineering, web development, and project coordination
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                <ul className="grid md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.projects && (
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Notable Projects:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.projects.map((project, projIndex) => (
                      <div key={projIndex} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                          >
                            {project.name}
                            <ExternalLink size={14} />
                          </a>
                        </div>
                        <p className="text-gray-600 text-sm">{project.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;