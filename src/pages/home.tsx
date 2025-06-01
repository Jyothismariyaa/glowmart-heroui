import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import { ProductCard } from '../components/product-card';
import { AiStyleOrbit } from '../components/ai-style-orbit';

// Sample product data
const featuredProducts = [
  {
    id: '1',
    name: 'Luminous Glow Serum',
    price: 49.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=101',
    category: 'Skincare',
    rating: 4.8,
    isNew: true
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    price: 24.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=102',
    category: 'Makeup',
    rating: 4.6,
    isBestseller: true
  },
  {
    id: '3',
    name: 'Hydra-Boost Moisturizer',
    price: 38.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=103',
    category: 'Skincare',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Radiance Setting Powder',
    price: 32.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=104',
    category: 'Makeup',
    rating: 4.7,
    isNew: true
  }
];

const moodCards = [
  { name: 'Radiant', icon: 'lucide:sun', color: 'from-primary to-secondary' },
  { name: 'Bold', icon: 'lucide:flame', color: 'from-primary-600 to-danger' },
  { name: 'Serene', icon: 'lucide:cloud', color: 'from-secondary to-primary-300' },
  { name: 'Glamour', icon: 'lucide:sparkles', color: 'from-secondary-600 to-primary' }
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden hero-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white glow-text mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your Glow Awaits
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover AI-powered beauty solutions tailored to your unique style and skin needs.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button 
                  as={Link}
                  to="/ai-style-quiz"
                  color="primary" 
                  size="lg" 
                  radius="full"
                  className="font-medium"
                  startContent={<Icon icon="lucide:sparkles" />}
                >
                  Discover Your Look
                </Button>
                
                <Button 
                  as={Link}
                  to="/products"
                  variant="bordered" 
                  size="lg" 
                  radius="full"
                  className="text-white border-white/30 font-medium"
                >
                  Shop Now
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* Background decorative image */}
                <motion.div
                  className="absolute w-[80%] h-[80%] rounded-[40px] bg-primary/10 backdrop-blur-sm"
                  initial={{ rotate: -6, x: -20 }}
                  animate={{ rotate: -6, x: -20 }}
                  style={{ transformOrigin: "center center" }}
                />
                
                {/* Middle layer image */}
                <motion.div
                  className="absolute w-[85%] h-[85%] rounded-[40px] overflow-hidden"
                  initial={{ rotate: -3, x: -10, y: -10 }}
                  animate={{ rotate: -3, x: -10, y: -10 }}
                  style={{ transformOrigin: "center center" }}
                >
                  <img 
                    src="https://img.heroui.chat/image/fashion?w=800&h=1000&u=2"
                    alt="Beauty collection showcase"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>

                {/* Front main image */}
                <motion.div
                  className="relative w-[90%] h-[90%] rounded-[40px] overflow-hidden shadow-2xl"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src="https://img.heroui.chat/image/fashion?w=800&h=1000&u=1"
                    alt="Beauty model showcasing glowing skin"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>

                {/* Floating info cards */}
                <motion.div
                  className="absolute -bottom-6 -left-6 glass-card border border-white/10 rounded-xl p-4 backdrop-blur-lg z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon icon="lucide:sparkles" className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-medium">AI-Powered</p>
                      <p className="text-white/70 text-sm">Beauty Analysis</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 glass-card border border-white/10 rounded-xl p-4 backdrop-blur-lg z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon icon="lucide:camera" className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Virtual Try-On</p>
                      <p className="text-white/70 text-sm">Test Products Live</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-20 right-20 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </section>
      
      {/* Featured Products */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <motion.h2 
            className="text-3xl font-serif italic text-white glow-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trending Now
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              as={Link}
              to="/products"
              variant="light" 
              color="primary"
              radius="full"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View All
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* AI Style Orbit */}
      <section className="py-20 bg-content1/30 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
              AI Style Orbit
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Your personalized beauty ecosystem. Explore products, try virtual looks, and get AI recommendations tailored just for you.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AiStyleOrbit />
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button 
              as={Link}
              to="/ai-style-quiz"
              color="primary" 
              size="lg" 
              radius="full"
              className="font-medium"
              startContent={<Icon icon="lucide:sparkles" />}
            >
              Take Style Quiz
            </Button>
          </div>
        </div>
      </section>
      
      {/* Shop by Mood */}
      <section className="py-20 container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif italic text-white glow-text mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Shop by Mood
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moodCards.map((mood, index) => (
            <motion.div
              key={mood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="mood-card"
            >
              <Card 
                className="h-48 border-white/10 overflow-hidden"
                isPressable
                as={Link}
                to={`/products?mood=${mood.name.toLowerCase()}`}
              >
                <CardBody className="p-0 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-70`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <Icon icon={mood.icon} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-serif italic text-white">{mood.name}</h3>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* New Arrivals & Bestsellers */}
      <section className="py-20 container mx-auto px-4">
        <Tabs 
          aria-label="Product categories" 
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6",
            cursor: "bg-primary",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-primary font-serif italic text-xl"
          }}
        >
          <Tab key="new" title="New Arrivals">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product, index) => (
                <motion.div
                  key={`new-${product.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} isNew={true} />
                </motion.div>
              ))}
            </div>
          </Tab>
          <Tab key="bestsellers" title="Bestsellers">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...featuredProducts].reverse().map((product, index) => (
                <motion.div
                  key={`best-${product.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} isBestseller={true} />
                </motion.div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </section>
      
      {/* Beauty Blog Preview */}
      <section className="py-20 bg-content1/30 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-between items-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text">
              Beauty Journal
            </h2>
            
            <Button 
              as={Link}
              to="/blog"
              variant="light" 
              color="primary"
              radius="full"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              All Articles
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border-white/10 h-full">
                  <CardBody className="p-0">
                    <img 
                      src={`https://img.heroui.chat/image/fashion?w=600&h=400&u=${110+item}`} 
                      alt={`Blog post ${item}`}
                      className="w-full aspect-[3/2] object-cover"
                    />
                    <div className="p-5">
                      <p className="text-primary text-sm mb-2">Skincare • {new Date().toLocaleDateString()}</p>
                      <h3 className="text-xl font-medium text-white mb-3">
                        {[
                          "The Science Behind Effective Hydration",
                          "5 Steps to Achieve the Perfect Glow",
                          "How to Build a Minimalist Skincare Routine"
                        ][index]}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {[
                          "Discover the science of hydration and how to keep your skin moisturized all day long.",
                          "Follow these expert tips to achieve that coveted dewy, radiant complexion.",
                          "Less is more. Learn how to create an effective skincare routine with just a few products."
                        ][index]}
                      </p>
                      <Button 
                        as={Link}
                        to={`/blog/${item}`}
                        variant="light" 
                        color="primary"
                        size="sm"
                        radius="full"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
              Join Our Glow Community
            </h2>
            <p className="text-white/70 mb-8">
              Subscribe to our newsletter for exclusive offers, beauty tips, and early access to new products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-content2 border border-white/10 text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary sm:w-80"
              />
              <Button 
                color="primary" 
                radius="full"
                size="lg"
                className="font-medium"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
