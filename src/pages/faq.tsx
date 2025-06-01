import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Accordion, AccordionItem, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const faqCategories = [
    {
      title: "Orders & Shipping",
      icon: "lucide:package",
      questions: [
        {
          q: "How do I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard or our order tracking page."
        },
        {
          q: "What shipping methods are available?",
          a: "We offer Standard Shipping (5-7 business days), Express Shipping (2-3 business days), and Next Day Delivery. Free standard shipping on orders over $50."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to select international destinations. Shipping rates and delivery times vary by location."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      icon: "lucide:refresh-ccw",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unused items in their original packaging. Some products may have specific return restrictions."
        },
        {
          q: "How do I initiate a return?",
          a: "Log into your account, go to your orders, and select 'Return Items'. Follow the prompts to generate a return shipping label."
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 2-3 business days of receiving your return. It may take an additional 5-7 business days for the refund to appear on your statement."
        }
      ]
    },
    {
      title: "Products & Beauty Advice",
      icon: "lucide:sparkles",
      questions: [
        {
          q: "Are your products cruelty-free?",
          a: "Yes, all our products are cruelty-free and never tested on animals. We're committed to ethical beauty practices."
        },
        {
          q: "How do I find the right shade match?",
          a: "Use our AI Shade Finder tool or take our Style Quiz for personalized recommendations. You can also try our virtual try-on feature."
        },
        {
          q: "Do you offer samples?",
          a: "Yes, you can select up to 3 free samples with every order over $35."
        }
      ]
    },
    {
      title: "Account & Rewards",
      icon: "lucide:user",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click the 'Sign Up' button in the top right corner and follow the prompts. You can also sign up using your social media accounts."
        },
        {
          q: "How does the rewards program work?",
          a: "Earn points on purchases, reviews, and referrals. Points can be redeemed for discounts, free products, and exclusive perks."
        },
        {
          q: "I forgot my password. What should I do?",
          a: "Click 'Forgot Password' on the login page. We'll send you a link to reset your password to your registered email address."
        }
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
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and policies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon icon={category.icon} className="text-primary" />
                </div>
                <h2 className="text-xl font-medium">{category.title}</h2>
              </div>

              <Card className="glass-card border-white/10">
                <CardBody className="p-6">
                  <Accordion variant="splitted" className="gap-4">
                    {category.questions.map((item, i) => (
                      <AccordionItem
                        key={i}
                        aria-label={item.q}
                        title={item.q}
                        classNames={{
                          base: "glass-card border-white/10",
                          title: "text-white",
                          trigger: "px-6 py-4",
                          content: "px-6 pb-4 text-white/70"
                        }}
                      >
                        {item.a}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </motion.div>
          ))}

          <div className="mt-12 bg-content2/30 rounded-lg p-6 text-center">
            <h2 className="font-medium text-lg mb-4">Still Have Questions?</h2>
            <p className="text-foreground/80 mb-6">
              Our customer service team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                to="/live-chat"
                variant="flat"
                startContent={<Icon icon="lucide:message-circle" />}
              >
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 