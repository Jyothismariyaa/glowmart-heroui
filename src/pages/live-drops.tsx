import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Badge, Tooltip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const LiveDropsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("upcoming");
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Get current date for countdown calculations
  const now = new Date();
  
  // Sample upcoming drops data
  const upcomingDrops = [
    {
      id: 1,
      name: "Summer Glow Collection",
      description: "A limited edition collection featuring bronzers, highlighters, and illuminating body oils for the perfect summer glow.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop1",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 18, 0, 0),
      brand: "GlowMart",
      price: "$120.00",
      status: "upcoming",
      exclusive: true,
      items: 5
    },
    {
      id: 2,
      name: "Hydration Revival Skincare Set",
      description: "Advanced hydration formulas featuring hyaluronic acid, ceramides, and peptides for plump, dewy skin.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop2",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5, 15, 0, 0),
      brand: "Aqua Luxe",
      price: "$89.00",
      status: "upcoming",
      exclusive: false,
      items: 3
    },
    {
      id: 3,
      name: "Bold Lips Vault",
      description: "A collection of 12 highly-pigmented, long-wearing liquid lipsticks in matte and metallic finishes.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop3",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 12, 0, 0),
      brand: "Color Pop",
      price: "$150.00",
      status: "upcoming",
      exclusive: true,
      items: 12
    }
  ];

  // Sample active drops data
  const activeDrops = [
    {
      id: 4,
      name: "Celestial Eye Palette",
      description: "A stunning palette featuring 18 cosmic-inspired eyeshadows in matte, shimmer, and duochrome finishes.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop4",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, 0, 0),
      endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 23, 59, 59),
      brand: "Stellar Beauty",
      price: "$65.00",
      status: "active",
      exclusive: false,
      items: 1,
      remaining: "65%"
    },
    {
      id: 5,
      name: "Luxury Brush Collection",
      description: "Professional-grade makeup brushes with sustainable bamboo handles and ultra-soft synthetic bristles.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop5",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 12, 0, 0),
      endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59),
      brand: "Artistry Tools",
      price: "$120.00",
      status: "active",
      exclusive: true,
      items: 8,
      remaining: "32%"
    },
    {
      id: 6,
      name: "Vitamin C Brightening Set",
      description: "Complete brightening routine featuring stabilized vitamin C, AHAs, and niacinamide for radiant skin.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop6",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 9, 0, 0),
      endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 0, 0),
      brand: "Glow Science",
      price: "$95.00",
      status: "active",
      exclusive: false,
      items: 4,
      remaining: "18%"
    }
  ];

  // Sample past drops data
  const pastDrops = [
    {
      id: 7,
      name: "Rose Gold Collection",
      description: "Luxurious makeup collection featuring rose gold packaging and universally flattering shades.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop7",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7, 12, 0, 0),
      brand: "Luxe Beauty",
      price: "$180.00",
      status: "sold out",
      exclusive: true,
      items: 6
    },
    {
      id: 8,
      name: "Overnight Repair System",
      description: "Advanced night treatment featuring retinol, peptides, and antioxidants for rejuvenated skin by morning.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop8",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14, 15, 0, 0),
      brand: "Skin Revival",
      price: "$110.00",
      status: "sold out",
      exclusive: false,
      items: 2
    },
    {
      id: 9,
      name: "Fragrance Discovery Set",
      description: "Collection of 5 luxury fragrances in travel-sized bottles, perfect for discovering your signature scent.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=drop9",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 21, 10, 0, 0),
      brand: "Scent Stories",
      price: "$75.00",
      status: "sold out",
      exclusive: true,
      items: 5
    }
  ];

  // Function to format countdown
  const formatCountdown = (targetDate: Date) => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    
    if (diff <= 0) return "Live now!";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m`;
    } else {
      return `${hours}h ${minutes}m`;
    }
  };

  // Function to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  // Get drops based on selected tab
  const getDrops = () => {
    switch (selectedTab) {
      case "upcoming":
        return upcomingDrops;
      case "active":
        return activeDrops;
      case "past":
        return pastDrops;
      default:
        return upcomingDrops;
    }
  };

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
            Live Drops
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Exclusive limited-edition product launches available for a short time only. Set reminders to never miss a drop.
          </p>
        </motion.div>
        
        {/* Featured Drop */}
        {activeDrops.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="glass-card border border-white/10 overflow-hidden">
              <CardBody className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={activeDrops[0].image} 
                      alt={activeDrops[0].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge color="danger" variant="flat" className="animate-pulse">
                        LIVE NOW
                      </Badge>
                    </div>
                    {activeDrops[0].exclusive && (
                      <div className="absolute top-4 right-4">
                        <Badge color="warning" variant="flat">
                          EXCLUSIVE
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-2">
                      <Badge color="primary" variant="flat">
                        {activeDrops[0].brand}
                      </Badge>
                    </div>
                    <h2 className="font-serif italic text-2xl md:text-3xl mb-3">
                      {activeDrops[0].name}
                    </h2>
                    <p className="text-foreground/80 mb-6">
                      {activeDrops[0].description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div>
                        <p className="text-sm text-foreground/70">Price</p>
                        <p className="text-xl font-medium">{activeDrops[0].price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Items</p>
                        <p className="text-xl font-medium">{activeDrops[0].items}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Ends In</p>
                        <p className="text-xl font-medium">{formatCountdown(activeDrops[0].endDate)}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-foreground/70 mb-1">Remaining Stock</p>
                      <div className="w-full h-2 bg-content2/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary"
                          style={{ width: activeDrops[0].remaining }}
                        ></div>
                      </div>
                      <p className="text-xs text-foreground/70 mt-1">{activeDrops[0].remaining} remaining</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        color="primary"
                        size="lg"
                        className="font-medium"
                      >
                        Shop Now
                      </Button>
                      <Button
                        variant="flat"
                        size="lg"
                        startContent={<Icon icon="lucide:bell" width={18} />}
                      >
                        Set Reminder
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}
        
        {/* Tabs for different drop states */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-content2/30 backdrop-blur-sm rounded-full p-1">
            <Button
              variant={selectedTab === "upcoming" ? "solid" : "flat"}
              color={selectedTab === "upcoming" ? "primary" : "default"}
              className={`rounded-full ${selectedTab === "upcoming" ? "" : "bg-transparent"}`}
              onPress={() => setSelectedTab("upcoming")}
            >
              Upcoming
            </Button>
            <Button
              variant={selectedTab === "active" ? "solid" : "flat"}
              color={selectedTab === "active" ? "primary" : "default"}
              className={`rounded-full ${selectedTab === "active" ? "" : "bg-transparent"}`}
              onPress={() => setSelectedTab("active")}
            >
              Active Now
            </Button>
            <Button
              variant={selectedTab === "past" ? "solid" : "flat"}
              color={selectedTab === "past" ? "primary" : "default"}
              className={`rounded-full ${selectedTab === "past" ? "" : "bg-transparent"}`}
              onPress={() => setSelectedTab("past")}
            >
              Past Drops
            </Button>
          </div>
        </div>
        
        {/* Drops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDrops().map((drop, index) => (
            <motion.div
              key={drop.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border border-white/10 h-full">
                <CardBody className="p-0">
                  <div className="relative">
                    <img 
                      src={drop.image} 
                      alt={drop.name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      {drop.status === "upcoming" && (
                        <Badge color="secondary" variant="flat">
                          {formatDate(drop.date)}
                        </Badge>
                      )}
                      {drop.status === "active" && (
                        <Badge color="danger" variant="flat" className="animate-pulse">
                          LIVE NOW
                        </Badge>
                      )}
                      {drop.status === "sold out" && (
                        <Badge color="default" variant="flat">
                          SOLD OUT
                        </Badge>
                      )}
                    </div>
                    {drop.exclusive && (
                      <div className="absolute top-4 right-4">
                        <Badge color="warning" variant="flat">
                          EXCLUSIVE
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <Badge color="primary" variant="flat">
                        {drop.brand}
                      </Badge>
                      <span className="text-lg font-medium">{drop.price}</span>
                    </div>
                    
                    <h3 className="font-serif italic text-xl mb-2">{drop.name}</h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{drop.description}</p>
                    
                    {drop.status === "upcoming" && (
                      <div className="flex items-center gap-2 mb-4">
                        <Icon icon="lucide:clock" className="text-primary" width={16} />
                        <span className="text-sm">Drops in {formatCountdown(drop.date)}</span>
                      </div>
                    )}
                    
                    {drop.status === "active" && drop.remaining && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-foreground/70 mb-1">
                          <span>Remaining Stock</span>
                          <span>{drop.remaining}</span>
                        </div>
                        <div className="w-full h-1.5 bg-content2/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary"
                            style={{ width: drop.remaining }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      {drop.status === "upcoming" && (
                        <>
                          <Button
                            variant="flat"
                            color="primary"
                            fullWidth
                            startContent={<Icon icon="lucide:bell" width={16} />}
                          >
                            Remind Me
                          </Button>
                          <Tooltip content="Add to Calendar">
                            <Button
                              isIconOnly
                              variant="flat"
                              aria-label="Add to calendar"
                            >
                              <Icon icon="lucide:calendar" width={16} />
                            </Button>
                          </Tooltip>
                        </>
                      )}
                      
                      {drop.status === "active" && (
                        <Button
                          color="primary"
                          fullWidth
                        >
                          Shop Now
                        </Button>
                      )}
                      
                      {drop.status === "sold out" && (
                        <Button
                          variant="flat"
                          fullWidth
                          isDisabled
                        >
                          Sold Out
                        </Button>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="glass-card border border-white/10">
            <CardBody className="p-8 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
                  Never Miss a Drop
                </h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
                  Subscribe to get early access and notifications about upcoming exclusive product launches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-full bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button
                    color="primary"
                    radius="full"
                    className="font-medium"
                  >
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </CardBody>
          </Card>
        </div>
        
        {/* How It Works */}
        <div className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
              How Live Drops Work
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our exclusive product launches are available for a limited time only. Here's how to make sure you don't miss out.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "lucide:bell",
                title: "Set Reminders",
                description: "Get notified when a drop goes live so you never miss out on limited edition products."
              },
              {
                icon: "lucide:clock",
                title: "Shop Early",
                description: "Live drops are only available for a short time and in limited quantities. Shop early for the best selection."
              },
              {
                icon: "lucide:star",
                title: "Enjoy Exclusivity",
                description: "Many drops feature products that are only available during the drop period and won't be restocked."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon icon={step.icon} className="text-primary" width={32} />
                </div>
                <h3 className="font-serif italic text-xl mb-3">{step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};