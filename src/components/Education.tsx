import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">
            Strong academic foundation in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology (B.Tech) in Computer Science
                </h3>
                <h4 className="text-xl text-blue-600 font-semibold mb-4">
                  College of Engineering Thalassery
                </h4>
                
                <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2020 – 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Thalassery, Kerala, India</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Software Engineering</li>
                      <li>• Database Management Systems</li>
                      <li>• Computer Networks</li>
                      <li>• Operating Systems</li>
                      <li>• Web Technologies</li>
                      <li>• System Design</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Leadership Roles</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Website Head (2020-2024)</li>
                      <li>• Program Coordinator (2022-2024)</li>
                      <li>• Event Management Team Lead</li>
                      <li>• Student Tech Support</li>
                      <li>• Peer Mentor & Tutor</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">Academic Highlights</h5>
                  <p className="text-gray-700">
                    Consistently demonstrated leadership through active participation in college events, 
                    technical fests, and web development projects. Successfully coordinated major college 
                    events with 1000+ attendees while maintaining academic excellence in core computer 
                    science subjects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Learning */}
          <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Continuous Learning Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Practical Application</h4>
                <p className="text-gray-600 text-sm">
                  Applied academic knowledge through real-world projects and internships
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Industry Exposure</h4>
                <p className="text-gray-600 text-sm">
                  Gained hands-on experience through freelance projects and professional work
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Leadership Development</h4>
                <p className="text-gray-600 text-sm">
                  Developed coordination and management skills through college leadership roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;