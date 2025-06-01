import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Avatar, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    { name: 'Emma Johnson', role: 'Founder & CEO', image: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=10' },
    { name: 'Sophia Chen', role: 'Chief Beauty Officer', image: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=11' },
    { name: 'Marcus Lee', role: 'Head of AI Innovation', image: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=12' },
    { name: 'Olivia Williams', role: 'Creative Director', image: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=13' }
  ];

  const values = [
    { 
      title: 'Innovation', 
      icon: 'lucide:lightbulb', 
      description: 'Pushing the boundaries of beauty technology with AI-powered solutions.' 
    },
    { 
      title: 'Inclusivity', 
      icon: 'lucide:heart', 
      description: 'Creating products that celebrate diversity and work for all skin types and tones.' 
    },
    { 
      title: 'Sustainability', 
      icon: 'lucide:leaf', 
      description: 'Committed to eco-friendly practices and reducing our environmental footprint.' 
    },
    { 
      title: 'Transparency', 
      icon: 'lucide:check-circle', 
      description: 'Open about our ingredients, sourcing, and manufacturing processes.' 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif italic text-white glow-text mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Redefining beauty through technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-6">
              Our Mission
            </h2>
            <p className="text-white/80 mb-4">
              At GlowMart, we believe beauty should be personalized, accessible, and empowering. Founded in 2022, we set out to create a revolutionary beauty experience that combines cutting-edge AI technology with premium quality products.
            </p>
            <p className="text-white/80 mb-4">
              Our mission is to help everyone discover their unique glow through personalized beauty solutions that adapt to individual needs, preferences, and skin characteristics.
            </p>
            <p className="text-white/80">
              We're not just selling products—we're creating a beauty ecosystem where technology enhances your natural beauty and simplifies your routine.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://img.heroui.chat/image/fashion?w=600&h=600&u=201" 
                alt="Our mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden border-4 border-background">
              <img 
                src="https://img.heroui.chat/image/fashion?w=200&h=200&u=202" 
                alt="Beauty product" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-content1/30 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
              Our Values
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do, from product development to customer experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border-white/10 h-full">
                  <CardBody className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Icon icon={value.icon} className="text-primary text-2xl" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The passionate experts behind GlowMart, bringing together expertise in beauty, technology, and innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border-white/10 h-full">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <Avatar
                    src={member.image}
                    className="w-24 h-24 mb-4"
                    isBordered
                    color="primary"
                  />
                  <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    <Button isIconOnly variant="light" size="sm" radius="full">
                      <Icon icon="lucide:linkedin" />
                    </Button>
                    <Button isIconOnly variant="light" size="sm" radius="full">
                      <Icon icon="lucide:twitter" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-20 bg-content1/30 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-serif italic text-white glow-text mb-6">
                Our Technology
              </h2>
              <p className="text-white/80 mb-4">
                At the heart of GlowMart is our proprietary AI beauty technology that analyzes skin characteristics, facial features, and personal preferences to create truly personalized beauty recommendations.
              </p>
              <p className="text-white/80 mb-6">
                Our virtual try-on technology uses advanced computer vision to show you exactly how products will look on your unique features, while our AI Style Orbit creates a beauty ecosystem that evolves with your preferences.
              </p>
              <Button 
                color="primary" 
                radius="full"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Learn More About Our Tech
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=600&h=400&u=203" 
                    alt="AI Beauty Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 p-4 glass-card rounded-xl border border-white/10 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon icon="lucide:sparkles" className="text-primary text-sm" />
                    </div>
                    <p className="text-white font-medium text-sm">AI Analysis</p>
                  </div>
                  <p className="text-white/70 text-xs">Analyzing 500+ skin data points for perfect product matching</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
              Join Our Journey
            </h2>
            <p className="text-white/70 mb-8">
              We're on a mission to transform the beauty industry through technology and innovation. Join us as we redefine what beauty means in the digital age.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                color="primary" 
                radius="full"
                size="lg"
                className="font-medium"
              >
                Shop Our Products
              </Button>
              <Button 
                variant="bordered" 
                radius="full"
                size="lg"
                className="text-white border-white/30 font-medium"
              >
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
