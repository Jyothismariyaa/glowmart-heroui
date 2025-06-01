import React from 'react';
import { motion } from 'framer-motion';

export const LogoAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <motion.svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <motion.path
            d="M100 20C80 50 50 80 20 100C50 120 80 150 100 180C120 150 150 120 180 100C150 80 120 50 100 20Z"
            stroke="#ff9cac"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M100 40C85 60 60 85 40 100C60 115 85 140 100 160C115 140 140 115 160 100C140 85 115 60 100 40Z"
            stroke="#ff9cac"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M100 60C90 70 70 90 60 100C70 110 90 130 100 140C110 130 130 110 140 100C130 90 110 70 100 60Z"
            stroke="#ff9cac"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          />
        </motion.svg>
        
        <motion.h1
          className="text-4xl font-serif italic text-primary glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          GlowMart
        </motion.h1>
        
        <motion.p
          className="text-sm text-white/70 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Your Glow Awaits
        </motion.p>
      </motion.div>
    </div>
  );
};
