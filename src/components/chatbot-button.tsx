import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';

export const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Array<{type: 'user' | 'bot', text: string}>>([
    {type: 'bot', text: 'Hello! I\'m your AI Beauty Stylist. How can I help you today?'},
    {type: 'bot', text: 'You can ask me for product recommendations, beauty tips, or help finding the perfect look for any occasion!'}
  ]);
  const [input, setInput] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, {type: 'user', text: input}]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      let response = '';
      
      if (input.toLowerCase().includes('date night')) {
        response = 'For a date night look, I recommend our Velvet Matte Lipstick in "Passionate Red" paired with our Shimmer Eyeshadow Palette. Would you like me to show you these products?';
      } else if (input.toLowerCase().includes('skin') || input.toLowerCase().includes('dry')) {
        response = 'For dry skin, our Hydra-Boost Serum and Moisture Lock Cream would be perfect. They contain hyaluronic acid and ceramides to deeply hydrate your skin.';
      } else if (input.toLowerCase().includes('recommend') || input.toLowerCase().includes('suggestion')) {
        response = 'Based on current trends, our Glow Essence Tinted Moisturizer and Dewy Finish Setting Spray are very popular. Would you like to see more details?';
      } else {
        response = 'I\'d be happy to help you with that! Would you like me to recommend some products based on your skin type or the occasion?';
      }
      
      setMessages(prev => [...prev, {type: 'bot', text: response}]);
    }, 1000);
  };

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          isIconOnly
          color="primary"
          radius="full"
          size="lg"
          onPress={() => setIsOpen(true)}
          className="shadow-lg"
        >
          <Icon icon="lucide:message-circle" width={24} />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <Modal 
            isOpen={isOpen} 
            onOpenChange={setIsOpen}
            backdrop="blur"
            placement="bottom-center"
            size="lg"
            classNames={{
              base: "chatbot-container",
              header: "border-b border-white/10",
              footer: "border-t border-white/10",
              closeButton: "text-white hover:bg-white/10"
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex items-center gap-2">
                    <div className="relative">
                      <Avatar
                        src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                        className="w-8 h-8"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full border-2 border-content1"></span>
                    </div>
                    <div>
                      <h3 className="text-white">AI Beauty Stylist</h3>
                      <p className="text-white/60 text-xs">Online</p>
                    </div>
                  </ModalHeader>
                  <ModalBody className="pb-6">
                    <div className="flex flex-col space-y-4 overflow-y-auto max-h-[400px]">
                      {messages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                              msg.type === 'user' 
                                ? 'bg-primary text-black' 
                                : 'bg-content2 text-white'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <div className="flex w-full gap-2">
                      <Input
                        placeholder="Ask me about products, looks, or beauty tips..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        radius="full"
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <Button
                        isIconOnly
                        color="primary"
                        radius="full"
                        onPress={handleSend}
                      >
                        <Icon icon="lucide:send" />
                      </Button>
                    </div>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
