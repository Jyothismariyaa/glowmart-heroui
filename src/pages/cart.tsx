// Create the missing CartPage component

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Image, Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react';
import { Icon } from '@iconify/react';

// Sample cart items
const cartItems = [
  {
    id: '1',
    name: 'Luminous Glow Serum',
    price: 49.99,
    image: 'https://img.heroui.chat/image/fashion?w=200&h=200&u=101',
    quantity: 1
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    price: 24.99,
    image: 'https://img.heroui.chat/image/fashion?w=200&h=200&u=102',
    quantity: 2
  },
  {
    id: '3',
    name: 'Hydra-Boost Moisturizer',
    price: 38.99,
    image: 'https://img.heroui.chat/image/fashion?w=200&h=200&u=103',
    quantity: 1
  }
];

export const CartPage: React.FC = () => {
  const [items, setItems] = React.useState(cartItems);
  const [promoCode, setPromoCode] = React.useState('');
  const [isApplyingPromo, setIsApplyingPromo] = React.useState(false);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const applyPromoCode = () => {
    if (!promoCode) return;
    
    setIsApplyingPromo(true);
    // Simulate API call
    setTimeout(() => {
      setIsApplyingPromo(false);
      // In a real app, you would apply the discount here
    }, 1000);
  };
  
  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif italic text-white glow-text mb-8">Your Shopping Bag</h1>
          
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card className="glass-card border-white/10 mb-6">
                  <CardBody className="p-0">
                    <Table 
                      removeWrapper 
                      aria-label="Shopping cart items"
                      classNames={{
                        th: "bg-content2 text-white",
                        td: "text-white"
                      }}
                    >
                      <TableHeader>
                        <TableColumn>PRODUCT</TableColumn>
                        <TableColumn>QUANTITY</TableColumn>
                        <TableColumn>PRICE</TableColumn>
                        <TableColumn></TableColumn>
                      </TableHeader>
                      <TableBody>
                        {items.map((item) => (
                          <TableRow key={item.id} className="border-b border-white/10 last:border-0">
                            <TableCell>
                              <div className="flex items-center gap-4">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-md"
                                  removeWrapper
                                />
                                <div>
                                  <p className="font-medium text-white">{item.name}</p>
                                  <p className="text-white/60 text-sm">${item.price.toFixed(2)}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Button 
                                  isIconOnly 
                                  variant="light" 
                                  size="sm"
                                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Icon icon="lucide:minus" />
                                </Button>
                                <span className="mx-3 text-white">{item.quantity}</span>
                                <Button 
                                  isIconOnly 
                                  variant="light" 
                                  size="sm"
                                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Icon icon="lucide:plus" />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                            <TableCell>
                              <Button 
                                isIconOnly 
                                variant="light" 
                                size="sm"
                                onPress={() => removeItem(item.id)}
                              >
                                <Icon icon="lucide:x" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardBody>
                </Card>
                
                <div className="flex justify-between items-center">
                  <Button 
                    as={Link}
                    to="/products"
                    variant="light" 
                    radius="full"
                    startContent={<Icon icon="lucide:arrow-left" />}
                  >
                    Continue Shopping
                  </Button>
                  
                  <Button 
                    color="primary" 
                    variant="flat"
                    radius="full"
                  >
                    Update Cart
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <Card className="glass-card border-white/10 sticky top-24">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-white/70">Subtotal</span>
                        <span className="text-white">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Shipping</span>
                        <span className="text-white">
                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Tax</span>
                        <span className="text-white">${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-white/10 pt-4 flex justify-between">
                        <span className="text-white font-medium">Total</span>
                        <span className="text-white font-medium">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Promo Code"
                          value={promoCode}
                          onValueChange={setPromoCode}
                          classNames={{
                            input: "text-white",
                            inputWrapper: "bg-content2 border-white/10"
                          }}
                        />
                        <Button 
                          color="primary" 
                          isLoading={isApplyingPromo}
                          onPress={applyPromoCode}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                    
                    <Button 
                      as={Link}
                      to="/checkout"
                      color="primary" 
                      radius="full"
                      className="w-full font-medium"
                      startContent={<Icon icon="lucide:credit-card" />}
                    >
                      Proceed to Checkout
                    </Button>
                    
                    <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-sm">
                      <Icon icon="lucide:lock" size={14} />
                      <span>Secure Checkout</span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          ) : (
            <Card className="glass-card border-white/10 p-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-content2 flex items-center justify-center mb-6">
                  <Icon icon="lucide:shopping-bag" className="text-primary text-3xl" />
                </div>
                <h2 className="text-2xl font-medium text-white mb-4">Your cart is empty</h2>
                <p className="text-white/70 mb-8">Looks like you haven't added any products to your cart yet.</p>
                <Button 
                  as={Link}
                  to="/products"
                  color="primary" 
                  radius="full"
                  size="lg"
                  className="font-medium"
                >
                  Start Shopping
                </Button>
              </div>
            </Card>
          )}
          
          {/* Product Recommendations */}
          {items.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif italic text-white glow-text mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="glass-card border-white/10">
                    <CardBody className="p-0">
                      <Image
                        src={`https://img.heroui.chat/image/fashion?w=300&h=300&u=${110+i}`}
                        alt={`Recommended product ${i}`}
                        className="w-full aspect-square object-cover"
                        removeWrapper
                      />
                      <div className="p-4">
                        <p className="text-white/60 text-xs uppercase">Makeup</p>
                        <h3 className="text-white font-medium">Shimmer Eyeshadow Palette</h3>
                        <p className="text-primary font-medium mt-1">$32.99</p>
                        <Button 
                          color="primary" 
                          variant="flat"
                          radius="full"
                          size="sm"
                          className="w-full mt-3"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};