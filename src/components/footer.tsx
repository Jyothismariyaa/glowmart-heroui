import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Input, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-card border-t border-white/10 mt-16 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 20C80 50 50 80 20 100C50 120 80 150 100 180C120 150 150 120 180 100C150 80 120 50 100 20Z"
                  stroke="#ff9cac"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 40C85 60 60 85 40 100C60 115 85 140 100 160C115 140 140 115 160 100C140 85 115 60 100 40Z"
                  stroke="#ff9cac"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 60C90 70 70 90 60 100C70 110 90 130 100 140C110 130 130 110 140 100C130 90 110 70 100 60Z"
                  stroke="#ff9cac"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <span className="font-serif italic text-xl ml-2 text-white glow-text">GlowMart</span>
            </div>
            <p className="text-white/70 text-sm">
              Discover your perfect glow with our AI-powered beauty solutions. Luxury beauty products for every skin type and tone.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon icon="lucide:instagram" width={20} />
              </motion.a>
              <motion.a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon icon="lucide:music" width={20} />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon icon="lucide:youtube" width={20} />
              </motion.a>
              <motion.a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon icon="lucide:pinterest" width={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link as={RouterLink} to="/products" className="text-white/70 hover:text-primary text-sm">All Products</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/products?category=skincare" className="text-white/70 hover:text-primary text-sm">Skincare</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/products?category=makeup" className="text-white/70 hover:text-primary text-sm">Makeup</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/products?category=fragrance" className="text-white/70 hover:text-primary text-sm">Fragrance</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/products?category=tools" className="text-white/70 hover:text-primary text-sm">Tools & Brushes</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/products?category=sets" className="text-white/70 hover:text-primary text-sm">Gift Sets</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/store-check" className="text-white/70 hover:text-primary text-sm">Find a Store</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/size-guide" className="text-white/70 hover:text-primary text-sm">Size Guide</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link as={RouterLink} to="/about" className="text-white/70 hover:text-primary text-sm">About Us</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/blog" className="text-white/70 hover:text-primary text-sm">Blog</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/contact" className="text-white/70 hover:text-primary text-sm">Contact</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/careers" className="text-white/70 hover:text-primary text-sm">Careers</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/privacy" className="text-white/70 hover:text-primary text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/terms" className="text-white/70 hover:text-primary text-sm">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Subscribe</h3>
            <p className="text-white/70 text-sm mb-4">Get exclusive offers and beauty tips delivered to your inbox.</p>
            <div className="flex flex-col space-y-3">
              <Input
                placeholder="Your email"
                type="email"
                radius="full"
                classNames={{
                  input: "text-white",
                  inputWrapper: "bg-content2 border-white/10"
                }}
              />
              <Button 
                color="primary" 
                radius="full"
                className="font-medium"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© 2024 GlowMart. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link as={RouterLink} to="/shipping" className="text-white/50 hover:text-primary text-xs">Shipping</Link>
            <Link as={RouterLink} to="/returns" className="text-white/50 hover:text-primary text-xs">Returns</Link>
            <Link as={RouterLink} to="/faq" className="text-white/50 hover:text-primary text-xs">FAQ</Link>
            <Link as={RouterLink} to="/accessibility" className="text-white/50 hover:text-primary text-xs">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
