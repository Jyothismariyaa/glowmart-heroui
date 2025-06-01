import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Tabs, Tab, Card, CardBody, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { ProductCard } from '../components/product-card';
import { useCart } from '../contexts/CartContext';

// Sample product data
const product = {
  id: '1',
  name: 'Luminous Glow Serum',
  price: 49.99,
  images: [
    'https://img.heroui.chat/image/fashion?w=600&h=600&u=101',
    'https://img.heroui.chat/image/fashion?w=600&h=600&u=102',
    'https://img.heroui.chat/image/fashion?w=600&h=600&u=103',
    'https://img.heroui.chat/image/fashion?w=600&h=600&u=104'
  ],
  category: 'Skincare',
  rating: 4.8,
  reviewCount: 124,
  description: 'A lightweight, fast-absorbing serum that delivers an instant glow while improving skin texture and tone over time. Formulated with a powerful blend of vitamin C, hyaluronic acid, and niacinamide.',
  benefits: [
    'Brightens and evens skin tone',
    'Hydrates and plumps skin',
    'Reduces appearance of fine lines',
    'Improves skin texture and radiance'
  ],
  ingredients: 'Water, Propanediol, Glycerin, Niacinamide, Sodium Hyaluronate, Ascorbic Acid (Vitamin C), Panthenol, Allantoin, Adenosine, Dipotassium Glycyrrhizate, Hydroxyethylcellulose, Xanthan Gum, Ethylhexylglycerin, Disodium EDTA, Phenoxyethanol',
  howToUse: 'Apply 3-4 drops to clean, dry skin in the morning and evening. Gently pat into skin, avoiding the eye area. Follow with moisturizer.',
  isNew: true,
  inStock: true,
  size: '30ml',
  skinType: ['All Skin Types', 'Dry', 'Combination'],
  concerns: ['Dullness', 'Uneven Texture', 'Fine Lines']
};

// Sample related products
const relatedProducts = [
  {
    id: '3',
    name: 'Hydra-Boost Moisturizer',
    price: 38.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=103',
    category: 'Skincare',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Overnight Repair Mask',
    price: 45.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=105',
    category: 'Skincare',
    rating: 4.5
  },
  {
    id: '7',
    name: 'Exfoliating Facial Scrub',
    price: 28.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=107',
    category: 'Skincare',
    rating: 4.3
  },
  {
    id: '9',
    name: 'Hydrating Face Mist',
    price: 26.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=109',
    category: 'Skincare',
    rating: 4.6,
    isNew: true
  }
];

