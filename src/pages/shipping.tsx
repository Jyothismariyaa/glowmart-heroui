import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const ShippingPage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const shippingMethods = [
    {
      title: "Standard Shipping",
      icon: "lucide:truck",
      price: "FREE",
      condition: "Orders over $50",
      time: "5-7 business days",
      features: [
        "Tracking number provided",
        "Signature may be required",
        "Available for most locations"
      ]
    },
    {
      title: "Express Shipping",
      icon: "lucide:zap",
      price: "$12.99",
      condition: "All orders",
      time: "2-3 business days",
      features: [
        "Priority handling",
        "Tracking number provided",
        "Signature required"
      ]
    },
    {
      title: "Next Day Delivery",
      icon: "lucide:timer",
      price: "$24.99",
      condition: "Order by 2 PM EST",
      time: "Next business day",
      features: [
        "Guaranteed delivery time",
        "Priority handling",
        "Signature required"
      ]
    }
  ];

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
            Shipping Information
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Fast, reliable shipping options to get your beauty essentials delivered to your doorstep.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {shippingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card border-white/10 h-full">
                  <CardBody className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Icon icon={method.icon} className="text-primary text-xl" />
                      </div>
                      <h3 className="font-medium text-lg mb-1">{method.title}</h3>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-2xl font-semibold text-primary">{method.price}</span>
                        <span className="text-sm text-foreground/70">({method.condition})</span>
                      </div>
                      <p className="text-foreground/90 font-medium mb-4">{method.time}</p>
                      <ul className="text-sm text-foreground/70 space-y-2">
                        {method.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icon icon="lucide:check" className="text-primary" width={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="glass-card border-white/10 mb-12">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Shipping Policies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Order Processing</h3>
                  <p className="text-foreground/80">
                    Orders are processed within 24-48 hours of being placed. Orders placed on weekends or holidays will be processed the next business day.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Shipping Destinations</h3>
                  <p className="text-foreground/80">
                    We currently ship to all 50 US states and select international destinations. International shipping rates and delivery times vary by location.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Tracking Your Order</h3>
                  <p className="text-foreground/80">
                    Once your order ships, you'll receive a confirmation email with your tracking number. You can also track your order through your account dashboard.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Shipping Restrictions</h3>
                  <p className="text-foreground/80">
                    Some products may have shipping restrictions due to their ingredients or packaging. These will be clearly marked on the product page.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <div className="bg-content2/30 rounded-lg p-6">
            <h2 className="font-medium text-lg mb-4">Need Help?</h2>
            <p className="text-foreground/80 mb-4">
              If you have questions about shipping or need to modify your delivery preferences, our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as={Link}
                to="/contact"
                color="primary"
                startContent={<Icon icon="lucide:mail" />}
              >
                Contact Support
              </Button>
              <Button
                as={Link}
                to="/faq"
                variant="light"
                startContent={<Icon icon="lucide:help-circle" />}
              >
                View FAQs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 