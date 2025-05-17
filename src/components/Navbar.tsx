import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Code, Award, Mail, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Skills', path: '/skills', icon: <Code size={18} /> },
    { name: 'Education', path: '/education', icon: <Award size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];
  
  // Check if route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div 
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-20 blur-lg transition-opacity"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative text-xl font-bold gradient-text-alt">Hirwa Bell</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${
                  isActive(link.path)
                    ? 'bg-dark-800/80 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
                }`}
              >
                <span className={`mr-1.5 ${isActive(link.path) ? 'text-accent-blue' : ''}`}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-dark-800/50 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                        isActive(link.path)
                          ? 'bg-dark-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
                      }`}
                    >
                      <span className={`mr-2 ${isActive(link.path) ? 'text-accent-blue' : ''}`}>
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
