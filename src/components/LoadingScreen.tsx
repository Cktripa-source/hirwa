import React from 'react';
import  { motion } from 'framer-motion';
import { Monitor, Code, BarChart } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-dark-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="text-center">
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.5, 0.7],
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="relative w-24 h-24 bg-dark-900 rounded-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 flex">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-accent-blue"
                >
                  <Code size={40} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-2xl md:text-3xl font-bold mb-3 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hirwa Aller Bell
        </motion.h1>
        
        <motion.div
          className="flex space-x-4 justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="flex items-center text-sm text-gray-400">
            <BarChart size={14} className="mr-1 text-accent-blue" />
            <span>Mathematics</span>
          </span>
          <span className="flex items-center text-sm text-gray-400">
            <Monitor size={14} className="mr-1 text-accent-purple" />
            <span>Computer Science</span>
          </span>
          <span className="flex items-center text-sm text-gray-400">
            <Code size={14} className="mr-1 text-accent-cyan" />
            <span>Economics</span>
          </span>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue rounded-full w-40 mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
