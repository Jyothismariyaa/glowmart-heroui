import React from 'react';
import { Button, Card, CardBody, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif italic text-white glow-text mb-8">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <Card className="glass-card border-white/10">
            <CardBody className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <Icon icon="lucide:shopping-bag" className="text-primary text-4xl" />
                <h2 className="text-xl font-medium text-white">Your cart is empty</h2>
                <p className="text-white/70 mb-4">Add some beautiful products to your cart and they will show up here</p>
                <Button 
                  as={Link}
                  to="/products"
                  color="primary"
                  radius="full"
                  className="font-medium"
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  Continue Shopping
                </Button>
              </div>
            </CardBody>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-white/10">
                <CardBody className="divide-y divide-white/10">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <Link to={`/products/${item.id}`} className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-white">{item.name}</h3>
                          <span className="font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        
                        <p className="text-sm text-white/70 mb-2">
                          Category: {item.category}
                        </p>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-content2/50 transition-colors text-white"
                            >
                              <Icon icon="lucide:minus" className="text-sm" />
                            </button>
                            <span className="px-3 py-1 text-sm text-white">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-content2/50 transition-colors text-white"
                            >
                              <Icon icon="lucide:plus" className="text-sm" />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/70 hover:text-danger transition-colors"
                          >
                            <Icon icon="lucide:trash-2" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardBody>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="glass-card border-white/10 sticky top-4">
                <CardBody>
                  <h2 className="text-xl font-medium text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-white/70">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between font-medium text-white">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    color="primary"
                    radius="full"
                    className="w-full mt-8 font-medium"
                    size="lg"
                    as={Link}
                    to="/checkout"
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <p className="text-center text-white/70 text-sm mt-4">
                    Free shipping on orders over $50
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;