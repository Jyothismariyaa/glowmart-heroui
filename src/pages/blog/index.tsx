import React from 'react';
import { Card, CardBody, CardFooter, Button, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Science Behind Effective Skincare Routines",
      excerpt: "Discover the research-backed approaches to creating a skincare routine that delivers real results for your specific skin type.",
      category: "Skincare",
      author: "Dr. Emma Chen",
      date: "June 15, 2023",
      image: "https://img.heroui.chat/image/fashion?w=800&h=500&u=60",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Summer Makeup Trends: Bold Colors and Minimalist Looks",
      excerpt: "This season's hottest makeup trends range from vibrant color statements to barely-there natural looks. Find your perfect summer style.",
      category: "Makeup",
      author: "Sofia Rodriguez",
      date: "May 28, 2023",
      image: "https://img.heroui.chat/image/fashion?w=800&h=500&u=61",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Sustainable Beauty: Brands Making a Difference",
      excerpt: "These innovative beauty brands are leading the way in sustainability, from packaging to ingredients and ethical manufacturing.",
      category: "Sustainability",
      author: "Leila Johnson",
      date: "May 10, 2023",
      image: "https://img.heroui.chat/image/fashion?w=800&h=500&u=62",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Chemical Exfoliants",
      excerpt: "AHAs, BHAs, PHAs—demystifying the world of chemical exfoliants and how to choose the right one for your skin concerns.",
      category: "Skincare",
      author: "Dr. Emma Chen",
      date: "April 22, 2023",
      image: "https://img.heroui.chat/image/fashion?w=800&h=500&u=63",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Fragrance Layering: Create Your Signature Scent",
      excerpt: "Learn the art of fragrance layering to create a unique personal scent that evolves throughout the day.",
      category: "Fragrance",
      author: "Michel Dubois",
      date: "April 5, 2023",
      image: "https://img.heroui.chat/image/fashion?w=800&h=500&u=64",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "AI in Beauty: How Technology is Transforming Personalization",
      excerpt: "From virtual try-ons to custom formulations, artificial intelligence is revolutionizing how we discover and use beauty products.",
      category: "Technology",
      author: "Aisha Patel",
      date: "March 18, 2023",
      image: "https://img.heroui.chat/image/fashion?w=800&h=500&u=65",
      readTime: "9 min read"
    }
  ];
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory) 
    : blogPosts;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <div>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://img.heroui.chat/image/fashion?w=1600&h=800&u=66)` }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-primary text-glow mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Glow Blog
          </motion.h1>
          <motion.p 
            className="text-white text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, trends, and expert advice from the world of beauty
          </motion.p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-2">
              <Button 
                color={selectedCategory === null ? "primary" : "default"} 
                variant={selectedCategory === null ? "solid" : "bordered"} 
                size="sm"
                onPress={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map(category => (
                <Button 
                  key={category}
                  color={selectedCategory === category ? "primary" : "default"} 
                  variant={selectedCategory === category ? "solid" : "bordered"} 
                  size="sm"
                  onPress={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <Input
                placeholder="Search articles..."
                startContent={<Icon icon="lucide:search" className="text-default-400" />}
                classNames={{
                  inputWrapper: "bg-content1/50",
                }}
              />
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={item}>
                <Card className="glassmorphism h-full">
                  <CardBody className="p-0">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif italic text-xl mb-2">{post.title}</h3>
                      <p className="text-foreground-400 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-xs text-foreground-500">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="border-t border-white/5">
                    <Button 
                      as={Link}
                      to={`/blog/${post.id}`}
                      color="primary" 
                      variant="light" 
                      className="w-full"
                    >
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-12">
            <Button 
              color="primary" 
              variant="bordered"
              endContent={<Icon icon="lucide:arrow-down" />}
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-content1/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
              Featured Video Tutorials
            </h2>
            <p className="text-foreground-400 max-w-2xl mx-auto">
              Watch our expert tutorials for step-by-step guidance on techniques and product application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Card className="glassmorphism h-full">
                  <CardBody className="p-0">
                    <div className="relative">
                      <img 
                        src={`https://img.heroui.chat/image/fashion?w=600&h=400&u=${70 + i}`} 
                        alt={`Tutorial ${i}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm">
                          <Icon icon="lucide:play" className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif italic text-xl mb-2">
                        {i === 1 ? "5-Minute Everyday Makeup Routine" : 
                         i === 2 ? "Nighttime Skincare Ritual" : 
                         "Perfect Winged Eyeliner Tutorial"}
                      </h3>
                      <p className="text-foreground-400 text-sm">
                        {i === 1 ? "A quick, effortless makeup routine for busy mornings that still looks polished and professional." : 
                         i === 2 ? "Wind down with this relaxing skincare routine designed to repair and rejuvenate while you sleep." : 
                         "Master the classic winged eyeliner look with our foolproof technique that works for all eye shapes."}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              color="primary" 
              variant="bordered"
              endContent={<Icon icon="lucide:video" />}
            >
              View All Tutorials
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphism rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif italic text-3xl text-primary text-glow mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-foreground-400 mb-6">
                  Get the latest beauty insights, trends, and exclusive content delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    classNames={{
                      inputWrapper: "bg-content1/50",
                    }}
                  />
                  <Button color="primary">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://img.heroui.chat/image/fashion?w=600&h=400&u=75" 
                  alt="Newsletter" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
