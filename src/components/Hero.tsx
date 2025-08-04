import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/profile-photo.jpg"
                alt="Muhammed Nasvih V - Professional Photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Muhammed Nasvih V
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-6">
              Versatile Tech Professional | DevOps, Web, IT Ops, Coordination & Multi-Role Contributor
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              Self-driven DevOps & IT professional with real-world experience deploying CI/CD pipelines, building cloud-native platforms, and managing multi-client web development projects. Thrives at the intersection of development, operations, and client solutions.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Available for Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>+91 9539966671</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>nasvih.va@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              <a
                href="https://linkedin.com/in/nasvih"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://nasvih.click"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200"
              >
                <Globe size={16} />
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;