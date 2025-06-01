// Create the missing CheckoutPage component

import React from 'react';
import { motion } from 'framer-motion';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, Input, Radio, RadioGroup, Checkbox, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';

export const CheckoutPage: React.FC = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(1);
  const [paymentMethod, setPaymentMethod] = React.useState('credit-card');
  const [isProcessing, setIsProcessing] = React.useState(false);
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      history.push('/order-confirmation');
    }, 2000);
  };

  // Sample order summary data
  const orderSummary = {
    subtotal: 113.97,
    shipping: 0,
    tax: 9.12,
    total: 123.09
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif italic text-white glow-text mb-8">Checkout</h1>
          
          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep >= 1 ? 'bg-primary text-black' : 'bg-content2 text-white/70'
                }`}>
                  1
                </div>
                <span className={`text-sm mt-2 ${
                  activeStep >= 1 ? 'text-white' : 'text-white/50'
                }`}>Shipping</span>
              </div>
              
              <div className={`flex-grow h-0.5 mx-4 ${
                activeStep >= 2 ? 'bg-primary' : 'bg-content2'
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep >= 2 ? 'bg-primary text-black' : 'bg-content2 text-white/70'
                }`}>
                  2
                </div>
                <span className={`text-sm mt-2 ${
                  activeStep >= 2 ? 'text-white' : 'text-white/50'
                }`}>Payment</span>
              </div>
              
              <div className={`flex-grow h-0.5 mx-4 ${
                activeStep >= 3 ? 'bg-primary' : 'bg-content2'
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep >= 3 ? 'bg-primary text-black' : 'bg-content2 text-white/70'
                }`}>
                  3
                </div>
                <span className={`text-sm mt-2 ${
                  activeStep >= 3 ? 'text-white' : 'text-white/50'
                }`}>Confirmation</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2">
              {activeStep === 1 && (
                <Card className="glass-card border-white/10 mb-6">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <Input
                        label="First Name"
                        placeholder="Enter your first name"
                        isRequired
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <Input
                        label="Last Name"
                        placeholder="Enter your last name"
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
                        isRequired
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <Input
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        type="tel"
                        isRequired
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                    </div>
                    
                    <div className="space-y-6 mb-6">
                      <Input
                        label="Address Line 1"
                        placeholder="Street address, P.O. box, company name"
                        isRequired
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <Input
                        label="Address Line 2"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        classNames={{
                          input: "text-white",
                          inputWrapper: "bg-content2 border-white/10"
                        }}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Input
                          label="City"
                          placeholder="Enter city"
                          isRequired
                          classNames={{
                            input: "text-white",
                            inputWrapper: "bg-content2 border-white/10"
                          }}
                        />
                        <Input
                          label="State/Province"
                          placeholder="Enter state"
                          isRequired
                          classNames={{
                            input: "text-white",
                            inputWrapper: "bg-content2 border-white/10"
                          }}
                        />
                        <Input
                          label="Zip/Postal Code"
                          placeholder="Enter zip code"
                          isRequired
                          classNames={{
                            input: "text-white",
                            inputWrapper: "bg-content2 border-white/10"
                          }}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-white mb-4">Shipping Method</h3>
                    <RadioGroup defaultValue="standard" className="gap-3">
                      <Radio 
                        value="standard" 
                        description="Delivery in 5-7 business days"
                        classNames={{
                          label: "text-white",
                          description: "text-white/60"
                        }}
                      >
                        Standard Shipping (Free)
                      </Radio>
                      <Radio 
                        value="express" 
                        description="Delivery in 2-3 business days"
                        classNames={{
                          label: "text-white",
                          description: "text-white/60"
                        }}
                      >
                        Express Shipping ($12.99)
                      </Radio>
                      <Radio 
                        value="overnight" 
                        description="Delivery in 1 business day"
                        classNames={{
                          label: "text-white",
                          description: "text-white/60"
                        }}
                      >
                        Overnight Shipping ($24.99)
                      </Radio>
                    </RadioGroup>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        as={Link}
                        to="/cart"
                        variant="light" 
                        radius="full"
                        startContent={<Icon icon="lucide:arrow-left" />}
                      >
                        Back to Cart
                      </Button>
                      
                      <Button 
                        color="primary" 
                        radius="full"
                        onPress={() => setActiveStep(2)}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              )}
              
              {activeStep === 2 && (
                <Card className="glass-card border-white/10 mb-6">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-6">Payment Method</h2>
                    
                    <Tabs 
                      aria-label="Payment methods" 
                      selectedKey={paymentMethod}
                      onSelectionChange={(key) => setPaymentMethod(key as string)}
                      color="primary"
                      variant="underlined"
                      classNames={{
                        tabList: "gap-6",
                        cursor: "bg-primary",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-primary font-medium"
                      }}
                    >
                      <Tab 
                        key="credit-card" 
                        title={
                          <div className="flex items-center gap-2">
                            <Icon icon="lucide:credit-card" />
                            <span>Credit Card</span>
                          </div>
                        }
                      >
                        <div className="py-4 space-y-6">
                          <Input
                            label="Card Number"
                            placeholder="1234 5678 9012 3456"
                            isRequired
                            classNames={{
                              input: "text-white",
                              inputWrapper: "bg-content2 border-white/10"
                            }}
                          />
                          <div className="grid grid-cols-2 gap-6">
                            <Input
                              label="Expiration Date"
                              placeholder="MM/YY"
                              isRequired
                              classNames={{
                                input: "text-white",
                                inputWrapper: "bg-content2 border-white/10"
                              }}
                            />
                            <Input
                              label="CVV"
                              placeholder="123"
                              type="password"
                              isRequired
                              classNames={{
                                input: "text-white",
                                inputWrapper: "bg-content2 border-white/10"
                              }}
                            />
                          </div>
                          <Input
                            label="Name on Card"
                            placeholder="Enter the name on your card"
                            isRequired
                            classNames={{
                              input: "text-white",
                              inputWrapper: "bg-content2 border-white/10"
                            }}
                          />
                        </div>
                      </Tab>
                      <Tab 
                        key="paypal" 
                        title={
                          <div className="flex items-center gap-2">
                            <Icon icon="logos:paypal" />
                            <span>PayPal</span>
                          </div>
                        }
                      >
                        <div className="py-4 text-center">
                          <p className="text-white/70 mb-6">
                            You will be redirected to PayPal to complete your payment securely.
                          </p>
                          <Button 
                            color="primary" 
                            radius="full"
                            startContent={<Icon icon="logos:paypal" />}
                          >
                            Pay with PayPal
                          </Button>
                        </div>
                      </Tab>
                      <Tab 
                        key="apple-pay" 
                        title={
                          <div className="flex items-center gap-2">
                            <Icon icon="logos:apple" />
                            <span>Apple Pay</span>
                          </div>
                        }
                      >
                        <div className="py-4 text-center">
                          <p className="text-white/70 mb-6">
                            Complete your purchase quickly and securely with Apple Pay.
                          </p>
                          <Button 
                            color="primary" 
                            radius="full"
                            startContent={<Icon icon="logos:apple" />}
                          >
                            Pay with Apple Pay
                          </Button>
                        </div>
                      </Tab>
                    </Tabs>
                    
                    <div className="mt-8">
                      <Checkbox 
                        className="text-white"
                        defaultSelected
                      >
                        Save payment information for future purchases
                      </Checkbox>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        variant="light" 
                        radius="full"
                        startContent={<Icon icon="lucide:arrow-left" />}
                        onPress={() => setActiveStep(1)}
                      >
                        Back to Shipping
                      </Button>
                      
                      <Button 
                        color="primary" 
                        radius="full"
                        onPress={handlePlaceOrder}
                        isLoading={isProcessing}
                      >
                        Place Order
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              )}
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="glass-card border-white/10 sticky top-24">
                <CardBody className="p-6">
                  <h2 className="text-xl font-medium text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/70">Subtotal</span>
                      <span className="text-white">${orderSummary.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Shipping</span>
                      <span className="text-white">
                        {orderSummary.shipping === 0 ? 'Free' : `$${orderSummary.shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Tax</span>
                      <span className="text-white">${orderSummary.tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-4 flex justify-between">
                      <span className="text-white font-medium">Total</span>
                      <span className="text-white font-medium">${orderSummary.total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=101" 
                          alt="Luminous Glow Serum"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-sm">Luminous Glow Serum</p>
                        <p className="text-white/60 text-xs">Qty: 1</p>
                      </div>
                      <span className="text-white">$49.99</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=102" 
                          alt="Velvet Matte Lipstick"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-sm">Velvet Matte Lipstick</p>
                        <p className="text-white/60 text-xs">Qty: 2</p>
                      </div>
                      <span className="text-white">$49.98</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src="https://img.heroui.chat/image/fashion?w=100&h=100&u=103" 
                          alt="Hydra-Boost Moisturizer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-sm">Hydra-Boost Moisturizer</p>
                        <p className="text-white/60 text-xs">Qty: 1</p>
                      </div>
                      <span className="text-white">$38.99</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-sm">
                    <Icon icon="lucide:lock" />
                    <span>Secure Checkout</span>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
