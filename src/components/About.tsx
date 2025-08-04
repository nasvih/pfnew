import React from 'react';
import { Target, Users, Briefcase, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Mission-Driven",
      description: "Seeking roles in DevOps, Web/IT Ops, Cloud Infrastructure, Tech Support, and Project Coordination"
    },
    {
      icon: <Users className="text-teal-600" size={24} />,
      title: "Multi-Role Expertise",
      description: "Versatile professional comfortable in technical, operational, and coordination roles"
    },
    {
      icon: <Briefcase className="text-indigo-600" size={24} />,
      title: "Real-World Experience",
      description: "Hands-on experience with enterprise-level CI/CD pipelines and cloud-native platforms"
    },
    {
      icon: <Award className="text-orange-600" size={24} />,
      title: "Client Success",
      description: "Delivered 15+ successful web development projects with integrated SEO and digital branding"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A versatile technology professional with a unique blend of DevOps expertise, web development skills, 
            and project coordination experience. Ready to contribute to diverse technical and operational roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Choose Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Excellence</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Optimized CI/CD pipelines with GitHub Actions</li>
                <li>• Containerized deployments with Docker & Kubernetes</li>
                <li>• AWS infrastructure management (EC2, S3, Route 53)</li>
                <li>• Performance monitoring via Prometheus + Grafana</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership & Coordination</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Coordinated 1000+ attendee operations</li>
                <li>• Led college web projects for major events</li>
                <li>• Founded and managed FundUp financial literacy club</li>
                <li>• Delivered client projects with integrated solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;