import React from 'react';
import { motion } from 'framer-motion';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Checkbox, CheckboxGroup, Slider, Pagination } from '@heroui/react';
import { Icon } from '@iconify/react';
import { ProductCard } from '../components/product-card';

// Sample product data
const allProducts = [
  {
    id: '1',
    name: 'Luminous Glow Serum',
    price: 49.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=101',
    category: 'Skincare',
    rating: 4.8,
    isNew: true
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    price: 24.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=102',
    category: 'Makeup',
    rating: 4.6,
    isBestseller: true
  },
  {
    id: '3',
    name: 'Hydra-Boost Moisturizer',
    price: 38.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=103',
    category: 'Skincare',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Radiance Setting Powder',
    price: 32.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=104',
    category: 'Makeup',
    rating: 4.7,
    isNew: true
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
    id: '6',
    name: 'Volumizing Mascara',
    price: 22.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=106',
    category: 'Makeup',
    rating: 4.4,
    isBestseller: true
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
    id: '8',
    name: 'Precision Eyeliner',
    price: 19.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=108',
    category: 'Makeup',
    rating: 4.7
  },
  {
    id: '9',
    name: 'Hydrating Face Mist',
    price: 26.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=109',
    category: 'Skincare',
    rating: 4.6,
    isNew: true
  },
  {
    id: '10',
    name: 'Creamy Blush Stick',
    price: 23.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=110',
    category: 'Makeup',
    rating: 4.8
  },
  {
    id: '11',
    name: 'Vitamin C Brightening Serum',
    price: 52.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=111',
    category: 'Skincare',
    rating: 4.9,
    isBestseller: true
  },
  {
    id: '12',
    name: 'Liquid Highlighter',
    price: 27.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=112',
    category: 'Makeup',
    rating: 4.5
  }
];

export const ProductsPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(['Skincare', 'Makeup']);
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 100]);
  const [sortBy, setSortBy] = React.useState<string>('featured');
  const [currentPage, setCurrentPage] = React.useState(1);
  
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  
  // Filter and sort products
  const filteredProducts = allProducts.filter(product => 
    selectedCategories.includes(product.category) &&
    product.price >= priceRange[0] &&
    product.price <= priceRange[1]
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    // Default: featured
    return 0;
  });
  
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif italic text-white glow-text mb-6">
              Shop All Products
            </h1>
            <p className="text-xl text-white/80">
              Discover our collection of premium beauty products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <motion.div 
            className="lg:w-64 hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-white font-medium mb-4">Categories</h3>
                <CheckboxGroup
                  value={selectedCategories}
                  onValueChange={setSelectedCategories}
                  className="gap-2"
                >
                  <Checkbox value="Skincare">Skincare</Checkbox>
                  <Checkbox value="Makeup">Makeup</Checkbox>
                  <Checkbox value="Haircare">Haircare</Checkbox>
                  <Checkbox value="Fragrance">Fragrance</Checkbox>
                  <Checkbox value="Tools">Tools & Accessories</Checkbox>
                </CheckboxGroup>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-4">Price Range</h3>
                <Slider
                  label="Price"
                  step={5}
                  minValue={0}
                  maxValue={100}
                  defaultValue={[0, 100]}
                  value={priceRange}
                  onChange={setPriceRange as (value: number | number[]) => void}
                  formatOptions={{ style: "currency", currency: "USD" }}
                  className="max-w-md"
                  color="primary"
                />
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-4">Skin Type</h3>
                <CheckboxGroup defaultValue={["normal"]} className="gap-2">
                  <Checkbox value="normal">Normal</Checkbox>
                  <Checkbox value="dry">Dry</Checkbox>
                  <Checkbox value="oily">Oily</Checkbox>
                  <Checkbox value="combination">Combination</Checkbox>
                  <Checkbox value="sensitive">Sensitive</Checkbox>
                </CheckboxGroup>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-4">Concerns</h3>
                <CheckboxGroup className="gap-2">
                  <Checkbox value="aging">Anti-Aging</Checkbox>
                  <Checkbox value="acne">Acne</Checkbox>
                  <Checkbox value="dryness">Dryness</Checkbox>
                  <Checkbox value="dullness">Dullness</Checkbox>
                  <Checkbox value="uneven">Uneven Tone</Checkbox>
                </CheckboxGroup>
              </div>
              
              <Button 
                color="primary" 
                variant="flat"
                radius="full"
                className="w-full mt-4"
              >
                Reset Filters
              </Button>
            </div>
          </motion.div>
          
          {/* Products Grid */}
          <div className="flex-grow">
            {/* Mobile Filter & Sort */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <Button 
                variant="flat" 
                radius="full"
                startContent={<Icon icon="lucide:filter" />}
                onPress={() => setIsFilterOpen(!isFilterOpen)}
              >
                Filters
              </Button>
              
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="flat" 
                    radius="full"
                    endContent={<Icon icon="lucide:chevron-down" />}
                  >
                    Sort By
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Sort options"
                  selectedKeys={[sortBy]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    if (selected) setSortBy(selected);
                  }}
                  selectionMode="single"
                >
                  <DropdownItem key="featured">Featured</DropdownItem>
                  <DropdownItem key="price-asc">Price: Low to High</DropdownItem>
                  <DropdownItem key="price-desc">Price: High to Low</DropdownItem>
                  <DropdownItem key="rating">Top Rated</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            
            {/* Desktop Sort */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-white/70">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} products
              </p>
              
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="flat" 
                    radius="full"
                    endContent={<Icon icon="lucide:chevron-down" />}
                  >
                    Sort By: {
                      sortBy === 'featured' ? 'Featured' :
                      sortBy === 'price-asc' ? 'Price: Low to High' :
                      sortBy === 'price-desc' ? 'Price: High to Low' :
                      'Top Rated'
                    }
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Sort options"
                  selectedKeys={[sortBy]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    if (selected) setSortBy(selected);
                  }}
                  selectionMode="single"
                >
                  <DropdownItem key="featured">Featured</DropdownItem>
                  <DropdownItem key="price-asc">Price: Low to High</DropdownItem>
                  <DropdownItem key="price-desc">Price: High to Low</DropdownItem>
                  <DropdownItem key="rating">Top Rated</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product, index) => (
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
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination
                  total={totalPages}
                  initialPage={1}
                  page={currentPage}
                  onChange={setCurrentPage}
                  color="primary"
                  radius="full"
                  showControls
                  classNames={{
                    cursor: "bg-primary text-black",
                    item: "text-white",
                    prev: "text-white",
                    next: "text-white",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
