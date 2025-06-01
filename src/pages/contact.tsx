import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Textarea, Button, Accordion, AccordionItem } from '@heroui/react';
import { Icon } from '@iconify/react';

export const ContactPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  const faqItems = [
    {
      title: 'How do I track my order?',
      content: 'You can track your order by logging into your account and navigating to the "Orders" section. Alternatively, you can use the tracking number provided in your shipping confirmation email.'
    },
    {
      title: 'What is your return policy?',
      content: 'We offer a 30-day return policy for unused items in their original packaging. To initiate a return, please contact our customer service team or visit the "Returns" section in your account.'
    },
    {
      title: 'Are your products cruelty-free?',
      content: 'Yes, all GlowMart products are cruelty-free and never tested on animals. We are committed to ethical beauty practices and sustainability.'
    },
    {
      title: 'How does the virtual try-on feature work?',
      content: 'Our virtual try-on feature uses advanced AI technology to analyze your facial features and show you how products will look on your skin. Simply enable your camera on the product page and follow the on-screen instructions.'
    },
    {
      title: 'Can I change or cancel my order?',
      content: 'Orders can be modified or canceled within 1 hour of placement. Please contact our customer service team immediately if you need to make changes to your order.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif italic text-white glow-text mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80">
              We're here to help with any questions or concerns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card border-white/10 h-full">
              <CardBody className="p-6 md:p-8">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-medium text-white mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Your Name"
                          placeholder="Enter your name"
                          value={name}
                          onValueChange={setName}
                          isRequired
                          classNames={{
                            input: "text-white",
                            inputWrapper: "bg-content2 border-white/10"
                          }}
                        />
                        <Input
                          label="Email Address"
                          placeholder="Enter your email"
                          type="email"
                          value={email}
                          onValueChange={setEmail}
                          isRequired
                          classNames={{
                            input: "text-white",
                            inputWrapper: "bg-content2 border-white/10"
                          }}
                        />
                      </div>
                      <Input
                        label="Subject"
                        placeholder="What is this regarding?"
                        value={subject}
                        onValueChange={setSubject}
                        isRequired
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <Textarea
                        label="Message"
                        placeholder="How can we help you?"
                        value={message}
                        onValueChange={setMessage}
                        minRows={4}
                        isRequired
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <Button 
                        type="submit" 
                        color="primary" 
                        radius="full"
                        className="font-medium"
                        isLoading={isSubmitting}
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <Icon icon="lucide:check" className="text-primary text-2xl" />
                    </div>
                    <h2 className="text-2xl font-medium text-white mb-4">Message Sent!</h2>
                    <p className="text-white/70 text-center mb-8">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      color="primary" 
                      variant="flat"
                      radius="full"
                      onPress={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardBody>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:mail" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <p className="text-white/70 mb-1">For general inquiries:</p>
                    <p className="text-primary">info@glowmart.com</p>
                    <p className="text-white/70 mb-1 mt-2">For customer support:</p>
                    <p className="text-primary">support@glowmart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:phone" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Call Us</h3>
                    <p className="text-white/70 mb-1">Customer Service:</p>
                    <p className="text-primary">+1 (800) 123-4567</p>
                    <p className="text-white/70 text-sm">Monday-Friday: 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:map-pin" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Visit Us</h3>
                    <p className="text-white/70 mb-1">Headquarters:</p>
                    <p className="text-primary">123 Glow Avenue</p>
                    <p className="text-primary">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:message-circle" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Live Chat</h3>
                    <p className="text-white/70 mb-3">Chat with our beauty experts:</p>
                    <Button 
                      color="primary" 
                      radius="full"
                      startContent={<Icon icon="lucide:message-circle" />}
                    >
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h2 className="text-2xl font-medium text-white mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <Button 
                  isIconOnly 
                  variant="flat" 
                  radius="full"
                  className="bg-content2 text-white"
                >
                  <Icon icon="lucide:instagram" />
                </Button>
                <Button 
                  isIconOnly 
                  variant="flat" 
                  radius="full"
                  className="bg-content2 text-white"
                >
                  <Icon icon="lucide:facebook" />
                </Button>
                <Button 
                  isIconOnly 
                  variant="flat" 
                  radius="full"
                  className="bg-content2 text-white"
                >
                  <Icon icon="lucide:twitter" />
                </Button>
                <Button 
                  isIconOnly 
                  variant="flat" 
                  radius="full"
                  className="bg-content2 text-white"
                >
                  <Icon icon="lucide:youtube" />
                </Button>
                <Button 
                  isIconOnly 
                  variant="flat" 
                  radius="full"
                  className="bg-content2 text-white"
                >
                  <Icon icon="lucide:pinterest" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-content1/30 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Find quick answers to common questions about our products, shipping, returns, and more.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion variant="splitted" className="gap-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.title}
                  title={item.title}
                  classNames={{
                    base: "glass-card border-white/10",
                    title: "text-white",
                    trigger: "px-6 py-4",
                    content: "px-6 pb-4 text-white/70"
                  }}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <p className="text-white/70 mb-4">
                Can't find what you're looking for?
              </p>
              <Button 
                color="primary" 
                radius="full"
                variant="flat"
              >
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
              Visit Our Flagship Store
            </h2>
            <p className="text-white/70">
              Experience our products in person and get personalized beauty consultations.
            </p>
          </motion.div>
          
          <Card className="glass-card border-white/10 overflow-hidden">
            <CardBody className="p-0">
              <div className="aspect-[16/9] bg-content2 relative">
                {/* This would be a map in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon icon="lucide:map" className="text-primary text-4xl mb-4" />
                    <p className="text-white">Interactive Map Would Be Here</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-white font-medium">GlowMart Flagship Store</h3>
                  <p className="text-white/70">123 Glow Avenue, New York, NY 10001</p>
                </div>
                <Button 
                  color="primary" 
                  radius="full"
                  size="sm"
                  className="mt-4 md:mt-0"
                  startContent={<Icon icon="lucide:navigation" />}
                >
                  Get Directions
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};
