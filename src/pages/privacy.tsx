import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

export const PrivacyPolicyPage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Personal Information</h3>
                  <p className="text-foreground/80 mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>Name and contact information</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information</li>
                    <li>Email address</li>
                    <li>Account preferences</li>
                    <li>Beauty profile information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Automatically Collected Information</h3>
                  <p className="text-foreground/80 mb-4">
                    When you use our services, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>Device information (type, operating system, browser)</li>
                    <li>IP address and location data</li>
                    <li>Browsing history on our website</li>
                    <li>Shopping preferences and cart contents</li>
                    <li>Usage patterns and interactions</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">How We Use Your Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Service Provision</h3>
                  <p className="text-foreground/80">
                    We use your information to provide our services, process orders, and maintain your account. This includes personalizing your shopping experience, processing payments, and delivering products.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Communication</h3>
                  <p className="text-foreground/80">
                    We may use your contact information to send you order updates, promotional materials, and newsletters. You can opt out of marketing communications at any time.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Product Recommendations</h3>
                  <p className="text-foreground/80">
                    We analyze your shopping history and preferences to provide personalized product recommendations and beauty advice through our AI technology.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Information Sharing</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Third-Party Service Providers</h3>
                  <p className="text-foreground/80">
                    We share information with trusted third-party service providers who assist us in operating our website, conducting business, and serving our users. These providers are bound by confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Legal Requirements</h3>
                  <p className="text-foreground/80">
                    We may disclose information if required by law, regulation, legal process, or governmental request.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Business Transfers</h3>
                  <p className="text-foreground/80">
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Data Security</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Security Measures</h3>
                  <p className="text-foreground/80">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Payment Security</h3>
                  <p className="text-foreground/80">
                    All payment information is encrypted using industry-standard SSL technology. We do not store complete credit card information on our servers.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Your Rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Access and Control</h3>
                  <p className="text-foreground/80">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Request data portability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Cookie Preferences</h3>
                  <p className="text-foreground/80">
                    You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Contact Us</h2>
              
              <p className="text-foreground/80 mb-4">
                If you have any questions about our Privacy Policy or how we handle your information, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:mail" className="text-primary" />
                  <span className="text-foreground/80">privacy@glowmart.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:phone" className="text-primary" />
                  <span className="text-foreground/80">1-800-GLOW-MART</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:map-pin" className="text-primary" />
                  <span className="text-foreground/80">123 Beauty Lane, Suite 100, New York, NY 10001</span>
                </div>
              </div>

              <p className="text-foreground/60 text-sm mt-6">
                Last updated: March 2024
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}; 