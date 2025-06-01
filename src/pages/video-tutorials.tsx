import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Tabs, Tab, Badge, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const VideoTutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample video tutorials data
  const tutorials = [
    {
      id: 1,
      title: "5-Minute Everyday Glam",
      creator: "Sofia Martinez",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video1",
      duration: "5:24",
      views: 245000,
      date: "2 weeks ago",
      category: "makeup",
      featured: true,
      description: "Learn how to create a beautiful everyday makeup look in just 5 minutes. Perfect for busy mornings!",
      products: [
        { id: 1, name: "Tinted Moisturizer", price: 42.00 },
        { id: 2, name: "Cream Blush", price: 34.00 },
        { id: 3, name: "Volumizing Mascara", price: 32.00 }
      ]
    },
    {
      id: 2,
      title: "Glass Skin Routine Step-by-Step",
      creator: "Alex Kim",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video2",
      duration: "12:38",
      views: 189000,
      date: "3 weeks ago",
      category: "skincare",
      featured: true,
      description: "Achieve that coveted glass skin effect with this detailed Korean skincare routine tutorial.",
      products: [
        { id: 4, name: "Hydra-Boost Serum", price: 48.00 },
        { id: 5, name: "Hyaluronic Acid Serum", price: 54.00 },
        { id: 6, name: "Ceramide Moisturizer", price: 46.00 }
      ]
    },
    {
      id: 3,
      title: "Perfect Winged Eyeliner Tutorial",
      creator: "Zara Johnson",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video3",
      duration: "8:15",
      views: 320000,
      date: "1 month ago",
      category: "makeup",
      featured: false,
      description: "Master the perfect winged eyeliner with these foolproof techniques for all eye shapes.",
      products: [
        { id: 7, name: "Precision Eyeliner", price: 26.00 },
        { id: 8, name: "Makeup Setting Spray", price: 28.00 }
      ]
    },
    {
      id: 4,
      title: "Heatless Curls Overnight Method",
      creator: "Marcus Chen",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video4",
      duration: "7:42",
      views: 175000,
      date: "1 month ago",
      category: "haircare",
      featured: false,
      description: "Learn how to create beautiful, bouncy curls without heat damage using this overnight method.",
      products: [
        { id: 9, name: "Silk Hair Wrap", price: 38.00 },
        { id: 10, name: "Smoothing Hair Oil", price: 32.00 }
      ]
    },
    {
      id: 5,
      title: "Anti-Aging Skincare Routine for 30+",
      creator: "Leila Patel",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video5",
      duration: "15:20",
      views: 210000,
      date: "2 months ago",
      category: "skincare",
      featured: false,
      description: "A comprehensive anti-aging skincare routine with product recommendations for those in their 30s and beyond.",
      products: [
        { id: 11, name: "Retinol Night Cream", price: 68.00 },
        { id: 12, name: "Vitamin C Serum", price: 58.00 },
        { id: 13, name: "Peptide Eye Cream", price: 46.00 }
      ]
    },
    {
      id: 6,
      title: "Bold Lip Techniques",
      creator: "Jordan Taylor",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video6",
      duration: "6:45",
      views: 142000,
      date: "2 months ago",
      category: "makeup",
      featured: false,
      description: "Learn how to apply bold lip colors flawlessly and make them last all day.",
      products: [
        { id: 14, name: "Velvet Matte Lipstick", price: 32.00 },
        { id: 15, name: "Precision Lip Liner", price: 24.00 }
      ]
    },
    {
      id: 7,
      title: "Summer Skincare Essentials",
      creator: "Alex Kim",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video7",
      duration: "10:12",
      views: 165000,
      date: "3 months ago",
      category: "skincare",
      featured: false,
      description: "Protect and nourish your skin during the summer months with these essential skincare tips.",
      products: [
        { id: 16, name: "UV Shield Sunscreen SPF 50", price: 38.00 },
        { id: 17, name: "Hydrating Face Mist", price: 28.00 },
        { id: 18, name: "Aloe Vera Gel", price: 24.00 }
      ]
    },
    {
      id: 8,
      title: "Scalp Care for Healthy Hair Growth",
      creator: "Marcus Chen",
      thumbnail: "https://img.heroui.chat/image/fashion?w=600&h=400&u=video8",
      duration: "11:30",
      views: 128000,
      date: "3 months ago",
      category: "haircare",
      featured: false,
      description: "Learn the importance of scalp care and techniques to promote healthy hair growth.",
      products: [
        { id: 19, name: "Scalp Exfoliating Scrub", price: 34.00 },
        { id: 20, name: "Hair Growth Serum", price: 48.00 }
      ]
    }
  ];

  // Filter tutorials based on category and search query
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutorial.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured tutorials
  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif italic text-3xl md:text-4xl mb-4 glow-text">
            Beauty Video Tutorials
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Learn expert techniques and discover new beauty routines with our collection of video tutorials.
          </p>
        </motion.div>
        
        {/* Featured Tutorials */}
        {featuredTutorials.length > 0 && (
          <div className="mb-16">
            <h2 className="font-serif italic text-2xl mb-8">Featured Tutorials</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredTutorials.map((tutorial) => (
                <motion.div
                  key={tutorial.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="glass-card border border-white/10 overflow-hidden">
                    <CardBody className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative">
                          <img 
                            src={tutorial.thumbnail} 
                            alt={tutorial.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                              <Icon icon="lucide:play" className="text-white" width={32} />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {tutorial.duration}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col">
                          <Badge color="primary" variant="flat" className="self-start mb-2">
                            Featured
                          </Badge>
                          <h3 className="font-serif italic text-xl mb-2">{tutorial.title}</h3>
                          <p className="text-foreground/70 text-sm mb-3">{tutorial.description}</p>
                          <div className="text-sm text-foreground/70 mb-4">
                            <p>By {tutorial.creator}</p>
                            <p>{(tutorial.views / 1000).toFixed(0)}K views • {tutorial.date}</p>
                          </div>
                          <div className="mt-auto">
                            <Button
                              as={Link}
                              to={`/video-tutorials/${tutorial.id}`}
                              color="primary"
                              endContent={<Icon icon="lucide:arrow-right" width={16} />}
                            >
                              Watch Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Tabs 
              selectedKey={selectedCategory} 
              onSelectionChange={setSelectedCategory as any}
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "gap-4",
              }}
            >
              <Tab key="all" title="All" />
              <Tab key="makeup" title="Makeup" />
              <Tab key="skincare" title="Skincare" />
              <Tab key="haircare" title="Haircare" />
            </Tabs>
            
            <Input
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startContent={<Icon icon="lucide:search" className="text-default-400" width={16} />}
              className="max-w-xs"
              classNames={{
                inputWrapper: "bg-content2/50 hover:bg-content2/70",
              }}
            />
          </div>
        </div>
        
        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTutorials.length > 0 ? (
            filteredTutorials.map((tutorial) => (
              <motion.div
                key={tutorial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-card border border-white/10 h-full">
                  <CardBody className="p-0">
                    <div className="relative">
                      <img 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors opacity-0 hover:opacity-100">
                        <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                          <Icon icon="lucide:play" className="text-white" width={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {tutorial.duration}
                      </div>
                      <Badge 
                        color={
                          tutorial.category === "makeup" ? "primary" : 
                          tutorial.category === "skincare" ? "secondary" : "success"
                        }
                        variant="flat"
                        className="absolute top-2 left-2"
                      >
                        {tutorial.category}
                      </Badge>
                    </div>
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-medium text-lg mb-2 line-clamp-2">{tutorial.title}</h3>
                      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">{tutorial.description}</p>
                      <div className="text-xs text-foreground/70 mb-4">
                        <p>By {tutorial.creator}</p>
                        <p>{(tutorial.views / 1000).toFixed(0)}K views • {tutorial.date}</p>
                      </div>
                      
                      <div className="mt-auto">
                        <Button
                          as={Link}
                          to={`/video-tutorials/${tutorial.id}`}
                          color="primary"
                          variant="flat"
                          fullWidth
                          endContent={<Icon icon="lucide:arrow-right" width={16} />}
                        >
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <Icon icon="lucide:video-off" className="mx-auto mb-4 text-default-400" width={48} />
              <h3 className="text-xl mb-2">No tutorials found</h3>
              <p className="text-default-400 mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                variant="flat" 
                color="primary"
                onPress={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Request Tutorial Section */}
        <div className="mt-16">
          <Card className="glass-card border border-white/10 overflow-hidden">
            <CardBody className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
                    Request a Tutorial
                  </h2>
                  <p className="text-foreground/80 mb-6">
                    Can't find what you're looking for? Let us know what beauty techniques or products you'd like to see featured in our next tutorial.
                  </p>
                  <div className="space-y-4 mb-6">
                    <Input
                      label="Topic"
                      placeholder="What would you like to learn?"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "bg-content2/50 hover:bg-content2/70",
                      }}
                    />
                    <Textarea
                      label="Details"
                      placeholder="Please provide any specific details about your request"
                      variant="bordered"
                      minRows={3}
                      classNames={{
                        inputWrapper: "bg-content2/50 hover:bg-content2/70",
                      }}
                    />
                  </div>
                  <Button
                    color="primary"
                  >
                    Submit Request
                  </Button>
                </div>
                <div className="h-64 md:h-auto">
                  <img 
                    src="https://img.heroui.chat/image/fashion?w=800&h=600&u=tutorial" 
                    alt="Request a Tutorial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Virtual Try-On Promo */}
        <div className="mt-16 text-center">
          <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
            Try the Looks Yourself
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Use our AI-powered Virtual Try-On to see how these tutorial looks would appear on you.
          </p>
          <Button
            as={Link}
            to="/virtual-try-on"
            color="primary"
            size="lg"
            className="font-medium"
            startContent={<Icon icon="lucide:camera" width={20} />}
          >
            Launch Virtual Try-On
          </Button>
        </div>
      </div>
    </div>
  );
};