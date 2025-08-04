import React from 'react';
import { Trophy, Star, Users, Calendar } from 'lucide-react';

const Awards = () => {
  const achievements = [
    {
      title: "Coordinator",
      event: "Innov8 Hackathon (Innovus 2024)",
      year: "2024",
      description: "Successfully coordinated a major hackathon event with 100+ participants, managing logistics, technical support, and participant engagement",
      icon: <Trophy className="text-yellow-600" size={24} />,
      skills: ["Event Management", "Technical Coordination", "Team Leadership"]
    },
    {
      title: "Ambassador Program Lead",
      event: "Agnitus 2023",
      year: "2023",
      description: "Led promotional activities and ambassador program for the college's premier technical fest, increasing participation by 40%",
      icon: <Star className="text-blue-600" size={24} />,
      skills: ["Marketing", "Leadership", "Student Engagement"]
    },
    {
      title: "Ticketing & Operations Head",
      event: "Spandanam 2022 & 2024",
      year: "2022, 2024",
      description: "Managed complete ticketing operations and event logistics for the college's cultural fest with 1000+ attendees across two years",
      icon: <Users className="text-green-600" size={24} />,
      skills: ["Operations Management", "Logistics", "Customer Service"]
    }
  ];

  const additionalActivities = [
    "Founder & President - FundUp Financial Literacy Club",
    "Website Development Team Lead - Multiple College Events",
    "Peer Mentor - Computer Science Department",
    "Technical Support Volunteer - College IT Department",
    "Student Representative - Academic Committee",
    "Workshop Organizer - Web Development & Career Guidance"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Activities</h2>
          <p className="text-lg text-gray-600">
            Recognition for leadership, coordination, and contribution to academic and extracurricular activities
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {achievement.icon}
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span className="font-medium">{achievement.year}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <h4 className="text-lg text-blue-600 font-semibold mb-3">{achievement.event}</h4>
              
              <p className="text-gray-700 mb-4">{achievement.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill, skillIndex) => (
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

        {/* Additional Activities */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Leadership & Activities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Star className="text-blue-600 flex-shrink-0" size={16} />
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Leadership Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-700">Total Event Attendees Managed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
              <p className="text-gray-700">Major Events Coordinated</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
              <p className="text-gray-700">Students Mentored & Guided</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;