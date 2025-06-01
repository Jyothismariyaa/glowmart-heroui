import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, CardBody, Input, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';

export const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Array<{type: 'user' | 'bot', text: string}>>([
    { type: 'bot', text: 'Hi there! I\'m your AI Beauty Stylist. How can I help you today?' },
    { type: 'bot', text: 'You can ask me for product recommendations, beauty tips, or help finding the perfect look for any occasion.' }
  ]);
  const [input, setInput] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (input.toLowerCase().includes('recommend') || input.toLowerCase().includes('suggestion')) {
        response = "Based on your preferences, I'd recommend our Luminous Silk Foundation for a natural glow, paired with our Radiant Blush in 'Sunset'. Would you like to see these products?";
      } else if (input.toLowerCase().includes('date') || input.toLowerCase().includes('night')) {
        response = "For a date night look, I suggest our Velvet Matte Lipstick in 'Passionate Red' and our Shimmer Eyeshadow Palette. These will create a romantic yet bold look that lasts all evening.";
      } else if (input.toLowerCase().includes('skin') || input.toLowerCase().includes('dry') || input.toLowerCase().includes('oily')) {
        response = "For your skin concerns, our Hydra-Boost Serum would be perfect. It balances oil production while providing deep hydration. Would you like me to recommend a complete skincare routine?";
      } else {
        response = "That's a great question! I'd be happy to help you with that. Would you like me to show you some product options based on your interests?";
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const suggestedQuestions = [
    "Recommend a date night look",
    "What products work for dry skin?",
    "Help me find a summer glow routine",
    "What's trending in makeup this season?"
  ];

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          isIconOnly
          color="primary"
          size="lg"
          radius="full"
          className="shadow-lg"
          onPress={toggleChat}
        >
          <Icon icon={isOpen ? "lucide:x" : "lucide:message-circle"} width={24} />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 z-40"
          >
            <Card className="glass-card shadow-lg border border-white/10 overflow-hidden">
              <CardBody className="p-0">
                <div className="bg-content2/70 backdrop-blur-md p-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar
                      src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                      className="w-8 h-8 text-tiny"
                    />
                    <div>
                      <p className="text-sm font-medium">AI Beauty Stylist</p>
                      <p className="text-xs text-foreground/60">Online</p>
                    </div>
                  </div>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={toggleChat}
                  >
                    <Icon icon="lucide:minimize-2" width={16} />
                  </Button>
                </div>
                
                <div className="h-80 overflow-y-auto p-3 space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary/20 text-foreground'
                            : 'bg-content2/70 text-foreground'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                
                {messages.length <= 3 && (
                  <div className="px-3 py-2 border-t border-white/10">
                    <p className="text-xs text-foreground/60 mb-2">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant="flat"
                          className="text-xs"
                          onPress={() => {
                            setInput(question);
                            setMessages([...messages, { type: 'user', text: question }]);
                            
                            setTimeout(() => {
                              let response = '';
                              
                              if (question.includes('date night')) {
                                response = "For a date night look, I suggest our Velvet Matte Lipstick in 'Passionate Red' and our Shimmer Eyeshadow Palette. These will create a romantic yet bold look that lasts all evening.";
                              } else if (question.includes('dry skin')) {
                                response = "For dry skin, I recommend our Hydra-Boost Serum and Ultra-Moisturizing Cream. They contain hyaluronic acid and ceramides to deeply hydrate and repair your skin barrier.";
                              } else if (question.includes('summer glow')) {
                                response = "For a summer glow routine, try our Bronzing Drops mixed with our Illuminating Primer, followed by our Waterproof Mascara and Tinted Lip Oil. Perfect for hot days and warm nights!";
                              } else if (question.includes('trending')) {
                                response = "This season, we're seeing a lot of 'glass skin', bold graphic liners, and juicy lip oils. Our Dewy Setting Spray and Precision Liner are perfect for achieving these trending looks.";
                              }
                              
                              setMessages(prev => [...prev, { type: 'bot', text: response }]);
                              setInput('');
                            }, 1000);
                          }}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="p-3 border-t border-white/10">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      classNames={{
                        inputWrapper: "bg-content2/50 hover:bg-content2/70",
                      }}
                    />
                    <Button
                      isIconOnly
                      color="primary"
                      onPress={handleSendMessage}
                    >
                      <Icon icon="lucide:send" width={16} />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};