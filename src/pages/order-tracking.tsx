import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Button, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

export const OrderTrackingPage: React.FC = () => {
  const [orderNumber, setOrderNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isTracking, setIsTracking] = React.useState(false);
  const [trackingResult, setTrackingResult] = React.useState<null | {
    orderNumber: string;
    status: string;
    estimatedDelivery: string;
    currentLocation: string;
    updates: Array<{date: string; status: string; location: string}>;
  }>(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock tracking data
      setTrackingResult({
        orderNumber: orderNumber || 'GM-78945612',
        status: 'In Transit',
        estimatedDelivery: 'June 17-18, 2023',
        currentLocation: 'Distribution Center, Chicago, IL',
        updates: [
          {
            date: 'June 15, 2023 - 9:30 AM',
            status: 'Package departed',
            location: 'Distribution Center, Chicago, IL'
          },
          {
            date: 'June 14, 2023 - 2:45 PM',
            status: 'Package arrived at facility',
            location: 'Distribution Center, Chicago, IL'
          },
          {
            date: 'June 14, 2023 - 8:20 AM',
            status: 'Package processed',
            location: 'Fulfillment Center, New York, NY'
          },
          {
            date: 'June 13, 2023 - 3:15 PM',
            status: 'Order shipped',
            location: 'Fulfillment Center, New York, NY'
          },
          {
            date: 'June 13, 2023 - 10:30 AM',
            status: 'Order processed',
            location: 'Fulfillment Center, New York, NY'
          },
          {
            date: 'June 12, 2023 - 2:45 PM',
            status: 'Order confirmed',
            location: 'Online'
          }
        ]
      });
      setIsTracking(false);
    }, 1500);
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
            Track Your Order
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Enter your order details below to check the status of your shipment.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border border-white/10 mb-8">
            <CardBody className="p-6">
              {!trackingResult ? (
                <form onSubmit={handleTrackOrder}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Input
                        label="Order Number"
                        placeholder="e.g., GM-12345678"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        variant="bordered"
                        classNames={{
                          inputWrapper: "bg-content2/50 hover:bg-content2/70",
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label="Email Address"
                        placeholder="Enter the email used for your order"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="bordered"
                        classNames={{
                          inputWrapper: "bg-content2/50 hover:bg-content2/70",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      color="primary"
                      isLoading={isTracking}
                      startContent={!isTracking && <Icon icon="lucide:search" />}
                    >
                      Track Order
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="font-serif italic text-2xl mb-1">Order #{trackingResult.orderNumber}</h2>
                      <p className="text-foreground/70">Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                    </div>
                    <div className="bg-primary/20 px-4 py-2 rounded-lg">
                      <p className="font-medium text-primary">{trackingResult.status}</p>
                    </div>
                  </div>

                  {/* Tracking Map */}
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6 bg-content2/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-foreground/50">Interactive map would display here</p>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-content1/80 backdrop-blur-sm p-3 rounded-lg">
                      <p className="font-medium">Current Location:</p>
                      <p className="text-foreground/80">{trackingResult.currentLocation}</p>
                    </div>
                  </div>

                  {/* Tracking Progress */}
                  <div className="mb-6">
                    <h3 className="font-medium text-lg mb-4">Shipping Progress</h3>

                    {/* Timeline */}
                    <div className="relative pl-8 border-l-2 border-white/10">
                      {trackingResult.updates.map((update, index) => {
                        const isFirst = index === 0;
                        const isLast = index === trackingResult.updates.length - 1;
                        return (
                          <div
                            key={index}
                            className={`relative flex items-start mb-8 last:mb-0`}
                          >
                            {/* Timeline Dot */}
                            <div
                              className={`absolute -left-5 top-1.5 flex flex-col items-center`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                                  ${isFirst
                                    ? 'bg-primary border-primary shadow-lg'
                                    : 'bg-content2/70 border-white/20'}
                                `}
                              >
                                {isFirst ? (
                                  <span className="w-2 h-2 rounded-full bg-primary-foreground block" />
                                ) : (
                                  <span className="w-2 h-2 rounded-full bg-white/30 block" />
                                )}
                              </span>
                              {/* Vertical line for all except last */}
                              {!isLast && (
                                <span
                                  className="w-0.5 flex-1 bg-white/10 mt-0.5"
                                  style={{ minHeight: '32px' }}
                                />
                              )}
                            </div>
                            {/* Timeline Content */}
                            <div className="ml-2 flex-1">
                              <p className="text-xs text-foreground/70 mb-1">{update.date}</p>
                              <h4
                                className={`font-semibold mb-1 ${
                                  isFirst ? 'text-primary' : ''
                                }`}
                              >
                                {update.status}
                              </h4>
                              <p className="text-sm text-foreground/80">{update.location}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Divider className="my-6" />

                  {/* Order Details */}
                  <div className="mb-6">
                    <h3 className="font-medium text-lg mb-4">Order Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Shipping Address</h4>
                        <div className="p-4 border border-white/10 rounded-lg bg-content2/30">
                          <p>Jane Doe</p>
                          <p>123 Main Street, Apt 4B</p>
                          <p>Chicago, IL 60601</p>
                          <p>United States</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Shipping Method</h4>
                        <div className="p-4 border border-white/10 rounded-lg bg-content2/30 mb-4">
                          <p className="font-medium">Express Shipping</p>
                          <p className="text-sm text-foreground/70">Delivery in 1-2 business days</p>
                        </div>

                        <h4 className="font-medium mb-2">Carrier Information</h4>
                        <div className="p-4 border border-white/10 rounded-lg bg-content2/30">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon icon="logos:fedex" width={60} />
                          </div>
                          <p className="text-sm">Tracking #: 1234567890123456</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                      color="primary"
                      variant="flat"
                      startContent={<Icon icon="lucide:mail" />}
                    >
                      Contact Support
                    </Button>
                    <Button
                      variant="flat"
                      startContent={<Icon icon="lucide:refresh-cw" />}
                      onPress={() => {
                        setTrackingResult(null);
                        setOrderNumber('');
                        setEmail('');
                      }}
                    >
                      Track Another Order
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardBody>
          </Card>

          {!trackingResult && (
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <h2 className="font-serif italic text-xl mb-4">Shipping Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:truck" className="text-primary" />
                      <h3 className="font-medium">Standard Shipping</h3>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      3-5 business days
                    </p>
                    <p className="text-foreground/80 text-sm">
                      Free on orders over $50
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:zap" className="text-primary" />
                      <h3 className="font-medium">Express Shipping</h3>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      1-2 business days
                    </p>
                    <p className="text-foreground/80 text-sm">
                      $12.00 flat rate
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:globe" className="text-primary" />
                      <h3 className="font-medium">International</h3>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      7-14 business days
                    </p>
                    <p className="text-foreground/80 text-sm">
                      Rates vary by location
                    </p>
                  </div>
                </div>

                <Divider className="my-6" />

                <div className="text-center">
                  <p className="text-foreground/80 mb-4">
                    Need help with your order? Our customer service team is available 24/7.
                  </p>
                  <Button
                    color="primary"
                    variant="flat"
                    startContent={<Icon icon="lucide:help-circle" />}
                  >
                    Get Help
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};