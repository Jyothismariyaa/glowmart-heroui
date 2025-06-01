import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';

interface OrbitItemProps {
  icon: string;
  label: string;
  angle: number;
  distance: number;
  onPress: () => void;
}

const OrbitItem: React.FC<OrbitItemProps> = ({ icon, label, angle, distance, onPress }) => {
  const x = Math.cos(angle * (Math.PI / 180)) * distance;
  const y = Math.sin(angle * (Math.PI / 180)) * distance;

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center"
      style={{ 
        left: '50%',
        top: '50%',
        x: x - 25, // Center the item by offsetting half its width
        y: y - 25, // Center the item by offsetting half its height
        width: 50,
        height: 50,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-content2 border border-white/20 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-primary/30 transition-all duration-300"
        onClick={onPress}
      >
        <Icon icon={icon} className="text-primary text-xl" />
      </motion.div>
      <span className="text-white/70 text-xs mt-2 whitespace-nowrap">{label}</span>
    </motion.div>
  );
};

export const AiStyleOrbit: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPanel, setSelectedPanel] = React.useState<string | null>(null);
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { duration: 120, ease: "linear", repeat: Infinity }
    });
  }, [controls]);

  const handleItemClick = (panel: string) => {
    setSelectedPanel(panel);
    setIsOpen(true);
  };

  const orbitItems = [
    { icon: "lucide:lipstick", label: "Makeup", angle: 0, panel: "makeup" },
    { icon: "lucide:sparkles", label: "Skincare", angle: 60, panel: "skincare" },
    { icon: "lucide:droplet", label: "Fragrance", angle: 120, panel: "fragrance" },
    { icon: "lucide:heart", label: "Saved", angle: 180, panel: "saved" },
    { icon: "lucide:camera", label: "Try On", angle: 240, panel: "tryon" },
    { icon: "lucide:gift", label: "For You", angle: 300, panel: "foryou" },
  ];

  const renderPanelContent = () => {
    switch (selectedPanel) {
      case 'makeup':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-primary">Makeup Recommendations</h3>
            <p className="text-white/70">Based on your profile and preferences, here are your personalized makeup recommendations:</p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-card p-3 rounded-lg">
                  <img 
                    src={`https://img.heroui.chat/image/fashion?w=200&h=200&u=${10+i}`} 
                    alt={`Product ${i}`}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-white text-sm font-medium">Velvet Matte Lipstick</h4>
                  <p className="text-white/60 text-xs">$24.99</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skincare':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-primary">Skincare Routine</h3>
            <p className="text-white/70">Your personalized skincare routine for combination skin:</p>
            <div className="space-y-3 mt-4">
              {['Morning Cleanser', 'Vitamin C Serum', 'Hydrating Moisturizer', 'SPF 50 Sunscreen'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass-card p-3 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-content3 flex items-center justify-center">
                    <span className="text-primary font-medium">{i+1}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">{item}</h4>
                    <p className="text-white/60 text-xs">Apply to clean skin</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'tryon':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-primary">Virtual Try-On</h3>
            <p className="text-white/70">Try our products virtually using your camera:</p>
            <div className="relative mt-4 rounded-lg overflow-hidden aspect-video bg-black/40">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button color="primary" radius="full" startContent={<Icon icon="lucide:camera" />}>
                  Enable Camera
                </Button>
              </div>
            </div>
            <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-shrink-0 w-12 h-12 rounded-full bg-content2 border border-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full" style={{backgroundColor: ['#ff9cac', '#b9a9ff', '#ffb347', '#ff6b6b', '#4ecdc4'][i-1]}}></div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-primary">AI Beauty Assistant</h3>
            <p className="text-white/70">Select an option from the orbit to see personalized recommendations and tools.</p>
            <div className="flex justify-center mt-6">
              <Button color="primary" radius="full" startContent={<Icon icon="lucide:sparkles" />}>
                Take Style Quiz
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {/* Orbit Paths */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full rounded-full border border-white/10"
        animate={controls}
      />
      
      {/* Center Button */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          isIconOnly
          color="primary"
          radius="full"
          size="lg"
          className="shadow-lg shadow-primary/20"
        >
          <Icon icon="lucide:plus" width={24} />
        </Button>
      </motion.div>
      
      {/* Orbit Items */}
      {orbitItems.map((item, index) => (
        <OrbitItem
          key={index}
          icon={item.icon}
          label={item.label}
          angle={item.angle}
          distance={120}
          onPress={() => handleItemClick(item.panel)}
        />
      ))}

      {/* Panel Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={setIsOpen}
        backdrop="blur"
        placement="bottom-center"
        size="lg"
        classNames={{
          base: "chatbot-container",
          header: "border-b border-white/10",
          closeButton: "text-white hover:bg-white/10"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-2">
                <Avatar
                  src="https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
                  className="w-8 h-8"
                />
                <span className="text-white">AI Style Assistant</span>
              </ModalHeader>
              <ModalBody className="py-6">
                {renderPanelContent()}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
