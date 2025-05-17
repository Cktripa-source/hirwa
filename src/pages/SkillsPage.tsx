import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart, PenTool, Server, ArrowRight, Globe, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkillsPage = () => {
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
  
  // For animating sections when they come into view
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Technical skills data
  const technicalSkills = [
    { 
      category: "Programming", 
      icon: <Code size={24} className="text-accent-blue" />,
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "JavaScript", proficiency: 90 },
        { name: "Java", proficiency: 85 },
        { name: "R", proficiency: 85 },
        { name: "C++", proficiency: 80 }
      ]
    },
    { 
      category: "Data Science", 
      icon: <Database size={24} className="text-accent-blue" />,
      skills: [
        { name: "Machine Learning", proficiency: 92 },
        { name: "Data Analysis", proficiency: 95 },
        { name: "Statistical Modeling", proficiency: 90 },
        { name: "Big Data Technologies", proficiency: 82 },
        { name: "Neural Networks", proficiency: 85 }
      ]
    },
    { 
      category: "Economics", 
      icon: <BarChart size={24} className="text-accent-blue" />,
      skills: [
        { name: "Economic Modeling", proficiency: 90 },
        { name: "Market Analysis", proficiency: 88 },
        { name: "Econometrics", proficiency: 85 },
        { name: "Financial Analysis", proficiency: 82 },
        { name: "Policy Evaluation", proficiency: 85 }
      ]
    }
  ];
  
  // Technologies data
  const technologies = [
    { name: "TensorFlow", category: "AI/ML", logo: <Database size={24} /> },
    { name: "PyTorch", category: "AI/ML", logo: <Database size={24} /> },
    { name: "React", category: "Web Dev", logo: <Code size={24} /> },
    { name: "Node.js", category: "Web Dev", logo: <Server size={24} /> },
    { name: "AWS", category: "Cloud", logo: <Globe size={24} /> },
    { name: "Docker", category: "DevOps", logo: <Server size={24} /> },
    { name: "PostgreSQL", category: "Databases", logo: <Database size={24} /> },
    { name: "MongoDB", category: "Databases", logo: <Database size={24} /> },
    { name: "Tableau", category: "Data Viz", logo: <BarChart size={24} /> },
    { name: "D3.js", category: "Data Viz", logo: <BarChart size={24} /> },
    { name: "Scikit-Learn", category: "AI/ML", logo: <Database size={24} /> },
    { name: "Pandas", category: "Data Science", logo: <Database size={24} /> }
  ];
  
  // Project data
  const projects = [
    {
      title: "Economic Forecasting Model",
      description: "Developed a predictive model for economic indicators using machine learning algorithms and time series analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxlY29ub21pYyUyMGdyYXBofGVufDB8fHx8MTc0NzQ2NTk0M3ww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=600",
      tech: ["Python", "TensorFlow", "Economic Modeling"],
      icon: <BarChart size={24} />
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for visualizing complex datasets with real-time filtering and analysis capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkYXRhfGVufDB8fHx8MTc0NzQ2NTk0M3ww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=600",
      tech: ["JavaScript", "D3.js", "React"],
      icon: <Monitor size={24} />
    },
    {
      title: "Financial Analysis System",
      description: "Built a comprehensive system for financial data analysis, pattern recognition, and automated reporting.",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXNpc3xlbnwwfHx8fDE3NDc0NjU5NDN8MA&ixlib=rb-4.1.0&fit=fillmax&h=400&w=600",
      tech: ["Python", "R", "SQL", "Tableau"],
      icon: <Database size={24} />
    }
  ];
  
  // State for animating skill bars
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (skillsInView) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [skillsInView]);
  
  return (
    <div className="pt-20 relative min-h-screen">
      {/* Page Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0"></div>
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
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
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            My Skills & Expertise
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-8"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg mb-12 leading-relaxed text-gray-300"
          >
            With a focus on Mathematics, Computer Science, and Economics, I've developed a unique interdisciplinary skill set. Here's an overview of my technical capabilities and expertise.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass p-6 rounded-xl text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-blue-600 mx-auto flex items-center justify-center mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-300">Advanced coding skills across multiple languages and paradigms</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-purple-600 mx-auto flex items-center justify-center mb-4">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Science</h3>
              <p className="text-gray-300">Expert in analysis, machine learning, and statistical modeling</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-cyan-600 mx-auto flex items-center justify-center mb-4">
                <BarChart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Economics</h3>
              <p className="text-gray-300">Specialized in economic modeling and financial analysis</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Technical Skills Section */}
      <section 
        ref={skillsRef}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-alt">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive breakdown of my technical capabilities and proficiency levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {technicalSkills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-dark-700 mr-4">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-6">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-sm text-gray-400">{skill.proficiency}%</div>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${animate ? 'animate' : ''}`} 
                          style={{ width: `${skill.proficiency}%`, transitionDelay: `${skillIndex * 0.1}s` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Technologies Section */}
      <section 
        ref={techRef}
        className="container mx-auto px-4 md:px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={techInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text-alt text-center">Technologies & Tools</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="glass-darker p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-dark-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-accent-blue">
                  {tech.logo}
                </div>
                <h3 className="font-medium text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section 
        ref={projectsRef}
        className="container mx-auto px-4 md:px-6 py-16 mb-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={projectsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of projects that highlight my technical abilities and problem-solving approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass overflow-hidden rounded-xl flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-dark-700 mr-3 text-accent-blue">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs bg-dark-700 px-3 py-1 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link to="/education">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-medium flex items-center justify-center transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Education
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SkillsPage;
