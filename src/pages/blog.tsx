import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, Tabs, Tab, Input } from '@heroui/react';
import { Icon } from '@iconify/react';

// Sample blog post data
const blogPosts = [
  {
    id: '1',
    title: 'The Science Behind Effective Hydration',
    excerpt: 'Discover the science of hydration and how to keep your skin moisturized all day long with these expert tips and product recommendations.',
    category: 'Skincare',
    date: '2024-06-10',
    image: 'https://img.heroui.chat/image/fashion?w=600&h=400&u=111',
    featured: true
  },
  {
    id: '2',
    title: '5 Steps to Achieve the Perfect Glow',
    excerpt: 'Follow these expert tips to achieve that coveted dewy, radiant complexion that looks natural and lasts all day.',
    category: 'Makeup',
    date: '2024-06-05',
    image: 'https://img.heroui.chat/image/fashion?w=600&h=400&u=112'
  },
  {
    id: '3',
    title: 'How to Build a Minimalist Skincare Routine',
    excerpt: 'Less is more. Learn how to create an effective skincare routine with just a few products that deliver maximum results.',
    category: 'Skincare',
    date: '2024-05-28',
    image: 'https://img.heroui.chat/image/fashion?w=600&h=400&u=113'
  },
  {
    id: '4',
    title: 'The Ultimate Guide to Clean Beauty',
    excerpt: 'Navigate the world of clean beauty with our comprehensive guide to ingredients, certifications, and top product recommendations.',
    category: 'Trends',
    date: '2024-05-20',
    image: 'https://img.heroui.chat/image/fashion?w=600&h=400&u=114'
  },
  {
    id: '5',
    title: 'Summer Makeup Trends You Need to Try',
    excerpt: 'From glossy lids to sunset blush, these are the hottest makeup trends for summer that you need to add to your beauty routine.',
    category: 'Makeup',
    date: '2024-05-15',
    image: 'https://img.heroui.chat/image/fashion?w=600&h=400&u=115'
  },
  {
    id: '6',
    title: 'The Power of Vitamin C in Your Skincare',
    excerpt: 'Explore the benefits of Vitamin C for your skin and learn how to incorporate this powerful antioxidant into your daily routine.',
    category: 'Skincare',
    date: '2024-05-08',
    image: 'https://img.heroui.chat/image/fashion?w=600&h=400&u=116'
  }
];

export const BlogPage: React.FC = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              Beauty Journal
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Insights, tips, and trends from our beauty experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card border-white/10 overflow-hidden">
              <CardBody className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Featured</span>
                      <span className="mx-2 text-white/50">•</span>
                      <span className="text-white/70 text-sm">{featuredPost.category}</span>
                      <span className="mx-2 text-white/50">•</span>
                      <span className="text-white/70 text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-4">{featuredPost.title}</h2>
                    <p className="text-white/70 mb-6">{featuredPost.excerpt}</p>
                    <Button 
                      as={Link}
                      to={`/blog/${featuredPost.id}`}
                      color="primary" 
                      radius="full"
                      endContent={<Icon icon="lucide:arrow-right" />}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif italic text-white glow-text">Latest Articles</h2>
              <div className="hidden md:block">
                <Tabs 
                  aria-label="Blog categories" 
                  color="primary"
                  variant="light"
                  radius="full"
                  size="sm"
                  classNames={{
                    tabList: "bg-content2/50 p-1 rounded-full",
                    tab: "text-white data-[selected=true]:bg-primary data-[selected=true]:text-black rounded-full"
                  }}
                >
                  <Tab key="all" title="All" />
                  <Tab key="skincare" title="Skincare" />
                  <Tab key="makeup" title="Makeup" />
                  <Tab key="trends" title="Trends" />
                </Tabs>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card border-white/10 h-full">
                    <CardBody className="p-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full aspect-[3/2] object-cover"
                      />
                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <span className="text-primary text-sm">{post.category}</span>
                          <span className="mx-2 text-white/50">•</span>
                          <span className="text-white/70 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">{post.title}</h3>
                        <p className="text-white/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <Button 
                          as={Link}
                          to={`/blog/${post.id}`}
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
            
            <div className="mt-12 flex justify-center">
              <Button 
                color="primary" 
                variant="bordered"
                radius="full"
                className="font-medium"
              >
                Load More Articles
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <Card className="glass-card border-white/10 mb-6">
                <CardBody className="p-5">
                  <h3 className="text-lg font-medium text-white mb-4">Search</h3>
                  <Input
                    placeholder="Search articles..."
                    startContent={<Icon icon="lucide:search" className="text-white/50" />}
                    radius="full"
                    classNames={{
                      input: "text-white",
                      inputWrapper: "bg-content2 border-white/10"
                    }}
                  />
                </CardBody>
              </Card>
              
              <Card className="glass-card border-white/10 mb-6">
                <CardBody className="p-5">
                  <h3 className="text-lg font-medium text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {['All', 'Skincare', 'Makeup', 'Haircare', 'Fragrance', 'Trends', 'Tutorials'].map((category) => (
                      <Button 
                        key={category}
                        variant="light" 
                        className="justify-start px-2 w-full text-white/70 hover:text-white"
                        endContent={
                          <span className="ml-auto bg-content2 text-white/70 text-xs px-2 py-0.5 rounded-full">
                            {Math.floor(Math.random() * 10) + 1}
                          </span>
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardBody>
              </Card>
              
              <Card className="glass-card border-white/10">
                <CardBody className="p-5">
                  <h3 className="text-lg font-medium text-white mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Hydration', 'Anti-aging', 'Glow', 'Natural', 'Vegan', 'SPF', 'Retinol', 'Vitamin C', 'Acne', 'Sensitive Skin'].map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-content2 text-white/70 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-content1/30 backdrop-blur-lg mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/70 mb-8">
                Get the latest beauty tips, trends, and exclusive content delivered straight to your inbox.
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
        </div>
      </section>
    </div>
  );
};
