import React from 'react';
import { Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 150 150" className="mx-auto">
            <motion.path
              d="M75 30C60 45 45 60 45 75C45 90 60 105 75 120C90 105 105 90 105 75C105 60 90 45 75 30Z"
              stroke="#ff8599"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M45 75C60 60 90 60 105 75"
              stroke="#ff8599"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M75 30C60 60 60 90 75 120"
              stroke="#ff8599"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>
        </motion.div>
        
        <motion.h1 
          className="font-serif italic text-4xl md:text-5xl text-primary text-glow mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Page Not Found
        </motion.h1>
        
        <motion.p 
          className="text-foreground-400 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track to your beauty journey.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            as={Link}
            to="/"
            color="primary"
            startContent={<Icon icon="lucide:home" />}
          >
            Back to Home
          </Button>
          
          <Button 
            as={Link}
            to="/products"
            variant="bordered"
            color="primary"
            startContent={<Icon icon="lucide:shopping-bag" />}
          >
            Browse Products
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
export { NotFoundPage };