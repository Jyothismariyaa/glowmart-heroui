import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, Tab, Card, CardBody, Button, Avatar, Badge, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { AiStyleOrbit } from '../components/ai-style-orbit';

export const UserDashboardPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("overview");
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Mock user data
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
    joinDate: "March 2023",
    tier: "Gold",
    points: 1250,
    skinProfile: {
      type: "Combination",
      concerns: ["Fine Lines", "Uneven Texture", "Dullness"],
      tone: "Medium",
      undertone: "Warm"
    }
  };

  // Mock orders data
  const orders = [
    {
      id: "GM-78945612",
      date: "June 15, 2023",
      total: 202.08,
      status: "Delivered",
      items: 3
    },
    {
      id: "GM-78945587",
      date: "May 22, 2023",
      total: 156.50,
      status: "Delivered",
      items: 2
    },
    {
      id: "GM-78945432",
      date: "April 10, 2023",
      total: 89.99,
      status: "Delivered",
      items: 1
    }
  ];

  // Mock wishlist data
  const wishlist = [
    {
      id: 1,
      name: "Starlight Highlighter",
      price: 42.00,
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=product4"
    },
    {
      id: 2,
      name: "Celestial Eye Palette",
      price: 58.00,
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=product5"
    },
    {
      id: 3,
      name: "Hydrating Face Mist",
      price: 28.00,
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=product6"
    },
    {
      id: 4,
      name: "Volumizing Mascara",
      price: 32.00,
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=product7"
    }
  ];

  // Mock skin timeline data
  const skinTimeline = [
    {
      date: "June 15, 2023",
      title: "Skin Analysis",
      description: "AI detected 15% improvement in skin texture and 10% reduction in fine lines since last month.",
      image: "https://img.heroui.chat/image/fashion?w=400&h=300&u=skin1"
    },
    {
      date: "May 15, 2023",
      title: "Skin Analysis",
      description: "AI detected increased hydration levels and recommended adding a vitamin C serum to your routine.",
      image: "https://img.heroui.chat/image/fashion?w=400&h=300&u=skin2"
    },
    {
      date: "April 15, 2023",
      title: "Skin Analysis",
      description: "Initial skin analysis complete. Personalized skincare routine generated.",
      image: "https://img.heroui.chat/image/fashion?w=400&h=300&u=skin3"
    }
  ];

  // Mock recommended products
  const recommendations = [
    {
      id: 5,
      name: "Overnight Repair Mask",
      description: "Recommended for your combination skin to address fine lines.",
      price: 48.00,
      match: "98%",
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=rec1"
    },
    {
      id: 6,
      name: "Brightening Vitamin C Serum",
      description: "Perfect for addressing your dullness concern.",
      price: 64.00,
      match: "95%",
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=rec2"
    },
    {
      id: 7,
      name: "Gentle Exfoliating Toner",
      description: "Will help with your uneven texture concern.",
      price: 38.00,
      match: "92%",
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=rec3"
    }
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="glass-card border border-white/10 mb-6">
                <CardBody className="p-6">
                  <h2 className="font-serif italic text-2xl mb-6">Your Beauty Profile</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-lg mb-4">Skin Profile</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-foreground/70">Skin Type:</span>
                          <span>{userData.skinProfile.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground/70">Skin Tone:</span>
                          <span>{userData.skinProfile.tone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground/70">Undertone:</span>
                          <span>{userData.skinProfile.undertone}</span>
                        </div>
                        <div>
                          <span className="text-foreground/70 block mb-2">Concerns:</span>
                          <div className="flex flex-wrap gap-2">
                            {userData.skinProfile.concerns.map((concern, index) => (
                              <Badge key={index} color="primary" variant="flat">
                                {concern}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        as={Link}
                        to="/ai-style-quiz"
                        variant="flat"
                        color="primary"
                        size="sm"
                        className="mt-4"
                      >
                        Update Profile
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4">Loyalty Status</h3>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon icon="lucide:crown" className="text-primary" width={24} />
                        </div>
                        <div>
                          <p className="font-medium">{userData.tier} Member</p>
                          <p className="text-sm text-foreground/70">Since {userData.joinDate}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Points: {userData.points}</span>
                          <span className="text-sm">Next Tier: 1,500</span>
                        </div>
                        <div className="w-full h-2 bg-content2/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary"
                            style={{ width: `${(userData.points / 1500) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-foreground/70 mb-4">
                        You're {1500 - userData.points} points away from Platinum status!
                      </p>
                      
                      <Button
                        as={Link}
                        to="/luxe-rewards"
                        variant="flat"
                        color="primary"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        View Rewards
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="glass-card border border-white/10">
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif italic text-2xl">AI Recommendations</h2>
                    <Button
                      variant="light"
                      size="sm"
                      endContent={<Icon icon="lucide:refresh-cw" width={16} />}
                    >
                      Refresh
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {recommendations.map((product) => (
                      <div key={product.id} className="flex gap-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{product.name}</h3>
                            <Badge color="primary" variant="flat">{product.match} Match</Badge>
                          </div>
                          <p className="text-sm text-foreground/70 mb-2">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-primary">${product.price.toFixed(2)}</span>
                            <Button
                              size="sm"
                              color="primary"
                              variant="flat"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div>
              <Card className="glass-card border border-white/10 mb-6">
                <CardBody className="p-6">
                  <h2 className="font-serif italic text-xl mb-4">Recent Orders</h2>
                  
                  <div className="space-y-4">
                    {orders.slice(0, 2).map((order) => (
                      <div key={order.id} className="p-3 border border-white/10 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{order.id}</span>
                          <Badge 
                            color={order.status === "Delivered" ? "success" : "primary"}
                            variant="flat"
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm text-foreground/70 mb-2">
                          <span>{order.date}</span>
                          <span>{order.items} {order.items === 1 ? 'item' : 'items'}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">${order.total.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="light"
                            as={Link}
                            to={`/orders/${order.id}`}
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    as={Link}
                    to="#orders"
                    variant="flat"
                    color="primary"
                    size="sm"
                    className="mt-4 w-full"
                    onPress={() => setSelectedTab("orders")}
                  >
                    View All Orders
                  </Button>
                </CardBody>
              </Card>
              
              <Card className="glass-card border border-white/10">
                <CardBody className="p-6">
                  <h2 className="font-serif italic text-xl mb-4">Skin Timeline</h2>
                  
                  <div className="relative pl-6 border-l border-white/10">
                    {skinTimeline.slice(0, 1).map((entry, index) => (
                      <div key={index} className="mb-6 relative">
                        <div className="absolute -left-9 w-3 h-3 rounded-full bg-primary"></div>
                        <p className="text-xs text-foreground/70 mb-1">{entry.date}</p>
                        <h3 className="font-medium mb-2">{entry.title}</h3>
                        <p className="text-sm text-foreground/70 mb-3">{entry.description}</p>
                        <img 
                          src={entry.image} 
                          alt={entry.title}
                          className="w-full h-32 object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    as={Link}
                    to="#skin-timeline"
                    variant="flat"
                    color="primary"
                    size="sm"
                    className="mt-2 w-full"
                    onPress={() => setSelectedTab("skin-timeline")}
                  >
                    View Full Timeline
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        );
      case "orders":
        return (
          <Card className="glass-card border border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Your Orders</h2>
              
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 border border-white/10 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium">Order #{order.id}</h3>
                        <p className="text-sm text-foreground/70">{order.date}</p>
                      </div>
                      <Badge 
                        color={order.status === "Delivered" ? "success" : "primary"}
                        variant="flat"
                        className="mt-2 sm:mt-0"
                      >
                        {order.status}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between mb-4">
                      <span className="text-foreground/70">{order.items} {order.items === 1 ? 'item' : 'items'}</span>
                      <span className="font-medium">${order.total.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="flat"
                        color="primary"
                        as={Link}
                        to={`/orders/${order.id}`}
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="flat"
                        startContent={<Icon icon="lucide:repeat" width={16} />}
                      >
                        Buy Again
                      </Button>
                      {order.status === "Delivered" && (
                        <Button
                          size="sm"
                          variant="flat"
                          startContent={<Icon icon="lucide:star" width={16} />}
                        >
                          Write Review
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        );
      case "wishlist":
        return (
          <Card className="glass-card border border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Your Wishlist</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlist.map((item) => (
                  <Card key={item.id} className="border border-white/10">
                    <CardBody className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          isIconOnly
                          size="sm"
                          variant="flat"
                          className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm text-white"
                        >
                          <Icon icon="lucide:x" width={16} />
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <p className="text-primary mb-3">${item.price.toFixed(2)}</p>
                        <Button 
                          color="primary" 
                          variant="flat" 
                          size="sm" 
                          fullWidth
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>
        );
      case "skin-timeline":
        return (
          <Card className="glass-card border border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Your Skin Timeline</h2>
              
              <div className="relative pl-8 border-l border-white/10">
                {skinTimeline.map((entry, index) => (
                  <div key={index} className="mb-12 relative">
                    <div className="absolute -left-[17px] w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-sm text-foreground/70 mb-2">{entry.date}</p>
                    <h3 className="font-medium text-lg mb-3">{entry.title}</h3>
                    <p className="text-foreground/80 mb-4">{entry.description}</p>
                    <img 
                      src={entry.image} 
                      alt={entry.title}
                      className="w-full max-w-lg h-64 object-cover rounded-lg"
                    />
                  </div>
                ))}
                
                <div className="absolute -left-[17px] bottom-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon icon="lucide:plus" className="text-primary" width={16} />
                </div>
                <div className="mb-6">
                  <Button
                    color="primary"
                    variant="flat"
                    startContent={<Icon icon="lucide:camera" width={16} />}
                  >
                    Add New Skin Analysis
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      case "settings":
        return (
          <Card className="glass-card border border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Account Settings</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">Full Name</label>
                      <input
                        type="text"
                        defaultValue={userData.name}
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        defaultValue={userData.email}
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="(555) 123-4567"
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">Date of Birth</label>
                      <input
                        type="date"
                        defaultValue="1990-01-01"
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <Button
                      color="primary"
                      className="mt-2"
                    >
                      Save Changes
                    </Button>
                  </div>
                  
                  <Divider className="my-6" />
                  
                  <h3 className="font-medium text-lg mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">Current Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <Button
                      color="primary"
                      className="mt-2"
                    >
                      Update Password
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Profile Picture</h3>
                  <div className="flex flex-col items-center mb-6">
                    <Avatar
                      src={userData.avatar}
                      className="w-32 h-32 text-large mb-4"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="flat"
                        color="primary"
                      >
                        Upload New
                      </Button>
                      <Button
                        size="sm"
                        variant="flat"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  
                  <Divider className="my-6" />
                  
                  <h3 className="font-medium text-lg mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-foreground/70">Receive notifications about your orders</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-primary"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Promotions & Offers</p>
                        <p className="text-sm text-foreground/70">Receive notifications about sales and special offers</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-primary"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Product Recommendations</p>
                        <p className="text-sm text-foreground/70">Receive personalized product suggestions</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-primary"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Beauty Tips & Articles</p>
                        <p className="text-sm text-foreground/70">Receive beauty advice and blog updates</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-primary"
                      />
                    </div>
                    
                    <Button
                      color="primary"
                      className="mt-2"
                    >
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      default:
        return null;
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
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <Avatar
              src={userData.avatar}
              className="w-24 h-24 text-large"
            />
            <div>
              <h1 className="font-serif italic text-3xl md:text-4xl mb-2 glow-text text-center md:text-left">
                Welcome, {userData.name.split(' ')[0]}
              </h1>
              <p className="text-foreground/70 text-center md:text-left">
                {userData.email} • Member since {userData.joinDate}
              </p>
            </div>
          </div>
          
          <Tabs 
            selectedKey={selectedTab} 
            onSelectionChange={setSelectedTab as any}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-4",
            }}
          >
            <Tab key="overview" title="Overview" />
            <Tab key="orders" title="Orders" />
            <Tab key="wishlist" title="Wishlist" />
            <Tab key="skin-timeline" title="Skin Timeline" />
            <Tab key="settings" title="Settings" />
          </Tabs>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {renderTabContent()}
        </motion.div>
        
        <AiStyleOrbit />
      </div>
    </div>
  );
};