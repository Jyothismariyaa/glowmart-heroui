import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Tabs, Tab, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const InfluencerLooksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample influencer data
  const influencers = [
    {
      id: 1,
      name: "Sofia Martinez",
      username: "@sofiaglow",
      followers: "2.4M",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=101",
      category: "makeup"
    },
    {
      id: 2,
      name: "Alex Kim",
      username: "@alexbeauty",
      followers: "1.8M",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=102",
      category: "skincare"
    },
    {
      id: 3,
      name: "Zara Johnson",
      username: "@zaraesthetic",
      followers: "3.2M",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=103",
      category: "makeup"
    },
    {
      id: 4,
      name: "Marcus Chen",
      username: "@marcusglow",
      followers: "1.5M",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=104",
      category: "haircare"
    },
    {
      id: 5,
      name: "Leila Patel",
      username: "@leilabeauty",
      followers: "2.1M",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=105",
      category: "skincare"
    },
    {
      id: 6,
      name: "Jordan Taylor",
      username: "@jordanglam",
      followers: "1.9M",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=106",
      category: "makeup"
    }
  ];

  // Sample looks data
  const looks = [
    {
      id: 1,
      title: "Summer Glow Look",
      influencer: "Sofia Martinez",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look1",
      likes: 45600,
      category: "makeup",
      products: [
        { id: 1, name: "Luminous Silk Foundation", price: 64.00 },
        { id: 2, name: "Starlight Highlighter", price: 42.00 },
        { id: 3, name: "Hydrating Lip Oil", price: 24.00 }
      ]
    },
    {
      id: 2,
      title: "Glass Skin Routine",
      influencer: "Alex Kim",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look2",
      likes: 38200,
      category: "skincare",
      products: [
        { id: 4, name: "Hydra-Boost Serum", price: 48.00 },
        { id: 5, name: "Overnight Recovery Mask", price: 48.00 },
        { id: 6, name: "Hydrating Face Mist", price: 28.00 }
      ]
    },
    {
      id: 3,
      title: "Bold Night Out",
      influencer: "Zara Johnson",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look3",
      likes: 52300,
      category: "makeup",
      products: [
        { id: 7, name: "Celestial Eye Palette", price: 58.00 },
        { id: 8, name: "Velvet Matte Lipstick", price: 32.00 },
        { id: 9, name: "Precision Eyeliner", price: 26.00 }
      ]
    },
    {
      id: 4,
      title: "Silky Smooth Hair",
      influencer: "Marcus Chen",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look4",
      likes: 29700,
      category: "haircare",
      products: [
        { id: 10, name: "Silk Protein Hair Mask", price: 36.00 },
        { id: 11, name: "Smoothing Hair Oil", price: 32.00 },
        { id: 12, name: "Heat Protection Spray", price: 28.00 }
      ]
    },
    {
      id: 5,
      title: "Hydration Boost",
      influencer: "Leila Patel",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look5",
      likes: 41800,
      category: "skincare",
      products: [
        { id: 13, name: "Hyaluronic Acid Serum", price: 54.00 },
        { id: 14, name: "Ceramide Moisturizer", price: 46.00 },
        { id: 15, name: "Hydrating Sheet Mask", price: 12.00 }
      ]
    },
    {
      id: 6,
      title: "Soft Glam Everyday",
      influencer: "Jordan Taylor",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look6",
      likes: 36500,
      category: "makeup",
      products: [
        { id: 16, name: "Radiant Blush", price: 36.00 },
        { id: 17, name: "Volumizing Mascara", price: 32.00 },
        { id: 18, name: "Tinted Lip Balm", price: 22.00 }
      ]
    },
    {
      id: 7,
      title: "Dewy No-Makeup Look",
      influencer: "Sofia Martinez",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look7",
      likes: 39200,
      category: "makeup",
      products: [
        { id: 19, name: "Tinted Moisturizer", price: 42.00 },
        { id: 20, name: "Cream Blush", price: 34.00 },
        { id: 21, name: "Clear Brow Gel", price: 24.00 }
      ]
    },
    {
      id: 8,
      title: "Overnight Repair",
      influencer: "Alex Kim",
      image: "https://img.heroui.chat/image/fashion?w=600&h=800&u=look8",
      likes: 33400,
      category: "skincare",
      products: [
        { id: 22, name: "Retinol Night Cream", price: 68.00 },
        { id: 23, name: "Peptide Eye Cream", price: 46.00 },
        { id: 24, name: "Niacinamide Serum", price: 38.00 }
      ]
    }
  ];

  const filteredLooks = selectedCategory === "all" 
    ? looks 
    : looks.filter(look => look.category === selectedCategory);

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
            Shop Influencer Looks
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover and recreate stunning beauty looks from your favorite influencers with the exact products they use.
          </p>
        </motion.div>
        
        {/* Featured Influencers */}
        <div className="mb-16">
          <h2 className="font-serif italic text-2xl mb-8 text-center">Featured Influencers</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {influencers.map((influencer) => (
              <motion.div
                key={influencer.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="relative mb-3 mx-auto">
                  <img 
                    src={influencer.image} 
                    alt={influencer.name}
                    className="w-24 h-24 object-cover rounded-full border-2 border-primary/30"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                    {influencer.followers}
                  </div>
                </div>
                <h3 className="font-medium text-sm">{influencer.name}</h3>
                <p className="text-xs text-foreground/70">{influencer.username}</p>
                <Button
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="mt-2 text-xs"
                >
                  Follow
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs 
            selectedKey={selectedCategory} 
            onSelectionChange={setSelectedCategory as any}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-4 justify-center",
            }}
          >
            <Tab key="all" title="All Looks" />
            <Tab key="makeup" title="Makeup" />
            <Tab key="skincare" title="Skincare" />
            <Tab key="haircare" title="Haircare" />
          </Tabs>
        </div>
        
        {/* Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLooks.map((look) => (
            <motion.div
              key={look.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card border border-white/10 h-full">
                <CardBody className="p-0">
                  <div className="relative">
                    <img 
                      src={look.image} 
                      alt={look.title}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
                      <div className="flex items-center gap-2">
                        <img 
                          src={influencers.find(inf => inf.name === look.influencer)?.image} 
                          alt={look.influencer}
                          className="w-8 h-8 object-cover rounded-full border border-white/50"
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{look.influencer}</p>
                          <p className="text-white/70 text-xs">
                            {influencers.find(inf => inf.name === look.influencer)?.username}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-white font-medium mb-1">{look.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Icon icon="lucide:heart" className="text-primary" width={14} />
                          <span className="text-white/80 text-xs">{(look.likes / 1000).toFixed(1)}k</span>
                        </div>
                        <Badge color="primary" variant="flat" size="sm" className="text-xs">
                          {look.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-sm font-medium mb-3">Shop This Look</h4>
                    <div className="space-y-3">
                      {look.products.map((product) => (
                        <div key={product.id} className="flex justify-between items-center">
                          <p className="text-sm">{product.name}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-primary">${product.price.toFixed(2)}</span>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="flat"
                              color="primary"
                              className="min-w-0 w-7 h-7"
                            >
                              <Icon icon="lucide:plus" width={14} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      as={Link}
                      to={`/influencer-looks/${look.id}`}
                      color="primary"
                      variant="flat"
                      fullWidth
                      className="mt-4"
                      endContent={<Icon icon="lucide:arrow-right" width={16} />}
                    >
                      View Full Look
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16">
          <Card className="glass-card border border-white/10 overflow-hidden">
            <CardBody className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
                    Become a GlowMart Influencer
                  </h2>
                  <p className="text-foreground/80 mb-6">
                    Join our exclusive influencer program and collaborate with us to create stunning beauty content. Gain access to early product releases, special events, and more.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      color="primary"
                      size="lg"
                      endContent={<Icon icon="lucide:arrow-right" width={16} />}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="flat"
                      size="lg"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="h-64 md:h-auto">
                  <img 
                    src="https://img.heroui.chat/image/fashion?w=800&h=600&u=influencer" 
                    alt="Become an Influencer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Virtual Try-On Promo */}
        <div className="mt-16 text-center">
          <h2 className="font-serif italic text-2xl md:text-3xl mb-4 glow-text">
            Try Before You Buy
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Use our AI-powered Virtual Try-On to see how these influencer looks would appear on you.
          </p>
          <Button
            as={Link}
            to="/virtual-try-on"
            color="primary"
            size="lg"
            className="font-medium"
            startContent={<Icon icon="lucide:camera" width={20} />}
          >
            Launch Virtual Try-On
          </Button>
        </div>
      </div>
    </div>
  );
};