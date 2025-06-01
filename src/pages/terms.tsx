import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Link } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
            Terms of Service
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Agreement to Terms</h2>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  By accessing or using GlowMart's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Use License</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Permission</h3>
                  <p className="text-foreground/80">
                    Permission is granted to temporarily download one copy of the materials (information or software) on GlowMart's website for personal, non-commercial transitory viewing only.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Restrictions</h3>
                  <p className="text-foreground/80 mb-4">
                    This license shall automatically terminate if you violate any of these restrictions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software</li>
                    <li>Remove any copyright or proprietary notations</li>
                    <li>Transfer the materials to another person</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Account Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Account Creation</h3>
                  <p className="text-foreground/80">
                    You must be at least 18 years old to create an account. You are responsible for maintaining the security of your account and password. GlowMart cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Account Information</h3>
                  <p className="text-foreground/80">
                    You must provide accurate, complete, and current information for your account. Any use of false, outdated, or incomplete information may result in the termination of your account.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Purchase Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Pricing</h3>
                  <p className="text-foreground/80">
                    All prices are subject to change without notice. We reserve the right to modify or discontinue products or services without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of products or services.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Payment</h3>
                  <p className="text-foreground/80">
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made through our site. You agree to promptly update your account and other information so that we can complete your transactions and contact you as needed.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Shipping</h3>
                  <p className="text-foreground/80">
                    For shipping terms and policies, please refer to our{' '}
                    <Link as={RouterLink} to="/shipping" className="text-primary hover:underline">
                      Shipping Information
                    </Link>
                    {' '}page.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Intellectual Property</h2>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of GlowMart and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of GlowMart.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10 mb-8">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Disclaimer</h2>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  Your use of GlowMart's services is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied.
                </p>
                <p>
                  GlowMart does not warrant that the service will be uninterrupted, timely, secure, or error-free. The results that may be obtained from the use of the service will be accurate or reliable.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="glass-card border-white/10">
            <CardBody className="p-6">
              <h2 className="font-serif italic text-2xl mb-6">Contact Information</h2>
              
              <p className="text-foreground/80 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:mail" className="text-primary" />
                  <span className="text-foreground/80">legal@glowmart.com</span>
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