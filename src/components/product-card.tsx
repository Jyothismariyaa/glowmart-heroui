import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

type Props = ProductProps & RouteComponentProps;

const ProductCardBase: React.FC<Props> = ({
  id,
  name,
  price,
  image,
  category,
  rating,
  isNew,
  isBestseller,
  history
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    addToCart({ id, name, price, image, category });
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    history.push(`/products/${id}`);
  };

  const handleCardClick = () => {
    history.push(`/products/${id}`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    // TODO: Implement wishlist functionality
    console.log('Adding to wishlist:', id);
  };
  
  return (
    <motion.div
      className="tilt-card"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card 
        className="glass-card border-white/10 overflow-hidden h-full cursor-pointer"
        isHoverable
        isPressable
        onClick={handleCardClick}
      >
        <CardBody className="p-0 overflow-hidden">
          <div className="relative">
            {/* Product Image */}
            <img 
              src={image} 
              alt={name}
              className="w-full aspect-square object-cover transition-transform duration-700"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            
            {/* Quick Actions */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 20 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  color="primary"
                  className="shadow-lg flex-1"
                  onClick={handleAddToCart}
                  startContent={<Icon icon="lucide:shopping-cart" width={16} />}
                >
                  Add to Cart
                </Button>
                <Button 
                  isIconOnly 
                  size="sm" 
                  variant="flat" 
                  color="primary" 
                  radius="full"
                  className="bg-black/50 backdrop-blur-sm"
                  onClick={handleWishlist}
                >
                  <Icon icon="lucide:heart" width={16} />
                </Button>
              </div>
              <Button
                size="sm"
                variant="flat"
                
                className="w-full bg-white/70 text-black backdrop-blur-sm"
                onClick={handleViewDetails}
                endContent={<Icon icon="lucide:arrow-right" width={16} />}
              >
                View Details
              </Button>
            </motion.div>
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {isNew && (
                <Chip color="danger" variant="flat" className="px-2 py-1 text-xs font-medium">
                  NEW
                </Chip>
              )}
              {isBestseller && (
                <Chip color="danger" variant="flat" className="px-2 py-1 text-xs font-medium">
                  BESTSELLER
                </Chip>
              )}
            </div>
          </div>
        </CardBody>
        
        <CardFooter className="flex flex-col items-start text-left gap-1">
          <p className="text-white/60 text-xs uppercase">{category}</p>
          <h3 className="text-white font-medium">{name}</h3>
          <div className="flex justify-between w-full items-center">
            <p className="text-primary font-medium">${price.toFixed(2)}</p>
            <div className="flex items-center">
              <Icon icon="lucide:star" className="text-primary w-3 h-3" />
              <span className="text-white/70 text-xs ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
      
      {/* Shine effect overlay */}
      {/* <div className="tilt-card-shine"></div> */}
    </motion.div>
  );
};

export const ProductCard = withRouter(ProductCardBase);
