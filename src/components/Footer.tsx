import React from 'react';
import  { Link } from 'react-router-dom';
import { Github, Mail, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="glass-darker rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text-alt">Hirwa Aller Bell</h3>
              <p className="text-gray-300 mb-4">
                Specialist in Mathematics, Computer Science, and Economics with a passion for leveraging technology to solve complex problems.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100051803970636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-full hover:bg-dark-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href="mailto:hirwaaller@gmail.com" 
                  className="p-2 glass rounded-full hover:bg-dark-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-full hover:bg-dark-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link>
                </li>
                <li>
                  <Link to="/education" className="text-gray-300 hover:text-white transition-colors">Education</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-2 text-accent-blue" />
                  <a href="mailto:hirwaaller@gmail.com" className="hover:text-white transition-colors">
                    hirwaaller@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-2 text-accent-blue" />
                  <a href="tel:+250736665113" className="hover:text-white transition-colors">
                    +250 736 665 113
                  </a>
                </li>
                <li className="flex items-start text-gray-300">
                  <MapPin size={16} className="mr-2 mt-1 text-accent-blue" />
                  <span>Rubavu, Rwanda</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter/Subscribe */}
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-3">
                Subscribe to my newsletter for latest updates and insights.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-dark-800/50 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-accent-blue text-white rounded-r-lg hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Hirwa Aller Bell. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <span>MCE Specialist</span>
              <span className="mx-2">•</span>
              <span>Data Science Expert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
