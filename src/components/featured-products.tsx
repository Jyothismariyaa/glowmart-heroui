import React from 'react';
import { Card, CardBody, CardFooter, Button, Badge } from '@heroui/react';
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
  isNew?: boolean;
  isBestseller?: boolean;
}

export const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Luminous Glow Serum",
      description: "Brightening vitamin C serum for radiant skin",
      price: 58,
      rating: 4.8,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=10",
      category: "skincare",
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
      isBestseller: true
    },
    {
      id: 3,
      name: "Hydra-Boost Moisturizer",
      description: "48-hour hydration with hyaluronic acid",
      price: 45,
      rating: 4.9,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=12",
      category: "skincare"
    },
    {
      id: 4,
      name: "Silk Foundation",
      description: "Weightless coverage with skin-loving ingredients",
      price: 48,
      rating: 4.6,
      image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=13",
      category: "makeup"
    }
  ];

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
            Trending Now
          </h2>
          <p className="text-foreground-400 max-w-2xl mx-auto">
            Discover our most coveted products, curated with AI precision to match the season's beauty trends.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
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
                      />
                    )}
                    {product.isBestseller && (
                      <Badge 
                        content="BESTSELLER" 
                        color="secondary" 
                        placement="top-right"
                        className="m-2"
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
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button 
            as={Link}
            to="/products"
            color="primary" 
            variant="bordered"
            endContent={<Icon icon="lucide:arrow-right" />}
            className="font-medium"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
