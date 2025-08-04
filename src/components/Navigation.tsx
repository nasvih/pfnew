import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Nasvih V
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('experience')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;