// Sample reviews
const reviews = [
  {
    id: 1,
    user: 'Sarah M.',
    avatar: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=20',
    rating: 5,
    date: '2024-05-15',
    title: 'Amazing results!',
    content: 'I\'ve been using this serum for a month and my skin looks so much brighter and more even. The texture is perfect - not too sticky and absorbs quickly. Will definitely repurchase!',
    helpful: 24,
    verified: true
  },
  {
    id: 2,
    user: 'Michael L.',
    avatar: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=21',
    rating: 4,
    date: '2024-05-10',
    title: 'Good but pricey',
    content: 'This serum definitely makes my skin look more radiant and hydrated. I took off one star because of the price, but the results are worth it. A little goes a long way.',
    helpful: 12,
    verified: true
  },
  {
    id: 3,
    user: 'Jessica T.',
    avatar: 'https://img.heroui.chat/image/avatar?w=200&h=200&u=22',
    rating: 5,
    date: '2024-05-02',
    title: 'Holy grail product!',
    content: 'I\'ve tried so many serums and this is by far the best. It\'s helped with my hyperpigmentation and gives my skin a beautiful glow. The packaging is also gorgeous and feels luxurious.',
    helpful: 31,
    verified: true
  }
];

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [isVirtualTryOn, setIsVirtualTryOn] = React.useState(false);
  const { addToCart } = useCart();
  
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category
      });
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center text-sm">
            <Link to="/" className="text-white/60 hover:text-primary">Home</Link>
            <Icon icon="lucide:chevron-right" className="mx-2 text-white/40" />
            <Link to="/products" className="text-white/60 hover:text-primary">Products</Link>
            <Icon icon="lucide:chevron-right" className="mx-2 text-white/40" />
            <Link to={`/products?category=${product.category}`} className="text-white/60 hover:text-primary">{product.category}</Link>
            <Icon icon="lucide:chevron-right" className="mx-2 text-white/40" />
            <span className="text-white/80">{product.name}</span>
          </nav>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                {isVirtualTryOn ? (
                  <div className="relative w-full h-full bg-black/30 flex items-center justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://img.heroui.chat/image/avatar?w=600&h=600&u=30" 
                        alt="Virtual try-on" 
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <Icon icon="lucide:camera" className="text-white text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-white mb-2">Virtual Try-On</h3>
                      <p className="text-white/70 mb-4">See how this product looks on you</p>
                      <Button 
                        color="primary" 
                        radius="full"
                        startContent={<Icon icon="lucide:camera" />}
                      >
                        Enable Camera
                      </Button>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsVirtualTryOn(false);
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                <button
                  className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all bg-content2 flex items-center justify-center ${
                    isVirtualTryOn ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setIsVirtualTryOn(true)}
                >
                  <Icon icon="lucide:camera" className="text-primary" />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Basic Info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-sm">{product.category}</span>
                {product.isNew && (
                  <Badge color="primary" variant="flat" className="px-2 py-1 text-xs font-medium">
                    NEW
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif italic text-white glow-text mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      icon="lucide:star" 
                      className={i < Math.floor(product.rating) ? "text-primary" : "text-white/30"} 
                      width={16}
                    />
                  ))}
                  <span className="ml-2 text-white/70">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
              </div>
              
              <p className="text-2xl text-white font-medium mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-white/70 mb-6">{product.description}</p>
              
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="lucide:check-circle" className="text-primary" />
                <span className="text-white/80 text-sm">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Icon icon="lucide:truck" className="text-primary" />
                <span className="text-white/80 text-sm">
                  Free shipping on orders over $50
                </span>
              </div>
            </div>
            
            {/* Size */}
            <div className="mb-6">
              <h3 className="text-white font-medium mb-2">Size: {product.size}</h3>
              <div className="flex gap-2">
                <Button 
                  variant="light" 
                  radius="full"
                  className="border-2 border-primary"
                >
                  {product.size}
                </Button>
                <Button 
                  variant="light" 
                  radius="full"
                >
                  50ml
                </Button>
                <Button 
                  variant="light" 
                  radius="full"
                >
                  100ml
                </Button>
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-white font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button 
                  isIconOnly 
                  variant="light" 
                  radius="full"
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Icon icon="lucide:minus" />
                </Button>
                <span className="mx-4 text-white text-lg w-8 text-center">{quantity}</span>
                <Button 
                  isIconOnly 
                  variant="light" 
                  radius="full"
                  onPress={() => setQuantity(quantity + 1)}
                >
                  <Icon icon="lucide:plus" />
                </Button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                color="primary" 
                radius="full"
                size="lg"
                className="flex-grow font-medium"
                startContent={<Icon icon="lucide:shopping-bag" />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="light" 
                radius="full"
                size="lg"
                className="flex-grow"
                startContent={<Icon icon="lucide:heart" />}
              >
                Add to Wishlist
              </Button>
            </div>
            
            {/* AI Recommendations */}
            <div className="glass-card border border-white/10 p-4 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:sparkles" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">AI Beauty Assistant</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Based on your skin profile, this product is a great match for your combination skin and concerns about uneven texture.
                  </p>
                  <Button 
                    color="primary" 
                    variant="light" 
                    radius="full"
                    size="sm"
                    endContent={<Icon icon="lucide:arrow-right" width={16} />}
                  >
                    Get Personalized Routine
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="text-white/70">Share:</span>
              <Button isIconOnly variant="light" radius="full" size="sm">
                <Icon icon="lucide:instagram" />
              </Button>
              <Button isIconOnly variant="light" radius="full" size="sm">
                <Icon icon="lucide:facebook" />
              </Button>
              <Button isIconOnly variant="light" radius="full" size="sm">
                <Icon icon="lucide:twitter" />
              </Button>
              <Button isIconOnly variant="light" radius="full" size="sm">
                <Icon icon="lucide:link" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs 
            aria-label="Product details" 
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6",
              cursor: "bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary font-medium"
            }}
          >
            <Tab key="details" title="Product Details">
              <Card className="glass-card border-white/10">
                <CardBody className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon icon="lucide:check" className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-white/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-medium text-white mt-8 mb-4">How to Use</h3>
                      <p className="text-white/80">{product.howToUse}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Key Information</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white/70 mb-1">Size</h4>
                          <p className="text-white">{product.size}</p>
                        </div>
                        <div>
                          <h4 className="text-white/70 mb-1">Skin Type</h4>
                          <p className="text-white">{product.skinType.join(', ')}</p>
                        </div>
                        <div>
                          <h4 className="text-white/70 mb-1">Concerns</h4>
                          <p className="text-white">{product.concerns.join(', ')}</p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-medium text-white mt-8 mb-4">Ingredients</h3>
                      <p className="text-white/80">{product.ingredients}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            
            <Tab key="reviews" title={`Reviews (${product.reviewCount})`}>
              <Card className="glass-card border-white/10">
                <CardBody className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="text-center md:text-left">
                        <h3 className="text-3xl font-medium text-white mb-2">{product.rating.toFixed(1)}</h3>
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              icon="lucide:star" 
                              className={i < Math.floor(product.rating) ? "text-primary" : "text-white/30"} 
                            />
                          ))}
                        </div>
                        <p className="text-white/70 mb-6">{product.reviewCount} reviews</p>
                        
                        <Button 
                          color="primary" 
                          radius="full"
                          className="font-medium"
                        >
                          Write a Review
                        </Button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-white/10 pb-6 last:border-0">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <Avatar src={review.avatar} size="sm" />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-white font-medium">{review.user}</span>
                                    {review.verified && (
                                      <Badge color="primary" variant="flat" size="sm">
                                        Verified
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-white/50 text-xs">{new Date(review.date).toLocaleDateString()}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Icon 
                                    key={i} 
                                    icon="lucide:star" 
                                    width={14}
                                    className={i < review.rating ? "text-primary" : "text-white/30"} 
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <h4 className="text-white font-medium mb-2">{review.title}</h4>
                            <p className="text-white/70 mb-3">{review.content}</p>
                            
                            <div className="flex items-center gap-4">
                              <Button 
                                variant="light" 
                                size="sm"
                                startContent={<Icon icon="lucide:thumbs-up" width={14} />}
                              >
                                Helpful ({review.helpful})
                              </Button>
                              <Button 
                                variant="light" 
                                size="sm"
                              >
                                Report
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <Button 
                          variant="flat" 
                          radius="full"
                        >
                          Load More Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            
            <Tab key="shipping" title="Shipping & Returns">
              <Card className="glass-card border-white/10">
                <CardBody className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Shipping Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Icon icon="lucide:truck" className="text-primary mt-1" />
                          <div>
                            <h4 className="text-white font-medium">Free Standard Shipping</h4>
                            <p className="text-white/70">Orders over $50 qualify for free shipping. Delivery within 5-7 business days.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon icon="lucide:zap" className="text-primary mt-1" />
                          <div>
                            <h4 className="text-white font-medium">Express Shipping</h4>
                            <p className="text-white/70">$12.99 for delivery within 2-3 business days.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                          <div>
                            <h4 className="text-white font-medium">International Shipping</h4>
                            <p className="text-white/70">Available to select countries. Shipping rates and delivery times vary.</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button
                            as={Link}
                            to="/store-check"
                            variant="flat"
                            color="primary"
                            startContent={<Icon icon="lucide:store" />}
                            className="w-full mb-2"
                          >
                            Check Store Availability
                          </Button>
                          <Button
                            as={Link}
                            to="/size-guide"
                            variant="flat"
                            startContent={<Icon icon="lucide:ruler" />}
                            className="w-full"
                          >
                            View Size Guide
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Returns & Exchanges</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Icon icon="lucide:refresh-ccw" className="text-primary mt-1" />
                          <div>
                            <h4 className="text-white font-medium">30-Day Returns</h4>
                            <p className="text-white/70">We offer a 30-day return policy for unused items in original packaging.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon icon="lucide:shield" className="text-primary mt-1" />
                          <div>
                            <h4 className="text-white font-medium">Satisfaction Guarantee</h4>
                            <p className="text-white/70">If you're not completely satisfied with your purchase, we'll make it right.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon icon="lucide:help-circle" className="text-primary mt-1" />
                          <div>
                            <h4 className="text-white font-medium">Need Help?</h4>
                            <p className="text-white/70">Contact our customer service team for assistance with returns or exchanges.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif italic text-white glow-text mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Recently Viewed */}
        <div>
          <h2 className="text-2xl font-serif italic text-white glow-text mb-8">Recently Viewed</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).reverse().map((product, index) => (
              <motion.div
                key={`recent-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
