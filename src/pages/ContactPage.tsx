import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Globe, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Background parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };
  
  // Reset form submission status after 5 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div className="pt-20 relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkYXJrJTIwYWJzdHJhY3QlMjAzZCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzQ3NDY2MDgzfDA&ixlib=rb-4.1.0&fit=fillmax&h=1080&w=1920)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5
          }}></div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      {/* Contact Page Content */}
      <motion.section 
        className="container mx-auto px-4 md:px-6 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Have a question or want to work together? Feel free to reach out using the form below or through my contact information.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="glass-darker p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-8 gradient-text-alt">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-dark-700 mr-4 text-accent-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a href="mailto:hirwaaller@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      hirwaaller@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-dark-700 mr-4 text-accent-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <a href="tel:+250736665113" className="text-gray-300 hover:text-white transition-colors">
                      +250 736665113
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-dark-700 mr-4 text-accent-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-gray-300">
                      Rubavu, Rwanda
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-dark-700 mr-4 text-accent-blue">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100051803970636" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Hirwa Aller Bell
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-3">
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100051803970636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full hover:bg-dark-700 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook size={18} />
                  </motion.a>
                  <motion.a
                    href="mailto:hirwaaller@gmail.com"
                    className="p-3 glass rounded-full hover:bg-dark-700 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-3 glass rounded-full hover:bg-dark-700 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-8 gradient-text-alt">Send Me a Message</h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/20 border border-green-800 p-6 rounded-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-green-800/30 rounded-full flex items-center justify-center mb-4">
                    <CheckIcon />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 glass-darker rounded-lg font-medium inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Another Message
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none bg-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-medium flex items-center justify-center transition-all disabled:opacity-70"
                    disabled={isLoading}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Location Map */}
        <motion.div 
          variants={itemVariants}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 gradient-text-alt text-center">Find Me Here</h2>
          <div className="glass p-1 rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41051356457!2d29.323657007204107!3d-1.6940732675772008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc4866ff224bf7%3A0xf37b8bed46226543!2sRubavu%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1625647892320!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Rubavu, Rwanda Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

// Loading spinner component
const LoadingSpinner = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// Check icon component
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default ContactPage;
