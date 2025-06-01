import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Progress, Badge, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const LuxeRewardsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("overview");
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample user rewards data
  const userRewards = {
    name: "Jane Doe",
    tier: "Gold",
    points: 1250,
    nextTier: "Platinum",
    pointsToNextTier: 250,
    totalSpent: "$1,845.00",
    memberSince: "March 2023",
    availableRewards: 3,
    birthdayMonth: "June"
  };

  // Sample rewards tiers
  const rewardsTiers = [
    {
      name: "Bronze",
      pointsRequired: 0,
      benefits: [
        "Free standard shipping on orders over $50",
        "Birthday gift",
        "Early access to sales"
      ],
      color: "default"
    },
    {
      name: "Silver",
      pointsRequired: 500,
      benefits: [
        "Free standard shipping on all orders",
        "Birthday gift + 15% off coupon",
        "Early access to sales",
        "Exclusive monthly offers"
      ],
      color: "default"
    },
    {
      name: "Gold",
      pointsRequired: 1000,
      benefits: [
        "Free express shipping on all orders",
        "Birthday gift + 20% off coupon",
        "Early access to sales and new products",
        "Exclusive monthly offers",
        "Quarterly deluxe samples"
      ],
      color: "primary"
    },
    {
      name: "Platinum",
      pointsRequired: 1500,
      benefits: [
        "Free express shipping on all orders",
        "Birthday gift + 25% off coupon",
        "Priority early access to sales and new products",
        "Exclusive monthly offers",
        "Monthly deluxe samples",
        "Annual luxury gift"
      ],
      color: "secondary"
    }
  ];

  // Sample available rewards
  const availableRewards = [
    {
      id: 1,
      name: "Free Deluxe Sample",
      description: "Choose a deluxe sample with your next purchase",
      pointsCost: 100,
      expiresIn: "30 days",
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=reward1"
    },
    {
      id: 2,
      name: "15% Off Coupon",
      description: "Get 15% off your next purchase",
      pointsCost: 250,
      expiresIn: "60 days",
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=reward2"
    },
    {
      id: 3,
      name: "Free Shipping",
      description: "Free shipping on your next order (no minimum)",
      pointsCost: 150,
      expiresIn: "45 days",
      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=reward3"
    }
  ];

  // Sample points history
  const pointsHistory = [
    {
      id: 1,
      date: "June 15, 2023",
      description: "Purchase: Order #GM-78945612",
      points: "+202",
      type: "earned"
    },
    {
      id: 2,
      date: "June 10, 2023",
      description: "Redeemed: 15% Off Coupon",
      points: "-250",
      type: "redeemed"
    },
    {
      id: 3,
      date: "May 22, 2023",
      description: "Purchase: Order #GM-78945587",
      points: "+156",
      type: "earned"
    },
    {
      id: 4,
      date: "May 15, 2023",
      description: "Referral Bonus: Emma Johnson",
      points: "+100",
      type: "earned"
    },
    {
      id: 5,
      date: "May 5, 2023",
      description: "Birthday Bonus",
      points: "+50",
      type: "earned"
    },
    {
      id: 6,
      date: "April 28, 2023",
      description: "Redeemed: Free Deluxe Sample",
      points: "-100",
      type: "redeemed"
    },
    {
      id: 7,
      date: "April 10, 2023",
      description: "Purchase: Order #GM-78945432",
      points: "+90",
      type: "earned"
    }
  ];

  // Get current tier
  const currentTier = rewardsTiers.find(tier => tier.name === userRewards.tier);
  
  // Calculate progress to next tier
  const currentTierIndex = rewardsTiers.findIndex(tier => tier.name === userRewards.tier);
  const nextTier = currentTierIndex < rewardsTiers.length - 1 ? rewardsTiers[currentTierIndex + 1] : null;
  
  const progressToNextTier = nextTier 
    ? Math.floor(((userRewards.points - currentTier!.pointsRequired) / (nextTier.pointsRequired - currentTier!.pointsRequired)) * 100)
    : 100;

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
            Luxe Rewards
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Earn points with every purchase and unlock exclusive benefits, special offers, and luxury rewards.
          </p>
        </motion.div>
        
        {/* User Rewards Status */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="glass-card border border-white/10 overflow-hidden">
            <CardBody className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon icon="lucide:crown" className="text-primary" width={32} />
                    </div>
                    <div>
                      <h2 className="font-serif italic text-2xl">{userRewards.tier} Member</h2>
                      <p className="text-foreground/70">Member since {userRewards.memberSince}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-foreground/70 text-sm mb-1">Available Points</p>
                      <p className="text-2xl font-semibold">{userRewards.points}</p>
                    </div>
                    <div>
                      <p className="text-foreground/70 text-sm mb-1">Available Rewards</p>
                      <p className="text-2xl font-semibold">{userRewards.availableRewards}</p>
                    </div>
                    <div>
                      <p className="text-foreground/70 text-sm mb-1">Total Spent</p>
                      <p className="text-2xl font-semibold">{userRewards.totalSpent}</p>
                    </div>
                  </div>
                  
                  {nextTier && (
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Progress to {nextTier.name}</span>
                        <span className="text-sm">{userRewards.points} / {nextTier.pointsRequired} points</span>
                      </div>
                      <Progress 
                        value={progressToNextTier} 
                        color="primary"
                        className="h-2"
                        aria-label="Progress to next tier"
                      />
                      <p className="text-sm text-foreground/70 mt-2">
                        You need {userRewards.pointsToNextTier} more points to reach {nextTier.name} status
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      color="primary"
                      as={Link}
                      to="/products"
                    >
                      Shop & Earn Points
                    </Button>
                    <Button
                      variant="flat"
                      startContent={<Icon icon="lucide:gift" width={18} />}
                    >
                      Redeem Rewards
                    </Button>
                    <Button
                      variant="flat"
                      startContent={<Icon icon="lucide:users" width={18} />}
                    >
                      Refer Friends
                    </Button>
                  </div>
                </div>
                
                <div className="bg-content2/50 backdrop-blur-sm p-8">
                  <h3 className="font-serif italic text-xl mb-4">Your {userRewards.tier} Benefits</h3>
                  <ul className="space-y-3">
                    {currentTier?.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon icon="lucide:check-circle" className="text-primary mt-1" width={18} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {nextTier && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="font-medium mb-3">Next Tier: {nextTier.name}</h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        Unlock these additional benefits:
                      </p>
                      <ul className="space-y-2">
                        {nextTier.benefits
                          .filter(benefit => !currentTier?.benefits.includes(benefit))
                          .map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Icon icon="lucide:plus-circle" className="text-primary mt-1" width={16} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        {/* Tabs for different sections */}
        <Tabs 
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab as any}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-4",
          }}
        >
          <Tab key="overview" title="Overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Available Rewards */}
              <div className="lg:col-span-2">
                <Card className="glass-card border border-white/10 h-full">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="font-serif italic text-xl">Available Rewards</h2>
                      <Button
                        variant="light"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                        onPress={() => setSelectedTab("rewards")}
                      >
                        View All
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableRewards.map((reward) => (
                        <Card key={reward.id} className="border border-white/10">
                          <CardBody className="p-4">
                            <div className="flex gap-4">
                              <img 
                                src={reward.image} 
                                alt={reward.name}
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div className="flex-grow">
                                <h3 className="font-medium mb-1">{reward.name}</h3>
                                <p className="text-sm text-foreground/70 mb-2">{reward.description}</p>
                                <div className="flex justify-between items-center">
                                  <Badge color="primary" variant="flat">{reward.pointsCost} points</Badge>
                                  <Button
                                    size="sm"
                                    variant="flat"
                                    color="primary"
                                    isDisabled={userRewards.points < reward.pointsCost}
                                  >
                                    Redeem
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              {/* Recent Points Activity */}
              <div>
                <Card className="glass-card border border-white/10 h-full">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="font-serif italic text-xl">Recent Activity</h2>
                      <Button
                        variant="light"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                        onPress={() => setSelectedTab("history")}
                      >
                        View All
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {pointsHistory.slice(0, 4).map((activity) => (
                        <div key={activity.id} className="flex justify-between items-center p-3 bg-content2/30 rounded-lg">
                          <div>
                            <p className="text-sm font-medium">{activity.description}</p>
                            <p className="text-xs text-foreground/70">{activity.date}</p>
                          </div>
                          <span className={`font-medium ${activity.type === 'earned' ? 'text-success' : 'text-danger'}`}>
                            {activity.points}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Tab>
          
          <Tab key="rewards" title="Rewards Catalog">
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <h2 className="font-serif italic text-xl mb-6">Rewards Catalog</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...availableRewards, 
                    {
                      id: 4,
                      name: "Free Full-Size Product",
                      description: "Choose any product under $30 for free",
                      pointsCost: 500,
                      expiresIn: "90 days",
                      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=reward4"
                    },
                    {
                      id: 5,
                      name: "Luxury Gift Set",
                      description: "Exclusive luxury gift set with 5 premium products",
                      pointsCost: 1000,
                      expiresIn: "120 days",
                      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=reward5"
                    },
                    {
                      id: 6,
                      name: "Virtual Makeup Consultation",
                      description: "30-minute personalized virtual makeup consultation",
                      pointsCost: 350,
                      expiresIn: "60 days",
                      image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=reward6"
                    }
                  ].map((reward) => (
                    <Card key={reward.id} className="border border-white/10">
                      <CardBody className="p-0">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={reward.image} 
                            alt={reward.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">{reward.name}</h3>
                          <p className="text-sm text-foreground/70 mb-3">{reward.description}</p>
                          <div className="flex justify-between items-center">
                            <Badge color="primary" variant="flat">{reward.pointsCost} points</Badge>
                            <p className="text-xs text-foreground/70">Expires in: {reward.expiresIn}</p>
                          </div>
                          <Button
                            color="primary"
                            variant="flat"
                            fullWidth
                            className="mt-3"
                            isDisabled={userRewards.points < reward.pointsCost}
                          >
                            {userRewards.points >= reward.pointsCost ? "Redeem Now" : "Not Enough Points"}
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab key="tiers" title="Membership Tiers">
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <h2 className="font-serif italic text-xl mb-6">Membership Tiers & Benefits</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {rewardsTiers.map((tier, index) => (
                    <Card 
                      key={tier.name} 
                      className={`border ${tier.name === userRewards.tier ? 'border-primary' : 'border-white/10'}`}
                    >
                      <CardBody className="p-4">
                        <div className={`w-12 h-12 rounded-full bg-${tier.color}/20 flex items-center justify-center mb-4 mx-auto`}>
                          <Icon 
                            icon={index === 0 ? "lucide:award" : 
                                 index === 1 ? "lucide:medal" : 
                                 index === 2 ? "lucide:crown" : "lucide:diamond"} 
                            className={`text-${tier.color}`} 
                            width={24} 
                          />
                        </div>
                        <h3 className="font-serif italic text-lg text-center mb-2">{tier.name}</h3>
                        <p className="text-center text-sm text-foreground/70 mb-4">
                          {tier.pointsRequired} points
                        </p>
                        
                        {tier.name === userRewards.tier && (
                          <Badge color="primary" variant="flat" className="w-full mb-4">
                            Current Tier
                          </Badge>
                        )}
                        
                        <div className="space-y-2">
                          {tier.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Icon icon="lucide:check" className="text-primary mt-1" width={16} />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab key="history" title="Points History">
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-serif italic text-xl">Points History</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-success"></span>
                      <span className="text-sm">Points Earned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-danger"></span>
                      <span className="text-sm">Points Redeemed</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {pointsHistory.map((activity) => (
                    <div key={activity.id} className="flex justify-between items-center p-4 bg-content2/30 rounded-lg">
                      <div>
                        <p className="font-medium">{activity.description}</p>
                        <p className="text-sm text-foreground/70">{activity.date}</p>
                      </div>
                      <span className={`font-medium text-lg ${activity.type === 'earned' ? 'text-success' : 'text-danger'}`}>
                        {activity.points}
                      </span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
        
        {/* How to Earn Points */}
        <div className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
              How to Earn Points
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Earn points with every purchase and activity. The more you engage, the more rewards you unlock.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "lucide:shopping-bag",
                title: "Shop Products",
                description: "Earn 1 point for every $1 spent on products",
                points: "1 point = $1"
              },
              {
                icon: "lucide:users",
                title: "Refer Friends",
                description: "Earn points when your friends make their first purchase",
                points: "100 points per referral"
              },
              {
                icon: "lucide:star",
                title: "Write Reviews",
                description: "Share your experience with products you've purchased",
                points: "10 points per review"
              },
              {
                icon: "lucide:instagram",
                title: "Social Media",
                description: "Share your purchases on social media with our hashtag",
                points: "25 points per post"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border border-white/10 h-full">
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon icon={method.icon} className="text-primary" width={32} />
                    </div>
                    <h3 className="font-serif italic text-xl mb-2">{method.title}</h3>
                    <p className="text-foreground/80 mb-4">{method.description}</p>
                    <Badge color="primary" variant="flat" className="mx-auto">
                      {method.points}
                    </Badge>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I earn points?",
                answer: "You earn points by making purchases (1 point per $1), referring friends (100 points per referral), writing product reviews (10 points per review), and sharing on social media (25 points per post)."
              },
              {
                question: "When do my points expire?",
                answer: "Points expire 12 months after they are earned if not redeemed. Redeemed rewards have their own expiration dates as indicated in the rewards catalog."
              },
              {
                question: "How do I redeem my points?",
                answer: "You can redeem your points for rewards in the Rewards Catalog section of your account. Simply select the reward you want and click 'Redeem'."
              },
              {
                question: "How do I reach the next tier?",
                answer: "Tiers are based on the number of points you've earned. Bronze starts at 0 points, Silver at 500 points, Gold at 1,000 points, and Platinum at 1,500 points."
              },
              {
                question: "Do my tier benefits expire?",
                answer: "Your tier status is valid for 12 months. To maintain your current tier, you need to earn the required points within that period."
              },
              {
                question: "Can I transfer my points to someone else?",
                answer: "Points are non-transferable and can only be redeemed by the account holder who earned them."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border border-white/10">
                  <CardBody className="p-6">
                    <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                    <p className="text-foreground/80">{faq.answer}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};