import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { AiChatbot } from './ai-chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
      <AiChatbot />
    </div>
  );
};