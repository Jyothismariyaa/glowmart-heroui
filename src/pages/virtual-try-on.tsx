import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardBody, Tabs, Tab, Divider, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const VirtualTryOnPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("lipstick");
  const [selectedShade, setSelectedShade] = React.useState(0);
  const [cameraActive, setCameraActive] = React.useState(false);
  const [cameraPermission, setCameraPermission] = React.useState<boolean | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Product categories and shades
  const productCategories = {
    lipstick: {
      name: "Velvet Matte Lipstick",
      price: 38.00,
      shades: [
        { name: "Passionate Red", color: "#c91f37" },
        { name: "Mauve Dream", color: "#c08081" },
        { name: "Coral Sunset", color: "#ff7f50" },
        { name: "Berry Bliss", color: "#8e4585" },
        { name: "Nude Perfection", color: "#cb8e6d" }
      ]
    },
    blush: {
      name: "Radiant Blush",
      price: 36.00,
      shades: [
        { name: "Peach Glow", color: "#ffaa80" },
        { name: "Rose Flush", color: "#e57373" },
        { name: "Coral Pop", color: "#ff8a65" },
        { name: "Berry Tint", color: "#ad5389" }
      ]
    },
    eyeshadow: {
      name: "Celestial Eye Palette",
      price: 58.00,
      shades: [
        { name: "Golden Hour", color: "#ffd700" },
        { name: "Smoky Quartz", color: "#696969" },
        { name: "Rose Gold", color: "#b76e79" },
        { name: "Midnight Blue", color: "#191970" }
      ]
    },
    foundation: {
      name: "Luminous Silk Foundation",
      price: 52.00,
      shades: [
        { name: "Fair", color: "#f5e0d5" },
        { name: "Light", color: "#edd3b9" },
        { name: "Medium", color: "#d8b396" },
        { name: "Tan", color: "#c19a78" },
        { name: "Deep", color: "#8d5524" }
      ]
    }
  };

  // Get current product and shades based on selected tab
  const currentProduct = productCategories[selectedTab as keyof typeof productCategories];
  const currentShades = currentProduct.shades;

  // Handle camera activation
  const activateCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setCameraPermission(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraPermission(false);
    }
  };

  // Stop camera when component unmounts
  React.useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

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
            Virtual Try-On
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Experience our products before you buy with our AI-powered virtual mirror. Try different shades and find your perfect match.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Camera/Mirror View */}
          <div className="lg:col-span-2">
            <Card className="glass-card border border-white/10 h-full">
              <CardBody className="p-6">
                <div className="relative aspect-[4/3] bg-black/40 rounded-lg overflow-hidden mb-6">
                  {!cameraActive ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {cameraPermission === false ? (
                        <>
                          <Icon icon="lucide:camera-off" className="text-4xl text-foreground/60 mb-4" />
                          <p className="text-foreground/80 mb-2">Camera access denied</p>
                          <p className="text-foreground/60 text-sm mb-4 max-w-md text-center">
                            Please allow camera access in your browser settings to use the virtual try-on feature.
                          </p>
                          <Button 
                            color="primary"
                            onPress={() => activateCamera()}
                          >
                            Try Again
                          </Button>
                        </>
                      ) : (
                        <>
                          <Icon icon="lucide:camera" className="text-4xl text-foreground/60 mb-4" />
                          <p className="text-foreground/80 mb-6">Enable your camera to start the virtual try-on experience</p>
                          <Button 
                            color="primary"
                            onPress={() => activateCamera()}
                            startContent={<Icon icon="lucide:camera" />}
                          >
                            Activate Camera
                          </Button>
                        </>
                      )}
                    </div>
                  ) : (
                    <video 
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Overlay controls when camera is active */}
                  {cameraActive && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <Button
                        isIconOnly
                        color="primary"
                        variant="flat"
                        className="bg-black/50 backdrop-blur-sm"
                        onPress={() => {
                          if (videoRef.current && videoRef.current.srcObject) {
                            const stream = videoRef.current.srcObject as MediaStream;
                            const tracks = stream.getTracks();
                            tracks.forEach(track => track.stop());
                          }
                          setCameraActive(false);
                        }}
                      >
                        <Icon icon="lucide:camera-off" />
                      </Button>
                      <Button
                        isIconOnly
                        color="primary"
                        variant="flat"
                        className="bg-black/50 backdrop-blur-sm"
                      >
                        <Icon icon="lucide:camera" />
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-serif italic text-2xl">
                    {currentProduct.name}
                  </h2>
                  <Badge color="primary" variant="flat" size="lg">
                    ${currentProduct.price.toFixed(2)}
                  </Badge>
                </div>
                
                <Divider className="my-4" />
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Selected Shade: {currentShades[selectedShade].name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {currentShades.map((shade, index) => (
                      <button
                        key={index}
                        className={`w-10 h-10 rounded-full transition-all ${
                          selectedShade === index 
                            ? "ring-2 ring-offset-2 ring-primary ring-offset-background" 
                            : "hover:scale-110"
                        }`}
                        style={{ backgroundColor: shade.color }}
                        onClick={() => setSelectedShade(index)}
                        aria-label={shade.name}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    color="primary"
                    startContent={<Icon icon="lucide:shopping-bag" />}
                    as={Link}
                    to="/cart"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="flat"
                    startContent={<Icon icon="lucide:heart" />}
                  >
                    Save to Wishlist
                  </Button>
                  <Button
                    variant="flat"
                    startContent={<Icon icon="lucide:share-2" />}
                  >
                    Share Look
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          
          {/* Product Selection */}
          <div>
            <Card className="glass-card border border-white/10 sticky top-24">
              <CardBody className="p-6">
                <h2 className="font-serif italic text-xl mb-4">Try On Products</h2>
                
                <Tabs 
                  selectedKey={selectedTab} 
                  onSelectionChange={setSelectedTab as any}
                  color="primary"
                  variant="underlined"
                  classNames={{
                    tabList: "gap-4",
                  }}
                >
                  <Tab key="lipstick" title="Lipstick" />
                  <Tab key="blush" title="Blush" />
                  <Tab key="eyeshadow" title="Eyeshadow" />
                  <Tab key="foundation" title="Foundation" />
                </Tabs>
                
                <div className="mt-6 space-y-4">
                  {/* Product Cards */}
                  {[1, 2, 3].map((item) => (
                    <div 
                      key={item} 
                      className={`p-3 border border-white/10 rounded-lg flex gap-3 cursor-pointer transition-all hover:bg-content2/50 ${item === 1 ? 'bg-content2/50' : ''}`}
                      onClick={() => {}}
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src={`https://img.heroui.chat/image/fashion?w=100&h=100&u=${selectedTab}${item}`} 
                          alt={`${currentProduct.name} ${item}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{currentProduct.name}</h3>
                        <p className="text-xs text-foreground/70">
                          {item === 1 ? 'Bestseller' : item === 2 ? 'New Arrival' : 'Limited Edition'}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm">${currentProduct.price.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            isIconOnly
                          >
                            <Icon icon="lucide:plus" className="text-xs" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Divider className="my-6" />
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Complete Your Look</h3>
                    
                    <div className="p-3 border border-white/10 rounded-lg flex gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=complement1" 
                          alt="Complementary Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">Precision Eyeliner</h3>
                        <p className="text-xs text-foreground/70">Perfect match for your look</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm">$26.00</span>
                          <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            isIconOnly
                          >
                            <Icon icon="lucide:plus" className="text-xs" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-white/10 rounded-lg flex gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=complement2" 
                          alt="Complementary Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">Setting Powder</h3>
                        <p className="text-xs text-foreground/70">For a flawless finish</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm">$38.00</span>
                          <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            isIconOnly
                          >
                            <Icon icon="lucide:plus" className="text-xs" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="mt-16">
          <h2 className="font-serif italic text-3xl text-center mb-8 glow-text">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "lucide:camera",
                title: "Activate Camera",
                description: "Enable your device's camera to start the virtual try-on experience."
              },
              {
                icon: "lucide:palette",
                title: "Select Products",
                description: "Browse through our collection and choose products and shades to try."
              },
              {
                icon: "lucide:shopping-bag",
                title: "Purchase Your Favorites",
                description: "Add the products you love directly to your cart and complete your purchase."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border border-white/10 h-full">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Icon icon={step.icon} className="text-primary text-2xl" />
                    </div>
                    <h3 className="font-serif italic text-xl mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Tips Section */}
        <div className="mt-16">
          <Card className="glass-card border border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Tips for the Best Experience</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:sun" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Good Lighting</h3>
                      <p className="text-foreground/80 text-sm">
                        Ensure you're in a well-lit environment for the most accurate color representation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:move" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Stay Still</h3>
                      <p className="text-foreground/80 text-sm">
                        For the best results, try to keep your face centered and minimize movement.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:smile" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Try Different Expressions</h3>
                      <p className="text-foreground/80 text-sm">
                        Smile, pout, or make different expressions to see how the products look in various situations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:share-2" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Share Your Look</h3>
                      <p className="text-foreground/80 text-sm">
                        Take a screenshot of your favorite looks to share with friends or save for later.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};