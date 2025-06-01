// Create the missing DashboardPage component

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Card, CardBody, Avatar, Button, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { AiStyleOrbit } from '../components/ai-style-orbit';

export const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                  className="w-16 h-16"
                  isBordered
                  color="primary"
                />
                <div>
                  <h1 className="text-3xl font-serif italic text-white glow-text">Welcome, Jane</h1>
                  <p className="text-white/70">Member since January 2024</p>
                </div>
              </div>
              <Button 
                color="primary" 
                radius="full"
                startContent={<Icon icon="lucide:settings" />}
              >
                Account Settings
              </Button>
            </div>
          </motion.div>
          
          <Tabs 
            aria-label="Dashboard sections" 
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6",
              cursor: "bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary font-medium"
            }}
          >
            <Tab 
              key="overview" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:layout-dashboard" />
                  <span>Overview</span>
                </div>
              }
            >
              <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon icon="lucide:shopping-bag" className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Orders</p>
                        <h3 className="text-2xl font-medium text-white">5</h3>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon icon="lucide:heart" className="text-secondary text-xl" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Wishlist Items</p>
                        <h3 className="text-2xl font-medium text-white">12</h3>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon icon="lucide:star" className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Loyalty Points</p>
                        <h3 className="text-2xl font-medium text-white">250</h3>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-medium text-white">Recent Orders</h2>
                      <Button 
                        variant="light" 
                        size="sm"
                        as={Link}
                        to="/orders"
                      >
                        View All
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0">
                          <div>
                            <p className="text-white font-medium">Order #{Math.floor(100000 + Math.random() * 900000)}</p>
                            <p className="text-white/60 text-sm">{new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white">${(Math.random() * 100 + 50).toFixed(2)}</p>
                            <Badge color="primary" variant="flat" size="sm">
                              {i === 1 ? 'Delivered' : i === 2 ? 'Shipped' : 'Processing'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-medium text-white">AI Style Orbit</h2>
                      <Button 
                        variant="light" 
                        size="sm"
                        startContent={<Icon icon="lucide:refresh-cw" />}
                      >
                        Refresh
                      </Button>
                    </div>
                    
                    <div className="flex justify-center">
                      <AiStyleOrbit />
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <Card className="glass-card border-white/10 mb-8">
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium text-white">Recommended For You</h2>
                    <Button 
                      variant="light" 
                      size="sm"
                      as={Link}
                      to="/products"
                    >
                      View All
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Card key={i} className="glass-card border-white/10">
                        <CardBody className="p-0">
                          <img 
                            src={`https://img.heroui.chat/image/fashion?w=200&h=200&u=${120+i}`} 
                            alt={`Product ${i}`}
                            className="w-full aspect-square object-cover"
                          />
                          <div className="p-3">
                            <p className="text-white/60 text-xs uppercase">Skincare</p>
                            <h3 className="text-white text-sm font-medium">Hydrating Face Serum</h3>
                            <p className="text-primary text-sm font-medium mt-1">$34.99</p>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </CardBody>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">Skin Timeline</h2>
                    <div className="flex justify-center items-center h-40">
                      <div className="text-center">
                        <Icon icon="lucide:camera" className="text-primary text-3xl mb-4" />
                        <p className="text-white/70">Track your skin's progress over time</p>
                        <Button 
                          color="primary" 
                          variant="flat"
                          size="sm"
                          className="mt-4"
                        >
                          Upload Photo
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">Beauty Calendar</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">15</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Skincare Consultation</p>
                          <p className="text-white/60 text-sm">Virtual, 2:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">22</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">New Product Launch</p>
                          <p className="text-white/60 text-sm">Early Access</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">30</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Beauty Workshop</p>
                          <p className="text-white/60 text-sm">Online, 6:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Tab>
            
            <Tab 
              key="orders" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:shopping-bag" />
                  <span>Orders</span>
                </div>
              }
            >
              <div className="py-6">
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">Order History</h2>
                    
                    <div className="space-y-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="border-b border-white/10 pb-6 last:border-0">
                          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                            <div>
                              <p className="text-white font-medium">Order #{Math.floor(100000 + Math.random() * 900000)}</p>
                              <p className="text-white/60 text-sm">{new Date(Date.now() - i * 15 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge color={i <= 2 ? "primary" : i === 3 ? "secondary" : "default"} variant="flat">
                                {i === 1 ? 'Processing' : i === 2 ? 'Shipped' : 'Delivered'}
                              </Badge>
                              <Button 
                                variant="light" 
                                size="sm"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4">
                            {[1, 2, 3].map((j) => (
                              <div key={j} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                  <img 
                                    src={`https://img.heroui.chat/image/fashion?w=100&h=100&u=${100+(i*3)+j}`} 
                                    alt={`Product ${j}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-white text-sm">Product Name</p>
                                  <p className="text-white/60 text-xs">Qty: {j}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-between mt-4">
                            <p className="text-white/70">Total: <span className="text-white">${(Math.random() * 100 + 50).toFixed(2)}</span></p>
                            {i <= 3 && (
                              <Button 
                                variant="flat" 
                                color="primary"
                                size="sm"
                                as={Link}
                                to="/order-tracking"
                              >
                                Track Order
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Tab>
            
            <Tab 
              key="wishlist" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:heart" />
                  <span>Wishlist</span>
                </div>
              }
            >
              <div className="py-6">
                <Card className="glass-card border-white/10">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">My Wishlist</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Card key={i} className="glass-card border-white/10">
                          <CardBody className="p-0">
                            <div className="relative">
                              <img 
                                src={`https://img.heroui.chat/image/fashion?w=300&h=300&u=${130+i}`} 
                                alt={`Wishlist item ${i}`}
                                className="w-full aspect-square object-cover"
                              />
                              <Button 
                                isIconOnly 
                                variant="flat" 
                                radius="full"
                                className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm"
                                size="sm"
                              >
                                <Icon icon="lucide:x" className="text-white" />
                              </Button>
                            </div>
                            <div className="p-4">
                              <p className="text-white/60 text-xs uppercase">Category</p>
                              <h3 className="text-white font-medium">Product Name</h3>
                              <p className="text-primary font-medium mt-1">${(Math.random() * 50 + 20).toFixed(2)}</p>
                              <Button 
                                color="primary" 
                                radius="full"
                                size="sm"
                                className="w-full mt-3"
                                startContent={<Icon icon="lucide:shopping-bag" width={16} />}
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
              </div>
            </Tab>
            
            <Tab 
              key="profile" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:user" />
                  <span>Profile</span>
                </div>
              }
            >
              <div className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="glass-card border-white/10 md:col-span-1">
                    <CardBody className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar
                          src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                          className="w-24 h-24 mb-4"
                          isBordered
                          color="primary"
                        />
                        <h2 className="text-xl font-medium text-white">Jane Doe</h2>
                        <p className="text-white/70 mb-4">jane.doe@example.com</p>
                        <Button 
                          variant="flat" 
                          color="primary"
                          size="sm"
                          startContent={<Icon icon="lucide:camera" />}
                        >
                          Change Photo
                        </Button>
                        
                        <div className="w-full border-t border-white/10 my-6"></div>
                        
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white/70">Loyalty Level</span>
                            <Badge color="primary" variant="flat">Gold</Badge>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white/70">Points</span>
                            <span className="text-white">250</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/70">Member Since</span>
                            <span className="text-white">Jan 2024</span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="glass-card border-white/10 md:col-span-2">
                    <CardBody className="p-6">
                      <h2 className="text-xl font-medium text-white mb-6">Personal Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-white/70 text-sm mb-1">First Name</p>
                          <p className="text-white">Jane</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-sm mb-1">Last Name</p>
                          <p className="text-white">Doe</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-sm mb-1">Email</p>
                          <p className="text-white">jane.doe@example.com</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-sm mb-1">Phone</p>
                          <p className="text-white">(555) 123-4567</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-sm mb-1">Date of Birth</p>
                          <p className="text-white">January 15, 1990</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-sm mb-1">Gender</p>
                          <p className="text-white">Female</p>
                        </div>
                      </div>
                      
                      <Button 
                        color="primary" 
                        radius="full"
                        size="sm"
                      >
                        Edit Profile
                      </Button>
                      
                      <div className="border-t border-white/10 my-6"></div>
                      
                      <h2 className="text-xl font-medium text-white mb-6">Shipping Address</h2>
                      
                      <div className="mb-6">
                        <p className="text-white">Jane Doe</p>
                        <p className="text-white/70">123 Main Street</p>
                        <p className="text-white/70">Apt 4B</p>
                        <p className="text-white/70">New York, NY 10001</p>
                        <p className="text-white/70">United States</p>
                      </div>
                      
                      <Button 
                        variant="flat" 
                        radius="full"
                        size="sm"
                      >
                        Edit Address
                      </Button>
                      
                      <div className="border-t border-white/10 my-6"></div>
                      
                      <h2 className="text-xl font-medium text-white mb-6">Payment Methods</h2>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-8 bg-content2 rounded flex items-center justify-center">
                          <Icon icon="logos:visa" />
                        </div>
                        <div>
                          <p className="text-white">Visa ending in 4242</p>
                          <p className="text-white/70 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="flat" 
                        radius="full"
                        size="sm"
                        startContent={<Icon icon="lucide:plus" />}
                      >
                        Add Payment Method
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};