import React from 'react';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { HeroCarousel } from '../../components/hero-carousel';
import { FeaturedProducts } from '../../components/featured-products';
import { StyleOrbit } from '../../components/style-orbit';
import { ShopByMood } from '../../components/shop-by-mood';
import { VirtualTryOn } from '../../components/virtual-try-on';
import { AiChatbot } from '../../components/ai-chatbot';

const Home: React.FC = () => {
  return (
    <div>
      <HeroCarousel />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 
                className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Discover Your Look with AI Style Orbit
              </motion.h2>
              <motion.p 
                className="text-foreground-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our revolutionary AI Style Orbit analyzes your preferences, skin tone, and beauty goals to create a personalized beauty ecosystem. Explore product recommendations, tutorials, and looks tailored just for you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  as={Link}
                  to="/style-quiz"
                  color="primary" 
                  size="lg"
                  endContent={<Icon icon="lucide:arrow-right" />}
                  className="font-medium"
                >
                  Take the Style Quiz
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StyleOrbit />
            </motion.div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-serif italic text-2xl text-primary text-glow mb-4">
                      AI Beauty Consultation
                    </h3>
                    <p className="text-foreground-400 mb-6">
                      Get personalized beauty advice from our AI stylist. Receive product recommendations based on your skin type, concerns, and beauty goals.
                    </p>
                  </div>
                  <Button 
                    color="primary" 
                    variant="bordered"
                    endContent={<Icon icon="lucide:message-square" />}
                  >
                    Chat with AI Stylist
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-serif italic text-2xl text-primary text-glow mb-4">
                      Virtual Try-On
                    </h3>
                    <p className="text-foreground-400 mb-6">
                      Experience our products before you buy. Our virtual try-on technology lets you see how makeup looks on your face using your webcam.
                    </p>
                  </div>
                  <Button 
                    as={Link}
                    to="/virtual-try-on"
                    color="primary" 
                    variant="bordered"
                    endContent={<Icon icon="lucide:camera" />}
                  >
                    Try It Now
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ShopByMood />
      
      <VirtualTryOn />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
              Join the Glow Community
            </h2>
            <p className="text-foreground-400 max-w-2xl mx-auto">
              Connect with beauty enthusiasts, share your looks, and get inspired by others.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={`https://img.heroui.chat/image/fashion?w=300&h=300&u=${30 + i}`} 
                    alt={`Community post ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              as="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary" 
              variant="bordered"
              startContent={<Icon icon="lucide:instagram" />}
            >
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-content1/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
              Subscribe to Glow Updates
            </h2>
            <p className="text-foreground-400 max-w-2xl mx-auto">
              Be the first to know about new products, exclusive offers, and beauty tips.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-lg glassmorphism border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button color="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <AiChatbot />
    </div>
  );
};

export default Home;
