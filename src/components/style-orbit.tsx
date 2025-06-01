import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button, Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/react';

interface StyleOrbitProps {
  className?: string;
}

interface OrbitItem {
  id: string;
  icon: string;
  label: string;
  color: string;
  angle: number;
  description: string;
}

export const StyleOrbit: React.FC<StyleOrbitProps> = ({ className = "" }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = React.useState<OrbitItem | null>(null);
  const [isHovering, setIsHovering] = React.useState(false);
  
  const orbitItems: OrbitItem[] = [
    { id: "skincare", icon: "lucide:droplet", label: "Skincare", color: "#ff8599", angle: 0, description: "Discover personalized skincare routines and products tailored to your skin type and concerns." },
    { id: "makeup", icon: "lucide:palette", label: "Makeup", color: "#ff8599", angle: 60, description: "Explore makeup looks and products that enhance your natural beauty and express your style." },
    { id: "fragrance", icon: "lucide:sparkles", label: "Fragrance", color: "#6a5acd", angle: 120, description: "Find your signature scent with our curated collection of luxury fragrances." },
    { id: "haircare", icon: "lucide:scissors", label: "Haircare", color: "#6a5acd", angle: 180, description: "Transform your hair with premium haircare products designed for your specific hair type and goals." },
    { id: "tools", icon: "lucide:wand", label: "Tools", color: "#ff8599", angle: 240, description: "Elevate your beauty routine with professional-grade tools and accessories." },
    { id: "tutorials", icon: "lucide:video", label: "Tutorials", color: "#6a5acd", angle: 300, description: "Learn expert techniques and tips through our exclusive beauty tutorials." },
  ];

  const handleItemClick = (item: OrbitItem) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${className}`}>
      <div 
        className="style-orbit relative w-[300px] h-[300px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Orbit rings */}
        <motion.div 
          className="orbit-ring absolute inset-0 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        />
        
        <motion.div 
          className="orbit-ring absolute rounded-full border border-white/10" 
          style={{ width: '80%', height: '80%', top: '10%', left: '10%' }}
          animate={{ rotate: -360 }}
          transition={{ 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        />
        
        {/* Center button */}
        <motion.div 
          className="orbit-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: isHovering 
              ? ['0 0 10px rgba(255, 133, 153, 0.5)', '0 0 20px rgba(255, 133, 153, 0.8)', '0 0 10px rgba(255, 133, 153, 0.5)'] 
              : '0 0 10px rgba(255, 133, 153, 0.5)'
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <Icon icon="lucide:plus" className="text-white text-2xl" />
        </motion.div>
        
        {/* Orbit items */}
        {orbitItems.map((item, index) => {
          const radius = 120; // Distance from center
          const x = radius * Math.cos(item.angle * Math.PI / 180);
          const y = radius * Math.sin(item.angle * Math.PI / 180);
          
          return (
            <motion.div
              key={item.id}
              className="orbit-item absolute w-10 h-10 rounded-full bg-content2/50 flex items-center justify-center"
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleItemClick(item)}
              animate={{ 
                boxShadow: isHovering 
                  ? ['0 0 10px rgba(255, 133, 153, 0.3)', '0 0 15px rgba(255, 133, 153, 0.6)', '0 0 10px rgba(255, 133, 153, 0.3)'] 
                  : '0 0 10px rgba(255, 133, 153, 0.3)'
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              }}
            >
              <Icon icon={item.icon} className="text-xl" style={{ color: item.color }} />
            </motion.div>
          );
        })}
      </div>
      
      {/* Item detail modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        classNames={{
          base: "glassmorphism-dark",
          header: "border-b border-white/10",
          footer: "border-t border-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedItem && (
                  <div className="flex items-center gap-2">
                    <Icon icon={selectedItem.icon} style={{ color: selectedItem.color }} />
                    <span className="font-serif italic">{selectedItem.label}</span>
                  </div>
                )}
              </ModalHeader>
              <ModalBody>
                {selectedItem && (
                  <>
                    <p>{selectedItem.description}</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="glassmorphism shimmer">
                          <CardBody className="p-3 flex items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-content2/50 flex items-center justify-center">
                              <Icon icon={selectedItem.icon} className="text-lg" style={{ color: selectedItem.color }} />
                            </div>
                            <div>
                              <p className="text-xs font-medium">Featured Product {i}</p>
                              <p className="text-xs text-foreground-400">$XX.XX</p>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Explore All
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
