import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const AccessibilityPage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const accessibilityFeatures = [
    {
      title: "Keyboard Navigation",
      icon: "lucide:keyboard",
      description: "Our website is fully navigable using keyboard controls. All interactive elements are focusable and clearly visible when selected."
    },
    {
      title: "Screen Reader Support",
      icon: "lucide:eye",
      description: "We follow ARIA best practices and provide descriptive alt text for images to ensure compatibility with screen readers."
    },
    {
      title: "Color Contrast",
      icon: "lucide:palette",
      description: "Our color schemes are designed to meet WCAG 2.1 guidelines for contrast ratios, ensuring text is readable for all users."
    },
    {
      title: "Text Resizing",
      icon: "lucide:text",
      description: "All text on our website can be resized up to 200% without loss of functionality or clarity."
    },
    {
      title: "Alternative Text",
      icon: "lucide:image",
      description: "All images include descriptive alternative text, and decorative images are properly marked to be ignored by screen readers."
    },
    {
      title: "Form Accessibility",
      icon: "lucide:form-input",
      description: "All forms include proper labels, error messages are clearly indicated, and form controls are easy to use with assistive technologies."
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
            Accessibility Statement
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We are committed to ensuring our website is accessible to everyone, regardless of ability or technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/10 mb-12">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Our Commitment</h2>
              <p className="text-foreground/80 mb-6">
                At GlowMart, we believe that everyone should have access to beauty products and information. We strive to ensure our digital presence is accessible to all users, including those with disabilities. Our website is designed and developed following the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accessibilityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon icon={feature.icon} className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                        <p className="text-foreground/80 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-12">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Accessibility Guidelines</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Navigation</h3>
                  <p className="text-foreground/80">
                    Our website can be navigated using keyboard controls. The tab order is logical and consistent. Skip links are provided for main content areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Content Structure</h3>
                  <p className="text-foreground/80">
                    We use proper heading hierarchy and semantic HTML to ensure content is well-structured and easy to navigate with assistive technologies.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Media</h3>
                  <p className="text-foreground/80">
                    Videos include closed captions, and audio content is accompanied by transcripts when available.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Dynamic Content</h3>
                  <p className="text-foreground/80">
                    Any dynamic content changes are announced to screen readers, and users are notified of updates to the page.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <div className="bg-content2/30 rounded-lg p-6">
            <h2 className="font-medium text-lg mb-4">Feedback and Support</h2>
            <p className="text-foreground/80 mb-6">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                to="/feedback"
                variant="flat"
                startContent={<Icon icon="lucide:message-square" />}
              >
                Submit Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 