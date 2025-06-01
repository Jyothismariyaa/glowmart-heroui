import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Divider, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const ReturnPolicyPage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            Return Policy
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We want you to love your GlowMart products. If you're not completely satisfied, we're here to help.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Our 30-Day Satisfaction Guarantee</h2>
              
              <p className="text-foreground/90 mb-6">
                At GlowMart, we stand behind the quality of our products. If you're not completely satisfied with your purchase, we offer a 30-day return policy from the date of delivery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon icon="lucide:calendar" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-medium mb-2">30-Day Window</h3>
                  <p className="text-foreground/80 text-sm">
                    Return any product within 30 days of delivery for a full refund.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon icon="lucide:package" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-medium mb-2">Easy Process</h3>
                  <p className="text-foreground/80 text-sm">
                    Simple online return initiation with prepaid shipping labels.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon icon="lucide:credit-card" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-medium mb-2">Full Refunds</h3>
                  <p className="text-foreground/80 text-sm">
                    Get refunded to your original payment method within 5-7 business days.
                  </p>
                </div>
              </div>
              
              <Divider className="my-8" />
              
              <h2 className="font-serif italic text-xl mb-4">Return Conditions</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Unopened Products</h3>
                    <p className="text-foreground/80 text-sm">
                      Products that are unopened and in their original packaging are eligible for a full refund.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Gently Used Products</h3>
                    <p className="text-foreground/80 text-sm">
                      Products that have been gently used or tested are eligible for a full refund if they didn't meet your expectations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Damaged or Defective Items</h3>
                    <p className="text-foreground/80 text-sm">
                      Products that arrived damaged or defective will be refunded in full or replaced at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
              
              <Divider className="my-8" />
              
              <h2 className="font-serif italic text-xl mb-4">Non-Returnable Items</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:x-circle" className="text-danger mt-1" />
                  <div>
                    <h3 className="font-medium">Personal Hygiene Products</h3>
                    <p className="text-foreground/80 text-sm">
                      For health and safety reasons, certain personal hygiene products cannot be returned once opened or used.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:x-circle" className="text-danger mt-1" />
                  <div>
                    <h3 className="font-medium">Gift Cards</h3>
                    <p className="text-foreground/80 text-sm">
                      Gift cards and e-gift certificates are non-refundable.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:x-circle" className="text-danger mt-1" />
                  <div>
                    <h3 className="font-medium">Sale Items</h3>
                    <p className="text-foreground/80 text-sm">
                      Products purchased during special sales events marked as "Final Sale" cannot be returned.
                    </p>
                  </div>
                </div>
              </div>
              
              <Divider className="my-8" />
              
              <h2 className="font-serif italic text-xl mb-4">How to Return</h2>
              
              <ol className="list-decimal pl-5 space-y-4 mb-8">
                <li>
                  <p className="text-foreground/90">
                    <span className="font-medium">Initiate a Return:</span> Log in to your account and go to "Order History" to find the order containing the item(s) you wish to return. Click on "Return Items" and follow the prompts.
                  </p>
                </li>
                <li>
                  <p className="text-foreground/90">
                    <span className="font-medium">Print Shipping Label:</span> Once your return is approved, you'll receive a prepaid shipping label via email. Print this label and attach it to your package.
                  </p>
                </li>
                <li>
                  <p className="text-foreground/90">
                    <span className="font-medium">Package Your Return:</span> Place the item(s) in their original packaging if possible, or in a secure box or envelope. Include the return form that was provided.
                  </p>
                </li>
                <li>
                  <p className="text-foreground/90">
                    <span className="font-medium">Ship Your Return:</span> Drop off your package at any authorized shipping location. We recommend keeping the tracking number for your records.
                  </p>
                </li>
                <li>
                  <p className="text-foreground/90">
                    <span className="font-medium">Refund Processing:</span> Once we receive and inspect your return, we'll process your refund. This typically takes 2-3 business days, with an additional 3-5 business days for the refund to appear on your statement.
                  </p>
                </li>
              </ol>
              
              <div className="bg-content2/30 rounded-lg p-6 mb-8">
                <h3 className="font-medium mb-3">Exchange Option</h3>
                <p className="text-foreground/90 mb-4">
                  If you'd prefer to exchange your item for a different shade, size, or product, you can select the "Exchange" option when initiating your return. Once we receive your returned item, we'll ship out your exchange product.
                </p>
                <p className="text-foreground/90">
                  Please note that if the exchange product is of higher value, you'll be charged the difference. If it's of lower value, we'll refund the difference to your original payment method.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  as={Link}
                  to="/contact"
                  color="primary"
                  variant="flat"
                  startContent={<Icon icon="lucide:mail" />}
                >
                  Contact Support
                </Button>
                <Button
                  as={Link}
                  to="/order-tracking"
                  variant="flat"
                  startContent={<Icon icon="lucide:package" />}
                >
                  Track Your Return
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <div className="text-center">
            <p className="text-foreground/70 text-sm mb-2">
              Have questions about our return policy?
            </p>
            <Button
              as={Link}
              to="/contact"
              color="primary"
              size="sm"
            >
              Contact Customer Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};