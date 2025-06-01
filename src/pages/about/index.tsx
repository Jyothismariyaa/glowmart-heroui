import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://img.heroui.chat/image/fashion?w=1600&h=800&u=50)` }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-primary text-glow mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About GlowMart
          </motion.h1>
          <motion.p 
            className="text-white text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where luxury beauty meets cutting-edge AI technology
          </motion.p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif italic text-3xl text-primary text-glow mb-6">Our Story</h2>
              <p className="text-foreground-400 mb-4">
                Founded in 2023, GlowMart was born from a vision to revolutionize the beauty industry by combining premium products with personalized AI technology. Our founder, a beauty enthusiast with a background in tech, saw an opportunity to create a more intuitive, personalized shopping experience.
              </p>
              <p className="text-foreground-400 mb-4">
                What began as a small collection of carefully curated products has grown into a comprehensive beauty destination that leverages artificial intelligence to help customers discover products that truly work for their unique needs.
              </p>
              <p className="text-foreground-400">
                Today, GlowMart stands at the intersection of beauty and technology, offering an unparalleled shopping experience that adapts to each customer's preferences, skin type, and beauty goals.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://img.heroui.chat/image/fashion?w=600&h=800&u=51" 
                alt="GlowMart founder" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 p-6 glassmorphism rounded-lg max-w-xs">
                <p className="font-serif italic text-primary">
                  "Beauty should be intuitive, personal, and accessible to everyone."
                </p>
                <p className="text-right text-sm text-foreground-400 mt-2">— GlowMart Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-content1/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
              Our Values
            </h2>
            <p className="text-foreground-400 max-w-2xl mx-auto">
              The principles that guide everything we do at GlowMart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:sparkles" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-serif italic text-xl mb-4">Innovation</h3>
                  <p className="text-foreground-400">
                    We constantly push the boundaries of what's possible in beauty tech, creating new ways to personalize and enhance your beauty experience.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:heart" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-serif italic text-xl mb-4">Inclusivity</h3>
                  <p className="text-foreground-400">
                    Beauty is for everyone. We celebrate diversity and create products and experiences that work for all skin tones, types, and beauty preferences.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:leaf" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-serif italic text-xl mb-4">Sustainability</h3>
                  <p className="text-foreground-400">
                    We're committed to reducing our environmental impact through eco-friendly packaging, ethical sourcing, and sustainable business practices.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
              Our Technology
            </h2>
            <p className="text-foreground-400 max-w-2xl mx-auto">
              Powered by advanced AI to create a truly personalized beauty experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6">
                  <Icon icon="lucide:scan-face" className="text-primary text-3xl mb-4" />
                  <h3 className="font-serif italic text-xl mb-2">Skin Analysis AI</h3>
                  <p className="text-foreground-400">
                    Our proprietary algorithm analyzes over 20 dimensions of your skin to recommend products that address your specific concerns and goals.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6">
                  <Icon icon="lucide:camera" className="text-primary text-3xl mb-4" />
                  <h3 className="font-serif italic text-xl mb-2">Virtual Try-On</h3>
                  <p className="text-foreground-400">
                    See how products look on you before you buy with our advanced augmented reality technology that maps products to your facial features.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glassmorphism h-full">
                <CardBody className="p-6">
                  <Icon icon="lucide:brain" className="text-primary text-3xl mb-4" />
                  <h3 className="font-serif italic text-xl mb-2">Preference Learning</h3>
                  <p className="text-foreground-400">
                    Our AI learns from your interactions, purchases, and feedback to continuously refine its recommendations and discover new products you'll love.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-content1/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif italic text-3xl text-primary text-glow mb-6">Join Our Team</h2>
              <p className="text-foreground-400 mb-6">
                We're always looking for passionate individuals who share our vision for the future of beauty. From AI engineers to beauty experts, we're building a diverse team that's reimagining what beauty shopping can be.
              </p>
              <Button 
                color="primary" 
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                View Open Positions
              </Button>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://img.heroui.chat/image/fashion?w=400&h=400&u=52" 
                alt="Team member 1" 
                className="rounded-lg w-full h-auto object-cover"
              />
              <img 
                src="https://img.heroui.chat/image/fashion?w=400&h=400&u=53" 
                alt="Team member 2" 
                className="rounded-lg w-full h-auto object-cover mt-8"
              />
              <img 
                src="https://img.heroui.chat/image/fashion?w=400&h=400&u=54" 
                alt="Team member 3" 
                className="rounded-lg w-full h-auto object-cover"
              />
              <img 
                src="https://img.heroui.chat/image/fashion?w=400&h=400&u=55" 
                alt="Team member 4" 
                className="rounded-lg w-full h-auto object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Experience the Future of Beauty?
          </motion.h2>
          <motion.p 
            className="text-foreground-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of beauty enthusiasts who have transformed their routines with GlowMart's AI-powered recommendations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              color="primary" 
              size="lg"
              endContent={<Icon icon="lucide:shopping-bag" />}
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
