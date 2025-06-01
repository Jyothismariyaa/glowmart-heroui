import React from 'react';
import { Card, CardBody, CardFooter, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Checkbox, CheckboxGroup, Slider, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

const Products: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 100]);
  const [sortBy, setSortBy] = React.useState<string>("featured");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  
  const products: Product[] = [
    {
      id: 1,
      name: "Luminous Glow Serum",
      description: "Brightening vitamin C serum for radiant skin",
      price: 58,
      rating: 4.8,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=10",
      category: "skincare",
      tags: ["vitamin c", "brightening", "anti-aging"],
      isNew: true
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      description: "Long-lasting, hydrating matte formula",
      price: 32,
      rating: 4.7,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=11",
      category: "makeup",
      tags: ["lipstick", "matte", "long-lasting"],
      isBestseller: true
    },
    {
      id: 3,
      name: "Hydra-Boost Moisturizer",
      description: "48-hour hydration with hyaluronic acid",
      price: 45,
      rating: 4.9,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=12",
      category: "skincare",
      tags: ["moisturizer", "hydrating", "hyaluronic acid"]
    },
    {
      id: 4,
      name: "Silk Foundation",
      description: "Weightless coverage with skin-loving ingredients",
      price: 48,
      rating: 4.6,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=13",
      category: "makeup",
      tags: ["foundation", "medium coverage", "natural finish"]
    },
    {
      id: 5,
      name: "Midnight Orchid Perfume",
      description: "Exotic floral scent with warm undertones",
      price: 85,
      rating: 4.9,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=14",
      category: "fragrance",
      tags: ["perfume", "floral", "long-lasting"]
    },
    {
      id: 6,
      name: "Repair & Restore Hair Mask",
      description: "Intensive treatment for damaged hair",
      price: 38,
      rating: 4.7,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=15",
      category: "haircare",
      tags: ["hair mask", "repair", "hydrating"]
    },
    {
      id: 7,
      name: "Precision Eyeliner Pen",
      description: "Ultra-fine tip for perfect winged liner",
      price: 24,
      rating: 4.5,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=16",
      category: "makeup",
      tags: ["eyeliner", "waterproof", "precision"]
    },
    {
      id: 8,
      name: "Exfoliating Facial Scrub",
      description: "Gentle exfoliation for smooth, renewed skin",
      price: 34,
      rating: 4.6,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=17",
      category: "skincare",
      tags: ["exfoliator", "scrub", "gentle"]
    },
    {
      id: 9,
      name: "Volume Boost Mascara",
      description: "Dramatic lashes with no clumping",
      price: 28,
      rating: 4.8,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=18",
      category: "makeup",
      tags: ["mascara", "volumizing", "long-lasting"],
      isNew: true
    }
  ];
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Filter by price
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // featured - no specific sort
    }
  });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <div>
      <section className="py-12 bg-content1/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
            All Products
          </h1>
          <p className="text-foreground-400">
            Discover our curated collection of luxury beauty products
          </p>
        </div>
      </section>
      
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="lg:w-1/4">
              <Card className="glassmorphism sticky top-24">
                <CardBody>
                  <h3 className="font-medium text-lg mb-4">Filters</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Categories</h4>
                    <CheckboxGroup
                      value={selectedCategories}
                      onValueChange={setSelectedCategories}
                    >
                      {categories.map((category) => (
                        <Checkbox key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <Slider
                      label="Price"
                      step={5}
                      minValue={0}
                      maxValue={100}
                      defaultValue={[0, 100]}
                      value={priceRange}
                      onChange={setPriceRange as any}
                      showSteps={false}
                      showTooltip={true}
                      tooltipValueFormatOptions={{ style: 'currency', currency: 'USD' }}
                      className="max-w-full"
                      classNames={{
                        base: "max-w-full",
                        filler: "bg-primary",
                        thumb: "bg-primary",
                      }}
                    />
                    <div className="flex justify-between mt-2 text-sm text-foreground-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Rating</h4>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                      <Icon icon="lucide:star" className="text-warning" />
                      <Icon icon="lucide:star" className="text-warning" />
                      <Icon icon="lucide:star" className="text-warning" />
                      <Icon icon="lucide:star" className="text-warning" />
                      <Icon icon="lucide:star" className="text-default-300" />
                      <span className="ml-1 text-sm">& Up</span>
                    </div>
                  </div>
                  
                  <Button color="primary" className="w-full">
                    Apply Filters
                  </Button>
                </CardBody>
              </Card>
            </div>
            
            {/* Products grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-foreground-400">
                  Showing {sortedProducts.length} products
                </p>
                
                <div className="flex items-center gap-4">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        variant="bordered" 
                        endContent={<Icon icon="lucide:chevron-down" />}
                      >
                        {sortBy === "featured" ? "Featured" :
                         sortBy === "price-low" ? "Price: Low to High" :
                         sortBy === "price-high" ? "Price: High to Low" :
                         "Highest Rated"}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      aria-label="Sort options"
                      onAction={(key) => setSortBy(key as string)}
                      selectedKeys={[sortBy]}
                      selectionMode="single"
                      className="glassmorphism-dark text-white"
                    >
                      <DropdownItem key="featured">Featured</DropdownItem>
                      <DropdownItem key="price-low">Price: Low to High</DropdownItem>
                      <DropdownItem key="price-high">Price: High to Low</DropdownItem>
                      <DropdownItem key="rating">Highest Rated</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  
                  <div className="flex border border-white/10 rounded-lg overflow-hidden">
                    <Button 
                      isIconOnly 
                      variant={viewMode === "grid" ? "solid" : "flat"} 
                      color={viewMode === "grid" ? "primary" : "default"}
                      onPress={() => setViewMode("grid")}
                      className="rounded-none"
                    >
                      <Icon icon="lucide:grid" />
                    </Button>
                    <Button 
                      isIconOnly 
                      variant={viewMode === "list" ? "solid" : "flat"} 
                      color={viewMode === "list" ? "primary" : "default"}
                      onPress={() => setViewMode("list")}
                      className="rounded-none"
                    >
                      <Icon icon="lucide:list" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
                }
                variants={container}
                initial="hidden"
                animate="show"
              >
                {sortedProducts.map((product) => (
                  <motion.div key={product.id} variants={item}>
                    {viewMode === "grid" ? (
                      <Card 
                        className="product-card glassmorphism shimmer h-full"
                        isPressable
                        as={Link}
                        to={`/products/${product.id}`}
                      >
                        <CardBody className="p-0 overflow-hidden">
                          <div className="product-image-container relative pt-[125%]">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="product-image absolute inset-0 w-full h-full object-cover"
                            />
                            {product.isNew && (
                              <Badge 
                                content="NEW" 
                                color="primary" 
                                placement="top-right"
                                className="m-2"
                                children="NEW"
                              />
                            )}
                            {product.isBestseller && (
                              <Badge 
                                content="BESTSELLER" 
                                color="secondary" 
                                placement="top-right"
                                className="m-2"
                                children="BESTSELLER"
                              />
                            )}
                          </div>
                        </CardBody>
                        <CardFooter className="flex flex-col items-start text-left">
                          <div className="flex items-center gap-1 mb-1">
                            <Icon icon="lucide:star" className="text-warning text-sm" />
                            <span className="text-xs text-foreground-400">{product.rating}</span>
                          </div>
                          <h3 className="font-medium text-foreground">{product.name}</h3>
                          <p className="text-foreground-400 text-sm mb-2">{product.description}</p>
                          <div className="flex justify-between items-center w-full">
                            <span className="font-semibold">${product.price}</span>
                            <Button 
                              isIconOnly 
                              color="primary" 
                              variant="light" 
                              radius="full" 
                              size="sm"
                              aria-label="Add to cart"
                            >
                              <Icon icon="lucide:shopping-bag" />
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ) : (
                      <Card 
                        className="product-card glassmorphism shimmer"
                        isPressable
                        as={Link}
                        to={`/products/${product.id}`}
                      >
                        <CardBody className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-1/4 relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-40 sm:h-full object-cover rounded-lg"
                            />
                            {product.isNew && (
                              <Badge 
                                content="NEW" 
                                color="primary" 
                                placement="top-right"
                                className="m-2"
                                children="NEW"
                              />
                            )}
                            {product.isBestseller && (
                              <Badge 
                                content="BESTSELLER" 
                                color="secondary" 
                                placement="top-right"
                                className="m-2"
                                children="BESTSELLER"
                              />
                            )}
                          </div>
                          <div className="sm:w-3/4 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                <Icon icon="lucide:star" className="text-warning text-sm" />
                                <span className="text-xs text-foreground-400">{product.rating}</span>
                              </div>
                              <h3 className="font-medium text-foreground text-lg mb-1">{product.name}</h3>
                              <p className="text-foreground-400 text-sm mb-2">{product.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.map((tag) => (
                                  <span 
                                    key={tag} 
                                    className="text-xs bg-content2/50 px-2 py-1 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-lg">${product.price}</span>
                              <Button 
                                color="primary" 
                                size="sm"
                                endContent={<Icon icon="lucide:shopping-bag" />}
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <Icon icon="lucide:search-x" className="text-foreground-400 text-5xl mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Products Found</h3>
                  <p className="text-foreground-400 mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button 
                    color="primary" 
                    onPress={() => {
                      setSelectedCategories([]);
                      setPriceRange([0, 100]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
              
              {sortedProducts.length > 0 && (
                <div className="flex justify-center mt-10">
                  <Button 
                    color="primary" 
                    variant="bordered"
                    endContent={<Icon icon="lucide:arrow-down" />}
                  >
                    Load More Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
