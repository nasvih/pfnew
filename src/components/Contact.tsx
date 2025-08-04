import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Download, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      label: "Phone",
      value: "+91 9539966671",
      href: "tel:+919539966671"
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      label: "Email",
      value: "nasvih.va@gmail.com",
      href: "mailto:nasvih.va@gmail.com"
    },
    {
      icon: <Linkedin className="text-blue-700" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/nasvih",
      href: "https://linkedin.com/in/nasvih"
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      label: "Website",
      value: "nasvih.click",
      href: "https://nasvih.click"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      label: "Availability",
      value: "Saudi Arabia (3-month work visa)",
      href: null
    }
  ];

  const quickActions = [
    {
      title: "Download Resume",
      description: "Get my complete resume in PDF format",
      icon: <Download className="text-blue-600" size={24} />,
      action: "download",
      className: "bg-blue-50 hover:bg-blue-100 border-blue-200"
    },
    {
      title: "Send Email",
      description: "Reach out directly via email",
      icon: <Send className="text-green-600" size={24} />,
      action: "mailto:nasvih.va@gmail.com",
      className: "bg-green-50 hover:bg-green-100 border-green-200"
    },
    {
      title: "LinkedIn Connect",
      description: "Connect with me on LinkedIn",
      icon: <Linkedin className="text-blue-700" size={24} />,
      action: "https://linkedin.com/in/nasvih",
      className: "bg-blue-50 hover:bg-blue-100 border-blue-700"
    }
  ];

  const handleAction = (action: string) => {
    if (action === "download") {
      const link = document.createElement('a');
      link.href = '/resume-nasvih-va.pdf';
      link.download = 'Nasvih_VA_Resume.pdf';
      link.click();
    } else if (action.startsWith('mailto:')) {
      window.location.href = action;
    } else if (action.startsWith('http')) {
      window.open(action, '_blank');
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss how my diverse skill set can contribute to your team's success. 
            Available for immediate opportunities in Saudi Arabia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {contact.icon}
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-medium">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Ready to Start Immediately</h4>
              <p className="text-gray-700 mb-4">
                Currently available for immediate opportunities in Saudi Arabia with a 3-month work visa. 
                Seeking roles in DevOps, IT Operations, Web Development, Technical Support, and Project Coordination.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Available Immediately
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Saudi Arabia Ready
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Multi-Role Capable
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-6">
              {quickActions.map((actionItem, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(actionItem.action)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-200 text-left ${actionItem.className}`}
                >
                  <div className="flex items-center gap-4">
                    {actionItem.icon}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{actionItem.title}</h4>
                      <p className="text-gray-600">{actionItem.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="text-yellow-600" size={20} />
                Saudi Arabia Opportunity
              </h4>
              <p className="text-gray-700 mb-4">
                Specifically seeking opportunities in Saudi Arabia with a valid 3-month work visa. 
                Open to both IT and non-IT roles across various industries.
              </p>
              <div className="text-sm text-yellow-800 font-medium">
                🕒 Response Time: Within 24 hours
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you need a DevOps engineer, web developer, IT support specialist, or project coordinator, 
              I bring versatility, expertise, and a commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:nasvih.va@gmail.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/nasvih"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;