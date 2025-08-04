import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
           
            <span>Muhammed Nasvih V</span>
      
          </div>
          
          <p className="text-gray-400 mb-4">
            Versatile Tech Professional | DevOps, Web, IT Ops, Coordination & Multi-Role Contributor
          </p>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>© 2025 Muhammed Nasvih V</span>
            <span>•</span>
            <span>Available for Saudi Arabia Opportunities</span>
            <span>•</span>
            <span>Ready to Start Immediately</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;