import React from 'react';
import { Award, Clock, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      provider: "Amazon Web Services",
      status: "In Progress",
      description: "Comprehensive certification covering AWS architecture best practices, security, and cost optimization",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      icon: <Clock className="text-orange-600" size={20} />
    },
    {
      title: "Docker Certified Associate",
      provider: "Docker Inc.",
      status: "Certified",
      description: "Validation of Docker containerization skills and best practices",
      skills: ["Containerization", "Docker", "DevOps", "Application Deployment"],
      icon: <CheckCircle className="text-green-600" size={20} />
    },
    {
      title: "Financial Literacy Certification",
      provider: "Atingi",
      status: "Certified",
      description: "Comprehensive understanding of financial planning, budgeting, and investment principles",
      skills: ["Financial Planning", "Budgeting", "Investment", "Risk Management"],
      icon: <CheckCircle className="text-green-600" size={20} />
    },
    {
      title: "Career Coaching with ChatGPT",
      provider: "Udemy",
      status: "Certified",
      description: "Modern career development strategies using AI tools and digital platforms",
      skills: ["Career Development", "AI Tools", "Professional Growth", "Coaching"],
      icon: <CheckCircle className="text-green-600" size={20} />
    }
  ];

  const upcomingCertifications = [
    "Kubernetes Administrator (CKA)",
    "Azure Fundamentals (AZ-900)",
    "Google Cloud Professional Cloud Architect",
    "Certified ScrumMaster (CSM)"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Training</h2>
          <p className="text-lg text-gray-600">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{cert.provider}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'Certified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <div className="text-center mb-6">
            <Award className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Commitment to Continuous Learning</h3>
            <p className="text-gray-600">
              Currently pursuing additional certifications to stay at the forefront of technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Certifications</h4>
              <ul className="space-y-2">
                {upcomingCertifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <Clock size={16} className="text-blue-600" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Certification Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-green-600" />
                  Industry-validated expertise
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-green-600" />
                  Up-to-date with latest technologies
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-green-600" />
                  Commitment to professional growth
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-green-600" />
                  Enhanced problem-solving skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;