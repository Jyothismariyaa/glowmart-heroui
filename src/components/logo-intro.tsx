import React from 'react';
import { motion } from 'framer-motion';

export const LogoIntro: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-64 h-64 flex flex-col items-center justify-center"
      >
        <svg 
          className="logo-petals w-40 h-40 mb-4"
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#ff9cba" strokeWidth="2">
            <path d="M100,20 C120,50 150,80 100,100 C50,80 80,50 100,20" />
            <path d="M100,20 C80,50 50,80 100,100 C150,80 120,50 100,20" />
            <path d="M20,100 C50,80 80,50 100,100 C80,150 50,120 20,100" />
            <path d="M20,100 C50,120 80,150 100,100 C80,50 50,80 20,100" />
            <path d="M100,180 C80,150 50,120 100,100 C150,120 120,150 100,180" />
            <path d="M100,180 C120,150 150,120 100,100 C50,120 80,150 100,180" />
            <path d="M180,100 C150,120 120,150 100,100 C120,50 150,80 180,100" />
            <path d="M180,100 C150,80 120,50 100,100 C120,150 150,120 180,100" />
          </g>
        </svg>
        <motion.div
          className="logo-text font-serif italic text-4xl text-primary glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          GlowMart
        </motion.div>
      </motion.div>
    </div>
  );
};