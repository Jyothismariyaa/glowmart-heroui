import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Button, Select, SelectItem } from '@heroui/react';
import { Icon } from '@iconify/react';

export const StoreCheckPage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [location, setLocation] = React.useState('');
  const [radius, setRadius] = React.useState('10');
  const [searchResults, setSearchResults] = React.useState<any[]>([]);

  // Mock store data - in a real app, this would come from an API
  const mockStores = [
    {
      id: 1,
      name: "GlowMart Beauty Center",
      address: "123 Main Street, New York, NY 10001",
      phone: "(212) 555-0123",
      hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
      distance: "0.8 miles",
      inStock: ["Foundation", "Lipstick", "Skincare Set"]
    },
    {
      id: 2,
      name: "GlowMart at Fashion Mall",
      address: "456 Shopping Ave, New York, NY 10002",
      phone: "(212) 555-0124",
      hours: "Mon-Sun: 10AM-10PM",
      distance: "1.2 miles",
      inStock: ["Eyeshadow Palette", "Mascara", "Face Cream"]
    },
    {
      id: 3,
      name: "GlowMart Express",
      address: "789 Beauty Blvd, New York, NY 10003",
      phone: "(212) 555-0125",
      hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
      distance: "2.5 miles",
      inStock: ["Serum", "Face Mask", "Makeup Brushes"]
    }
  ];

  const handleSearch = () => {
    // In a real app, this would make an API call
    setSearchResults(mockStores);
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
            Find a Store
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Check product availability at GlowMart stores near you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    label="Location"
                    placeholder="Enter zip code or city"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    startContent={<Icon icon="lucide:map-pin" className="text-primary" />}
                    classNames={{
                      input: "text-white",
                      inputWrapper: "bg-content2 border-white/10"
                    }}
                  />
                </div>
                <Select
                  label="Radius"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  classNames={{
                    trigger: "bg-content2 border-white/10",
                    value: "text-white"
                  }}
                >
                  <SelectItem value="5">5 miles</SelectItem>
                  <SelectItem value="10">10 miles</SelectItem>
                  <SelectItem value="20">20 miles</SelectItem>
                  <SelectItem value="50">50 miles</SelectItem>
                </Select>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button
                  color="primary"
                  size="lg"
                  onClick={handleSearch}
                  startContent={<Icon icon="lucide:search" />}
                >
                  Find Stores
                </Button>
              </div>
            </CardBody>
          </Card>

          {searchResults.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-medium mb-4">Stores Near You</h2>
              <div className="space-y-4">
                {searchResults.map((store) => (
                  <Card key={store.id} className="glass-card border-white/10">
                    <CardBody className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">{store.name}</h3>
                          <p className="text-foreground/80 mb-1">{store.address}</p>
                          <p className="text-foreground/80 mb-1">{store.phone}</p>
                          <p className="text-foreground/80">{store.hours}</p>
                        </div>
                        <div className="md:text-right">
                          <p className="text-primary font-medium mb-2">{store.distance}</p>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">In Stock:</p>
                            {store.inStock.map((item, index) => (
                              <p key={index} className="text-sm text-foreground/80">
                                • {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="flat"
                          startContent={<Icon icon="lucide:map" />}
                          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(store.address)}`, '_blank')}
                        >
                          Get Directions
                        </Button>
                        <Button
                          variant="flat"
                          startContent={<Icon icon="lucide:phone" />}
                          onClick={() => window.open(`tel:${store.phone.replace(/[^0-9]/g, '')}`)}
                        >
                          Call Store
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          <div className="mt-12 bg-content2/30 rounded-lg p-6">
            <h2 className="font-medium text-lg mb-4">Store Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon icon="lucide:user" className="text-primary text-xl" />
                </div>
                <h3 className="font-medium mb-2">Beauty Consultation</h3>
                <p className="text-foreground/80 text-sm">
                  Get personalized beauty advice from our expert consultants.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon icon="lucide:gift" className="text-primary text-xl" />
                </div>
                <h3 className="font-medium mb-2">Gift Services</h3>
                <p className="text-foreground/80 text-sm">
                  Complimentary gift wrapping and personalized cards available.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon icon="lucide:package" className="text-primary text-xl" />
                </div>
                <h3 className="font-medium mb-2">In-Store Pickup</h3>
                <p className="text-foreground/80 text-sm">
                  Order online and pick up in-store within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 