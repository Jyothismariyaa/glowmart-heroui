import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastProvider } from '@heroui/react';
import { CartProvider } from './contexts/CartContext';
// ... other imports remain the same ...

export const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time for logo animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoAnimation />;
  }

  return (
    <CartProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-background grid-background"
      >
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductDetailPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/order-confirmation" component={OrderConfirmationPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/ai-style-quiz" component={AiStyleQuizPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/accessibility" component={AccessibilityPage} />
            <Route path="/store-check" component={StoreCheckPage} />
            <Route path="/size-guide" component={SizeGuidePage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsPage} />
            <Route path="/admin" component={AdminDashboardPage} />
            <Route path="/order-tracking" component={OrderTrackingPage} />
          </Switch>
        </main>
        <Footer />
        <ChatbotButton />
      </motion.div>
    </CartProvider>
  );
};
