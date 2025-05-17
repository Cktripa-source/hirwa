import React from 'react';
import  { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Book, Award, Calendar, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationPage = () => {
  // For animating sections when they come into view
  const [eduRef, eduInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [certRef, certInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [courseRef, courseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Education data
  const education = [
    {
      degree: "Master's Degree in Data Science",
      institution: "University of Rwanda",
      location: "Kigali, Rwanda",
      period: "2020 - 2022",
      description: "Specialized in advanced machine learning algorithms and economic modeling with focus on predictive analytics for economic trends.",
      achievements: [
        "Graduated with honors (First Class)",
        "Published two research papers in international journals",
        "Recipient of the Dean's Award for Academic Excellence",
        "Teaching Assistant for Advanced Algorithms course"
      ],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzQ3NDY1OTk4fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
    },
    {
      degree: "Bachelor's in Mathematics & Computer Science",
      institution: "National University of Rwanda",
      location: "Butare, Rwanda",
      period: "2016 - 2020",
      description: "Double major with focus on computational mathematics and software engineering.",
      achievements: [
        "GPA: 3.9/4.0",
        "Led the university programming team to national competition finals",
        "Completed honors thesis on computational modeling of economic systems",
        "Received scholarship for academic excellence"
      ],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzfGVufDB8fHx8MTc0NzQ2NTk5OHww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
    },
    {
      degree: "Advanced Certification in Economics",
      institution: "Rwanda Economic Institute",
      location: "Rubavu, Rwanda",
      period: "2015 - 2016",
      description: "Specialized program focused on economic theory, market analysis, and financial modeling techniques.",
      achievements: [
        "Completed with distinction",
        "Developed economic model for local business growth predictions",
        "Participated in national economic forum as student representative",
        "Internship with National Bank of Rwanda"
      ],
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwc3R1ZHl8ZW58MHx8fHwxNzQ3NDY1OTk4fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
    }
  ];
  
  // Certifications data
  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2022",
      description: "Professional certification for proficiency in using TensorFlow to solve deep learning and machine learning problems."
    },
    {
      title: "Advanced Data Science Specialization",
      issuer: "IBM",
      date: "2021",
      description: "Mastery of data science methodologies, Python programming, data visualization, and machine learning algorithms."
    },
    {
      title: "Economic Analysis and Financial Modeling",
      issuer: "World Bank Institute",
      date: "2020",
      description: "Advanced techniques in economic modeling, financial forecasting, and policy impact analysis."
    },
    {
      title: "AWS Certified Machine Learning Specialist",
      issuer: "Amazon Web Services",
      date: "2019",
      description: "Expert-level certification for designing and implementing ML solutions on AWS cloud infrastructure."
    }
  ];
  
  // Courses data
  const courses = [
    "Advanced Algorithms and Data Structures",
    "Statistical Learning and Pattern Recognition",
    "Neural Networks and Deep Learning",
    "Econometrics and Time Series Analysis",
    "Financial Mathematics and Risk Modeling",
    "Macroeconomic Theory and Policy",
    "Distributed Systems and Cloud Computing",
    "Advanced Database Management Systems",
    "Natural Language Processing",
    "Computational Economics",
    "Research Methods in Computer Science",
    "Mathematical Modeling for Complex Systems"
  ];

  return (
    <div className="pt-20 relative min-h-screen">
      {/* Page Background */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Education & Qualifications
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-8"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg mb-12 leading-relaxed text-gray-300"
          >
            My educational journey spans the fields of Mathematics, Computer Science, and Economics, providing a strong foundation for my interdisciplinary approach to problem-solving.
          </motion.p>
        </motion.div>
      </section>
      
      {/* Education Timeline Section */}
      <section 
        ref={eduRef}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={eduInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-alt">Academic Journey</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-24">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={eduInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="glass overflow-hidden rounded-xl">
                    <img 
                      src={edu.image} 
                      alt={edu.institution} 
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="glass-darker p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-dark-700 mr-4 text-accent-blue">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <Book size={18} className="mr-3 text-accent-purple" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin size={18} className="mr-3 text-accent-purple" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar size={18} className="mr-3 text-accent-purple" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle size={16} className="mr-2 mt-1 text-accent-blue flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Certifications Section */}
      <section 
        ref={certRef}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 gradient-text-alt text-center">Professional Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-darker p-6 rounded-lg flex"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={certInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mr-5 mt-1">
                  <div className="p-3 rounded-full bg-dark-700 text-accent-blue">
                    <Award size={24} />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Courses Section */}
      <section 
        ref={courseRef}
        className="container mx-auto px-4 md:px-6 py-16 mb-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={courseInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Specialized Courses</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced coursework that has contributed to my expertise across the MCE disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="glass p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={courseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, backgroundColor: "rgba(20, 20, 20, 0.4)" }}
              >
                <div className="flex items-center">
                  <Book size={18} className="mr-3 text-accent-blue" />
                  <span>{course}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link to="/contact">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-medium flex items-center justify-center transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EducationPage;
