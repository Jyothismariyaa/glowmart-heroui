import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Tabs, Tab, Card, CardBody, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  tags: string[];
  ingredients: string;
  howToUse: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  
  // Mock product data
  const product: Product = {
    id: parseInt(id || "1"),
    name: "Luminous Glow Serum",
    description: "Brightening vitamin C serum for radiant skin",
    longDescription: "Transform your skin with our powerful Luminous Glow Serum. Formulated with 15% stabilized vitamin C, hyaluronic acid, and niacinamide, this lightweight serum brightens, hydrates, and evens skin tone while reducing the appearance of fine lines and dark spots. Suitable for all skin types, this daily treatment delivers a radiant, youthful complexion.",
    price: 58,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://img.heroui.chat/image/fashion?w=600&h=800&u=10",
      "https://img.heroui.chat/image/fashion?w=600&h=800&u=11",
      "https://img.heroui.chat/image/fashion?w=600&h=800&u=12",
      "https://img.heroui.chat/image/fashion?w=600&h=800&u=13"
    ],
    category: "skincare",
    tags: ["vitamin c", "brightening", "anti-aging"],
    ingredients: "Water, Ascorbic Acid (Vitamin C), Glycerin, Propanediol, Niacinamide, Sodium Hyaluronate, Panthenol, Ferulic Acid, Tocopherol (Vitamin E), Sodium Ascorbyl Phosphate, Citrus Aurantium Dulcis (Orange) Oil, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse: "Apply 3-4 drops to clean, dry skin in the morning. Gently pat into face, neck, and décolletage. Follow with moisturizer and sunscreen. For sensitive skin, start with every other day and gradually increase to daily use.",
    isNew: true
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div>
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <motion.img 
                key={selectedImage}
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {product.isNew && (
                <Badge 
                  content="NEW" 
                  color="primary" 
                  placement="top-right"
                  className="m-4"
                />
              )}
              {product.isBestseller && (
                <Badge 
                  content="BESTSELLER" 
                  color="secondary" 
                  placement="top-right"
                  className="m-4"
                />
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <div className="mb-6">
              <h1 className="font-serif italic text-3xl text-primary text-glow mb-2">
                {product.name}
              </h1>
              <p className="text-foreground-400 text-lg mb-4">
                {product.description}
              </p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      icon="lucide:star" 
                      className={i < Math.floor(product.rating) ? "text-warning" : "text-default-300"} 
                    />
                  ))}
                </div>
                <span className="text-foreground-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <p className="text-3xl font-semibold mb-6">
                ${product.price}
              </p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-foreground-400">
                  {product.longDescription}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-content2/50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-2 hover:bg-content2/50 transition-colors"
                  >
                    <Icon icon="lucide:minus" />
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-2 hover:bg-content2/50 transition-colors"
                  >
                    <Icon icon="lucide:plus" />
                  </button>
                </div>
                
                <Button 
                  color="primary" 
                  size="lg"
                  className="flex-grow"
                  endContent={<Icon icon="lucide:shopping-bag" />}
                >
                  Add to Cart
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="bordered" 
                  color="primary"
                  startContent={<Icon icon="lucide:heart" />}
                  className="flex-grow"
                >
                  Add to Wishlist
                </Button>
                
                <Button 
                  variant="bordered" 
                  color="primary"
                  startContent={<Icon icon="lucide:camera" />}
                  className="flex-grow"
                >
                  Virtual Try-On
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <Tabs 
            aria-label="Product information" 
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
            }}
          >
            <Tab 
              key="details" 
              title="Product Details"
            >
              <Card className="glassmorphism mt-6">
                <CardBody className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-serif italic text-xl mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span>Brightens and evens skin tone</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span>Reduces appearance of fine lines and wrinkles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span>Protects against environmental damage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span>Hydrates and plumps skin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span>Improves overall skin texture and radiance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-serif italic text-xl mb-4">Product Details</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Size</h4>
                          <p className="text-foreground-400">30ml / 1.0 fl oz</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Skin Type</h4>
                          <p className="text-foreground-400">All skin types</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Concerns</h4>
                          <p className="text-foreground-400">Dullness, Uneven texture, Fine lines, Dark spots</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Formulation</h4>
                          <p className="text-foreground-400">Lightweight serum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            
            <Tab 
              key="ingredients" 
              title="Ingredients"
            >
              <Card className="glassmorphism mt-6">
                <CardBody className="p-6">
                  <h3 className="font-serif italic text-xl mb-4">Full Ingredients List</h3>
                  <p className="text-foreground-400 mb-6">
                    {product.ingredients}
                  </p>
                  
                  <h3 className="font-serif italic text-xl mb-4">Key Ingredients</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glassmorphism-dark p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Vitamin C (15%)</h4>
                      <p className="text-foreground-400 text-sm">
                        A powerful antioxidant that brightens skin, reduces hyperpigmentation, and boosts collagen production.
                      </p>
                    </div>
                    <div className="glassmorphism-dark p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Hyaluronic Acid</h4>
                      <p className="text-foreground-400 text-sm">
                        Attracts and retains moisture, providing deep hydration and plumping the skin.
                      </p>
                    </div>
                    <div className="glassmorphism-dark p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Niacinamide</h4>
                      <p className="text-foreground-400 text-sm">
                        Improves skin texture, minimizes pores, and strengthens the skin barrier.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            
            <Tab 
              key="how-to-use" 
              title="How to Use"
            >
              <Card className="glassmorphism mt-6">
                <CardBody className="p-6">
                  <h3 className="font-serif italic text-xl mb-4">Application Instructions</h3>
                  <p className="text-foreground-400 mb-6">
                    {product.howToUse}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                        <span className="font-medium">1</span>
                      </div>
                      <p className="text-sm">Cleanse face thoroughly</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                        <span className="font-medium">2</span>
                      </div>
                      <p className="text-sm">Apply 3-4 drops to fingertips</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                        <span className="font-medium">3</span>
                      </div>
                      <p className="text-sm">Gently pat into skin</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                        <span className="font-medium">4</span>
                      </div>
                      <p className="text-sm">Follow with moisturizer</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium mb-2">Pro Tips</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="lucide:sparkles" className="text-primary mt-1" />
                        <span>For enhanced results, use after our Gentle Exfoliating Toner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="lucide:sparkles" className="text-primary mt-1" />
                        <span>Always follow with sunscreen during daytime use</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="lucide:sparkles" className="text-primary mt-1" />
                        <span>Store in a cool, dark place to preserve potency</span>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            
            <Tab 
              key="reviews" 
              title="Reviews"
            >
              <Card className="glassmorphism mt-6">
                <CardBody className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="text-center">
                        <h3 className="text-5xl font-semibold mb-2">{product.rating}</h3>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              icon="lucide:star" 
                              className={i < Math.floor(product.rating) ? "text-warning" : "text-default-300"} 
                            />
                          ))}
                        </div>
                        <p className="text-foreground-400 mb-6">
                          Based on {product.reviewCount} reviews
                        </p>
                        <Button color="primary">
                          Write a Review
                        </Button>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="space-y-6">
                        {[
                          {
                            name: "Sarah J.",
                            rating: 5,
                            date: "2 weeks ago",
                            review: "This serum has completely transformed my skin! I've been using it for a month and my dark spots have faded significantly. My skin looks brighter and more even-toned. Definitely worth the price!"
                          },
                          {
                            name: "Michael T.",
                            rating: 4,
                            date: "1 month ago",
                            review: "Great product overall. I noticed improvements in my skin's texture and brightness after about two weeks of use. The only reason I'm giving 4 stars instead of 5 is because of the slight citrus scent, which I'm not a fan of."
                          },
                          {
                            name: "Aisha P.",
                            rating: 5,
                            date: "2 months ago",
                            review: "I've tried many vitamin C serums and this is by far the best. It doesn't oxidize quickly like others I've used, and it actually delivers results. My skin looks more radiant and my fine lines are less noticeable."
                          }
                        ].map((review, index) => (
                          <div key={index} className="pb-4 border-b border-white/5">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">{review.name}</h4>
                              <span className="text-foreground-400 text-sm">{review.date}</span>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Icon 
                                  key={i} 
                                  icon="lucide:star" 
                                  className={i < review.rating ? "text-warning text-sm" : "text-default-300 text-sm"} 
                                />
                              ))}
                            </div>
                            <p className="text-foreground-400">{review.review}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 text-center">
                        <Button variant="bordered" color="primary">
                          Load More Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        
        <section className="mt-16">
          <h2 className="font-serif italic text-2xl text-primary text-glow mb-8 text-center">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card 
                key={i}
                className="product-card glassmorphism shimmer"
                isPressable
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="product-image-container relative pt-[125%]">
                    <img 
                      src={`https://img.heroui.chat/image/fashion?w=300&h=400&u=${20 + i}`} 
                      alt={`Related product ${i+1}`}
                      className="product-image absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </CardBody>
                <CardBody className="py-2 px-3">
                  <h3 className="font-medium text-sm truncate">Related Product {i+1}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">${(Math.floor(Math.random() * 50) + 20)}</span>
                    <Button 
                      isIconOnly 
                      color="primary" 
                      variant="light" 
                      radius="full" 
                      size="sm"
                      aria-label="Add to cart"
                    >
                      <Icon icon="lucide:plus" className="text-sm" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
