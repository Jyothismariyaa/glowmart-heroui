import React from 'react';
import { Button, Card, CardBody, CardFooter, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const VirtualTryOn: React.FC = () => {
  const [selected, setSelected] = React.useState("lipstick");
  const [isWebcamActive, setIsWebcamActive] = React.useState(false);
  
  const handleStartWebcam = () => {
    setIsWebcamActive(true);
  };
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
            Virtual Try-On Mirror
          </h2>
          <p className="text-foreground-400 max-w-2xl mx-auto">
            Experience our products virtually before you buy. Try different shades and styles with our AI-powered mirror.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="glassmorphism h-full">
              <CardBody className="p-0 relative">
                {isWebcamActive ? (
                  <div className="aspect-video bg-black/50 w-full h-full flex items-center justify-center">
                    <p className="text-foreground-400">Webcam placeholder (would connect to real webcam API)</p>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <Button color="primary" size="sm" startIcon={<Icon icon="lucide:camera" />}>
                        Take Photo
                      </Button>
                      <Button variant="flat" size="sm" startIcon={<Icon icon="lucide:refresh-cw" />}>
                        Reset
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-black/50 w-full h-full flex flex-col items-center justify-center p-6">
                    <Icon icon="lucide:camera" className="text-primary text-5xl mb-4" />
                    <h3 className="text-xl font-serif italic text-glow mb-2">Your Virtual Mirror</h3>
                    <p className="text-foreground-400 text-center mb-6 max-w-md">
                      Try on lipsticks, blush, eyeshadow and more with your webcam. Your privacy is protected—no images are stored.
                    </p>
                    <Button 
                      color="primary" 
                      size="lg"
                      onPress={handleStartWebcam}
                      startContent={<Icon icon="lucide:video" />}
                    >
                      Start Webcam
                    </Button>
                  </div>
                )}
              </CardBody>
              <CardFooter className="justify-center">
                <p className="text-xs text-foreground-400">
                  Your privacy is important to us. No images are stored or shared.
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card className="glassmorphism h-full">
              <CardBody>
                <h3 className="font-serif italic text-xl mb-4">Choose Your Look</h3>
                
                <Tabs 
                  aria-label="Product categories" 
                  selectedKey={selected} 
                  onSelectionChange={setSelected as any}
                  color="primary"
                  variant="underlined"
                  classNames={{
                    tabList: "gap-6",
                    cursor: "w-full bg-primary",
                    tab: "max-w-fit px-0 h-12",
                  }}
                >
                  <Tab 
                    key="lipstick" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:heart" />
                        <span>Lipstick</span>
                      </div>
                    }
                  >
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="cursor-pointer"
                        >
                          <div 
                            className="w-full aspect-square rounded-full border-2 border-white/10"
                            style={{ 
                              background: `hsl(${340 + i * 5}, ${80 - i * 5}%, ${40 + i * 5}%)`,
                              boxShadow: `0 0 10px hsla(${340 + i * 5}, ${80 - i * 5}%, ${40 + i * 5}%, 0.5)`
                            }}
                          />
                          <p className="text-xs text-center mt-1">Shade {i+1}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Tab>
                  <Tab 
                    key="blush" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:circle" />
                        <span>Blush</span>
                      </div>
                    }
                  >
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="cursor-pointer"
                        >
                          <div 
                            className="w-full aspect-square rounded-full border-2 border-white/10"
                            style={{ 
                              background: `hsl(${0 + i * 10}, ${80 - i * 5}%, ${70 + i * 3}%)`,
                              boxShadow: `0 0 10px hsla(${0 + i * 10}, ${80 - i * 5}%, ${70 + i * 3}%, 0.5)`
                            }}
                          />
                          <p className="text-xs text-center mt-1">Shade {i+1}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Tab>
                  <Tab 
                    key="eyeshadow" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:eye" />
                        <span>Eyes</span>
                      </div>
                    }
                  >
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="cursor-pointer"
                        >
                          <div 
                            className="w-full aspect-square rounded-full border-2 border-white/10"
                            style={{ 
                              background: `hsl(${260 + i * 10}, ${70 - i * 5}%, ${50 + i * 5}%)`,
                              boxShadow: `0 0 10px hsla(${260 + i * 10}, ${70 - i * 5}%, ${50 + i * 5}%, 0.5)`
                            }}
                          />
                          <p className="text-xs text-center mt-1">Shade {i+1}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Tab>
                </Tabs>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Currently Selected</h4>
                  <Card className="glassmorphism-dark">
                    <CardBody className="py-3">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full"
                          style={{ 
                            background: selected === "lipstick" 
                              ? "hsl(340, 80%, 45%)" 
                              : selected === "blush"
                              ? "hsl(0, 80%, 70%)"
                              : "hsl(260, 70%, 50%)",
                            boxShadow: selected === "lipstick" 
                              ? "0 0 10px hsla(340, 80%, 45%, 0.5)" 
                              : selected === "blush"
                              ? "0 0 10px hsla(0, 80%, 70%, 0.5)"
                              : "0 0 10px hsla(260, 70%, 50%, 0.5)"
                          }}
                        />
                        <div>
                          <p className="font-medium">
                            {selected === "lipstick" 
                              ? "Velvet Matte Lipstick" 
                              : selected === "blush"
                              ? "Soft Glow Blush"
                              : "Shimmer Eyeshadow"}
                          </p>
                          <p className="text-xs text-foreground-400">Shade 1 • $32.00</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                
                <Button 
                  color="primary" 
                  className="w-full mt-6"
                  endContent={<Icon icon="lucide:shopping-bag" />}
                >
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
