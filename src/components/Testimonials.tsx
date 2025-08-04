import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Prof. Priya V V',
      role: 'HOD Computer Science Department',
      company: 'College of Engineering Thalassery',
      content: 'Nasvih demonstrated exceptional technical leadership and project management skills during his tenure. His ability to coordinate complex technical projects and lead teams made him an invaluable asset to our department.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Healthcare Technology Director',
      company: 'Heed n Heal Clinic',
      content: 'The appointment booking system and patient management platform developed by Nasvih transformed our clinic operations. The token-based system reduced wait times by 60% and improved patient satisfaction significantly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Vahmine Technologies',
      content: 'Nasvih\'s DevOps expertise helped us scale our infrastructure efficiently. His implementation of CI/CD pipelines and monitoring systems reduced our deployment time by 60% while maintaining 99.9% uptime.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      company: 'Poochkoo Pet Care',
      content: 'The e-commerce platform and digital marketing strategy implemented by Nasvih increased our online sales by 300%. His understanding of both technology and business needs is remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Nair',
      role: 'Educational Consultant',
      company: 'F2S Careers',
      content: 'Nasvih created a comprehensive platform that streamlined our student counseling process. The website and CRM integration helped us serve 500+ students more effectively.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Alex Thompson',
      role: 'Event Coordinator',
      company: 'College Events Team',
      content: 'The event management platforms developed for our college festivals were game-changers. Real-time updates, automated ticketing, and result portals made managing 10,000+ participants seamless.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-sm">
            <Quote className="w-5 h-5 mr-3" />
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Feedback from clients, colleagues, and industry professionals who have experienced my work firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100/80 group"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-8">
                <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-60" />
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shadow-lg">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Ready to Work Together?</h3>
            <p className="text-blue-100 text-xl mb-8 font-light">
              Join the growing list of satisfied clients who have transformed their business with innovative solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              <User size={22} className="mr-3" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;