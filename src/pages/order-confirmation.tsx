// Create the missing OrderConfirmationPage component

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';

export const OrderConfirmationPage: React.FC = () => {
  const orderNumber = `GM-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString();
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Icon icon="lucide:check" className="text-primary text-3xl" />
            </div>
            <h1 className="text-4xl font-serif italic text-white glow-text mb-4">Order Confirmed!</h1>
            <p className="text-xl text-white/80">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>
          
          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div>
                    <h2 className="text-xl font-medium text-white">Order Details</h2>
                    <p className="text-white/60 text-sm">Order #{orderNumber}</p>
                  </div>
                  <Button 
                    variant="light" 
                    size="sm"
                    startContent={<Icon icon="lucide:printer" />}
                  >
                    Print Receipt
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-white/70 text-sm mb-1">Order Date</h3>
                    <p className="text-white">{orderDate}</p>
                  </div>
                  <div>
                    <h3 className="text-white/70 text-sm mb-1">Payment Method</h3>
                    <p className="text-white">Visa •••• 4242</p>
                  </div>
                  <div>
                    <h3 className="text-white/70 text-sm mb-1">Estimated Delivery</h3>
                    <p className="text-white">{estimatedDelivery}</p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-medium mb-4">Shipping Address</h3>
                  <p className="text-white">Jane Doe</p>
                  <p className="text-white/70">123 Main Street</p>
                  <p className="text-white/70">Apt 4B</p>
                  <p className="text-white/70">New York, NY 10001</p>
                  <p className="text-white/70">United States</p>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-medium mb-4">Order Summary</h3>
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=101" 
                          alt="Luminous Glow Serum"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-sm">Luminous Glow Serum</p>
                        <p className="text-white/60 text-xs">Qty: 1</p>
                      </div>
                      <span className="text-white">$49.99</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=102" 
                          alt="Velvet Matte Lipstick"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-sm">Velvet Matte Lipstick</p>
                        <p className="text-white/60 text-xs">Qty: 2</p>
                      </div>
                      <span className="text-white">$49.98</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=103" 
                          alt="Hydra-Boost Moisturizer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-sm">Hydra-Boost Moisturizer</p>
                        <p className="text-white/60 text-xs">Qty: 1</p>
                      </div>
                      <span className="text-white">$38.99</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Subtotal</span>
                      <span className="text-white">$138.96</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Shipping</span>
                      <span className="text-white">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Tax</span>
                      <span className="text-white">$11.12</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Total</span>
                      <span className="text-white">$150.08</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                as={Link}
                to="/dashboard"
                color="primary" 
                radius="full"
                startContent={<Icon icon="lucide:user" />}
              >
                View Order in Dashboard
              </Button>
              
              <Button 
                as={Link}
                to="/products"
                variant="bordered" 
                radius="full"
                className="text-white border-white/30"
              >
                Continue Shopping
              </Button>
            </div>
            
            <div className="glass-card border-white/10 p-6 rounded-xl">
              <h3 className="text-white font-medium mb-3">Need Help?</h3>
              <p className="text-white/70 mb-4">
                If you have any questions about your order, please contact our customer service team.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="light" 
                  radius="full"
                  size="sm"
                  startContent={<Icon icon="lucide:mail" />}
                >
                  Email Support
                </Button>
                <Button 
                  variant="light" 
                  radius="full"
                  size="sm"
                  startContent={<Icon icon="lucide:message-circle" />}
                >
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};