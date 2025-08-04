import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';

const Languages = () => {
  const languages = [
    {
      language: "English",
      proficiency: "Professional Working Proficiency",
      level: 90,
      description: "Fluent in technical communication, client interactions, and documentation"
    },
    {
      language: "Malayalam",
      proficiency: "Native/Bilingual Proficiency",
      level: 100,
      description: "Native language with complete fluency in all contexts"
    },
    {
      language: "Hindi",
      proficiency: "Limited Working Proficiency",
      level: 70,
      description: "Comfortable in basic conversations and understanding"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Languages</h2>
          <p className="text-lg text-gray-600">
            Multilingual communication abilities for diverse work environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{lang.language}</h3>
                    <p className="text-blue-600 font-semibold">{lang.proficiency}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{lang.level}%</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-gray-700">{lang.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Communication Strengths</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Context</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Technical documentation and reporting</li>
                  <li>• Client presentations and meetings</li>
                  <li>• International team collaboration</li>
                  <li>• Cross-cultural communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Regional Advantage</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Native Malayalam for local Kerala market</li>
                  <li>• Hindi for North Indian clients and colleagues</li>
                  <li>• English for international business</li>
                  <li>• Cultural sensitivity and adaptation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;