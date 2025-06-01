import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const LogoReveal = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-bg absolute inset-0 opacity-20"
      ></motion.div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-4"
        >
          <Icon 
            icon="lucide:flower" 
            className="text-primary text-7xl filter drop-shadow-[0_0_15px_rgba(255,156,188,0.7)]" 
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="font-serif italic text-4xl md:text-5xl text-foreground tracking-wide"
        >
          GlowMart
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-2 text-foreground-500 text-sm md:text-base font-light"
        >
          Your Glow Awaits
        </motion.p>
      </div>
    </div>
  );
};