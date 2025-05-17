import React from 'react';
import  { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Award, Book, Globe, Monitor, Star, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  // For animating sections when they come into view
  const [section1Ref, section1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section3Ref, section3InView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const bioData = [
    { label: "Name", value: "Hirwa Aller Bell" },
    { label: "Education", value: "MCE Specialist" },
    { label: "Location", value: "Rubavu, Rwanda" },
    { label: "Email", value: "hirwaaller@gmail.com" },
    { label: "Phone", value: "+250736665113" },
    { label: "Languages", value: "English, French, Kinyarwanda" }
  ];
  
  const profileImageUrl = "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/b2ded442-8d58-441f-8230-8c48e692c300/public";
  const backgroundImageUrl = "https://images.unsplash.com/photo-1635776062127-d379bfcba9f9?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JhZGllbnQlMjAzZCUyMHNoYXBlfGVufDB8fHx8MTc0NzQ2NTg3OHww&ixlib=rb-4.1.0&fit=fillmax&h=1080&w=1920";
  
  const awards = [
    { 
      title: "Academic Excellence", 
      description: "Top performer in Mathematics and Computer Science fields", 
      year: "2022", 
      icon: <Award size={20} />
    },
    { 
      title: "Research Innovation", 
      description: "Recognized for innovative approach in economic modeling", 
      year: "2021", 
      icon: <Book size={20} />
    },
    { 
      title: "International Collaboration", 
      description: "Led cross-border research initiative on data analysis", 
      year: "2020", 
      icon: <Globe size={20} />
    }
  ];

  return (
    <div className="pt-20 relative min-h-screen">
      {/* Page Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20 bg-transparent" style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-60 h-60 bg-accent-blue/10 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mb-8"></div>
            
            <p className="text-lg mb-6 leading-relaxed">
              I am Hirwa Aller Bell, a specialist in Mathematics, Computer Science, and Economics (MCE) from Rubavu, Rwanda. My interdisciplinary background enables me to approach complex problems with a unique perspective, combining analytical thinking, computational expertise, and economic principles.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              With over 5 years of experience, I've collaborated on diverse projects ranging from data analysis to economic modeling and software development. I'm passionate about leveraging technology and mathematical frameworks to create innovative solutions for real-world challenges.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-medium flex items-center justify-center transition-all"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </motion.button>
          </motion.div>
          
          <motion.div variants={item} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-blue/20 rounded-full animate-pulse"></div>
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-blue/20 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImageUrl} 
                  alt="Hirwa Aller Bell" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 md:w-28 md:h-28 glass rounded-full flex items-center justify-center z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold gradient-text">5+</div>
                  <div className="text-xs md:text-sm text-gray-300">Years Exp.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Bio Data Section */}
      <section 
        ref={section1Ref}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={section1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text-alt text-center">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bioData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={section1InView ? 
                  { opacity: 1, y: 0 } : 
                  { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 glass-darker rounded-lg"
              >
                <h3 className="text-gray-400 text-sm mb-2">{item.label}</h3>
                <p className="text-lg font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* My Journey Section */}
      <section 
        ref={section2Ref}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={section2InView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Journey</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A brief overview of my professional and academic journey in the fields of Mathematics, Computer Science, and Economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Left column: Academic Journey */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={section2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-dark-700 mr-4">
                  <Book size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-2xl font-semibold">Academic Journey</h3>
              </div>
              
              <div className="timeline-container">
                <div className="relative mb-10">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-semibold mb-2">Master's Degree in Data Science</h4>
                  <p className="text-accent-blue mb-1">2020 - 2022</p>
                  <p className="text-gray-300">
                    Specialized in advanced machine learning algorithms and economic modeling. Graduated with honors and completed thesis on predictive analytics for economic trends.
                  </p>
                </div>
                
                <div className="relative mb-10">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-semibold mb-2">Bachelor's in Mathematics & Computer Science</h4>
                  <p className="text-accent-blue mb-1">2016 - 2020</p>
                  <p className="text-gray-300">
                    Double major with focus on computational mathematics and software engineering. Completed multiple research projects combining both disciplines.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-semibold mb-2">Advanced Certification in Economics</h4>
                  <p className="text-accent-blue mb-1">2015 - 2016</p>
                  <p className="text-gray-300">
                    Specialized program focused on economic theory, market analysis, and financial modeling techniques.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Right column: Professional Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={section2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-dark-700 mr-4">
                  <Monitor size={24} className="text-accent-purple" />
                </div>
                <h3 className="text-2xl font-semibold">Professional Experience</h3>
              </div>
              
              <div className="timeline-container">
                <div className="relative mb-10">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-semibold mb-2">Data Science Lead</h4>
                  <p className="text-accent-purple mb-1">2022 - Present</p>
                  <p className="text-gray-300">
                    Leading a team of analysts and developers to implement data-driven solutions for economic and business challenges across multiple sectors.
                  </p>
                </div>
                
                <div className="relative mb-10">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-semibold mb-2">Research Associate</h4>
                  <p className="text-accent-purple mb-1">2020 - 2022</p>
                  <p className="text-gray-300">
                    Collaborated on interdisciplinary research projects combining mathematical modeling with economic principles to solve complex problems.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-semibold mb-2">Software Developer</h4>
                  <p className="text-accent-purple mb-1">2018 - 2020</p>
                  <p className="text-gray-300">
                    Developed applications and algorithms for data analysis and visualization, focusing on economic and financial applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Awards & Recognition Section */}
      <section 
        ref={section3Ref}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={section3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text-alt text-center">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? 
                  { opacity: 1, y: 0 } : 
                  { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-darker p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-dark-700 mr-3 text-accent-blue">
                    {award.icon}
                  </div>
                  <div className="text-sm text-accent-blue">{award.year}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-300 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link to="/skills">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-medium flex items-center justify-center transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore My Skills
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
