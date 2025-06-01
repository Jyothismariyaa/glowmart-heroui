import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastProvider } from '@heroui/react';
import { CartProvider } from './contexts/CartContext';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { ProductsPage } from './pages/products';
import { ProductDetailPage } from './pages/product-detail';
import { CartPage } from './pages/cart';
import { CheckoutPage } from './pages/checkout';
import { OrderConfirmationPage } from './pages/order-confirmation';
import { DashboardPage } from './pages/dashboard';
import { BlogPage } from './pages/blog';
import { AboutPage } from './pages/about';
import { AiStyleQuizPage } from './pages/ai-style-quiz';
import { ContactPage } from './pages/contact';
import { ShippingPage } from './pages/shipping';
import { FAQPage } from './pages/faq';
import { AccessibilityPage } from './pages/accessibility';
import { StoreCheckPage } from './pages/store-check';
import { SizeGuidePage } from './pages/size-guide';
import { PrivacyPolicyPage } from './pages/privacy';
import { TermsPage } from './pages/terms';
import { LogoAnimation } from './components/logo-animation';
import { ChatbotButton } from './components/chatbot-button';
import { AdminDashboardPage } from './pages/admin-dashboard';
import { OrderTrackingPage } from './pages/order-tracking';

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
           <ToastProvider 
     
   / >
        <Router>
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
        </Router>
      </CartProvider>
  );
};

export default App;
