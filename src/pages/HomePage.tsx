import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  User, 
  Code, 
  Award, 
  Mail, 
  Download,
  BarChart,
  Monitor
} from 'lucide-react';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  
  // For section animations
  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });
  
  // Typing effect for hero text
  const [displayText, setDisplayText] = useState('');
  const fullText = "Mathematics, Computer Science & Economics Expert";
  const typingSpeed = 100;
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Skills data
  const skills = [
    { name: "Mathematics", icon: <BarChart className="text-accent-blue" size={24} />, bgClass: "from-blue-600/20 to-blue-600/5" },
    { name: "Computer Science", icon: <Monitor className="text-accent-purple" size={24} />, bgClass: "from-purple-600/20 to-purple-600/5" },
    { name: "Economics", icon: <Code className="text-accent-cyan" size={24} />, bgClass: "from-cyan-600/20 to-cyan-600/5" },
    { name: "Data Analysis", icon: <BarChart className="text-accent-blue" size={24} />, bgClass: "from-blue-600/20 to-blue-600/5" },
    { name: "Research", icon: <Code className="text-accent-purple" size={24} />, bgClass: "from-purple-600/20 to-purple-600/5" },
    { name: "Modeling", icon: <Monitor className="text-accent-cyan" size={24} />, bgClass: "from-cyan-600/20 to-cyan-600/5" }
  ];
  
  // Image URLs
  const profileImage = "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/b2ded442-8d58-441f-8230-8c48e692c300/public";
  const bgImage1 = "https://images.unsplash.com/photo-1668162456452-11e6ca7c8608?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwM2QlMjBhYnN0cmFjdCUyMGRpZ2l0YWwlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0NzQ2NzcwM3ww&ixlib=rb-4.1.0&fit=fillmax&h=1080&w=1920";
  const bgImage2 = "https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwM2QlMjBhYnN0cmFjdCUyMGRpZ2l0YWwlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0NzQ2NzcwM3ww&ixlib=rb-4.1.0&fit=fillmax&h=1080&w=1920";
  
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* 3D Animated Background intentionally removed; now only in App.tsx */}
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block mb-2">I'm Hirwa Aller Bell</span>
                <span className="gradient-text-animated">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Transforming complex problems into elegant solutions through an interdisciplinary approach combining mathematical precision, computational innovation, and economic insight.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-medium inline-flex items-center"
                  >
                    Get In Touch
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="px-8 py-3 glass rounded-lg font-medium inline-flex items-center">
                    <Download size={18} className="mr-2" />
                    Download CV
                  </button>
                </motion.div>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8">
                <a 
                  href="mailto:hirwaaller@gmail.com" 
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} className="mr-2 text-accent-blue" />
                  <span>Email</span>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100051803970636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <User size={18} className="mr-2 text-accent-purple" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="tel:+250736665113" 
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <User size={18} className="mr-2 text-accent-cyan" />
                  <span>Call Me</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue opacity-20 blur-lg" />
                
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark-800 relative z-10"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut" 
                  }}
                >
                  <img 
                    src={profileImage} 
                    alt="Hirwa Aller Bell" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 glass rounded-full p-4 shadow-lg z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-xs text-gray-300">Years Exp.</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="scroll-indicator"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section 
        ref={ref1}
        className="py-24 relative"
      >
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat bg-transparent"
            style={{
              backgroundImage: `url(${bgImage1})`,
              backgroundAttachment: 'fixed'
            }}
          ></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore my journey in the fields of Mathematics, Computer Science, and Economics.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Combining <span className="gradient-text-alt">Theory</span> with <span className="gradient-text-alt">Practice</span>
              </h3>
              
              <p className="text-lg mb-6 leading-relaxed">
                With over 5 years of experience bridging academic knowledge and practical applications, I've developed a unique interdisciplinary approach to problem-solving that combines mathematical precision, computational innovation, and economic insight.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                My expertise extends across data science, algorithm development, economic modeling, and research methodologies, allowing me to tackle complex challenges from multiple perspectives.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link 
                  to="/about" 
                  className="px-8 py-3 glass-darker rounded-lg font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <div className="glass rounded-xl p-1 overflow-hidden">
                <img 
                  src={bgImage2}
                  alt="3D abstract digital visualization" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        ref={ref2}
        className="py-24 relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A showcase of my professional skills and areas of specialization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-darker rounded-xl p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${skill.bgClass} w-16 h-16 flex items-center justify-center mb-6`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mb-4"></div>
                <p className="text-gray-300">
                  Advanced expertise in {skill.name.toLowerCase()} concepts, applications, and methodologies.
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link 
              to="/skills" 
              className="px-8 py-3 glass rounded-lg font-medium inline-flex items-center"
            >
              View All Skills
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ref3}
        className="py-24 relative"
      >
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat bg-transparent"
            style={{
              backgroundImage: `url(${bgImage1})`,
              backgroundAttachment: 'fixed'
            }}
          ></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView3 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-hero p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Collaborate?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Looking for expertise in Mathematics, Computer Science, or Economics? Let's connect and discuss how my interdisciplinary approach can help solve your challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-medium inline-flex items-center"
                >
                  Contact Me
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/education" 
                  className="px-8 py-4 glass-darker rounded-lg font-medium inline-flex items-center"
                >
                  View My Education
                  <Award size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
