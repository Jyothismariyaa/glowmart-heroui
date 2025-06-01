import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Badge, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useCart } from '../contexts/CartContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'AI Style Quiz', path: '/ai-style-quiz' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <HeroNavbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="glass-card border-b border-white/10 backdrop-blur-lg"
      maxWidth="xl"
      isBordered
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          className="text-white"
        />
      </NavbarContent>

      <NavbarContent justify="start">
        <NavbarBrand as={RouterLink} to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 20C80 50 50 80 20 100C50 120 80 150 100 180C120 150 150 120 180 100C150 80 120 50 100 20Z"
                stroke="#ff9cac"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 40C85 60 60 85 40 100C60 115 85 140 100 160C115 140 140 115 160 100C140 85 115 60 100 40Z"
                stroke="#ff9cac"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 60C90 70 70 90 60 100C70 110 90 130 100 140C110 130 130 110 140 100C130 90 110 70 100 60Z"
                stroke="#ff9cac"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="font-serif italic text-xl ml-2 text-white glow-text">GlowMart</span>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link 
              as={RouterLink} 
              to={item.path} 
              color={isActive(item.path) ? "primary" : "foreground"}
              className={`font-medium ${isActive(item.path) ? 'glow-text' : ''}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            isIconOnly 
            variant="light" 
            radius="full"
            aria-label="Search"
            className="text-white"
          >
            <Icon icon="lucide:search" width={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            isIconOnly 
            variant="light" 
            radius="full"
            aria-label="User"
            as={RouterLink}
            to="/dashboard"
            className="text-white"
          >
            <Icon icon="lucide:user" width={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Badge content={totalItems} color="primary" shape="circle">
            <Button 
              isIconOnly 
              variant="light" 
              radius="full"
              aria-label="Cart"
              as={RouterLink}
              to="/cart"
              className="text-white"
            >
              <Icon icon="lucide:shopping-bag" width={20} />
            </Button>
          </Badge>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="glass-card pt-6">
        <div className="mx-4 mt-2 mb-6">
          <Input
            placeholder="Search products..."
            startContent={<Icon icon="lucide:search" className="text-white/50" />}
            radius="full"
            classNames={{
              input: "text-white",
              inputWrapper: "bg-content2 border-white/10"
            }}
          />
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={RouterLink}
              to={item.path}
              color={isActive(item.path) ? "primary" : "foreground"}
              className={`w-full font-medium text-lg ${isActive(item.path) ? 'glow-text' : ''}`}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
