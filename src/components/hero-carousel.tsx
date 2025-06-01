import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card } from '@heroui/react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
}

export const HeroCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Your Glow Awaits",
      subtitle: "Discover AI-powered beauty recommendations tailored just for you",
      image: "https://img.heroui.chat/image/fashion?w=1200&h=600&u=1",
      cta: "Find Your Perfect Match",
      link: "/ai-style-quiz"
    },
    {
      id: 2,
      title: "Effortless Radiance",
      subtitle: "Luxury beauty essentials for your everyday routine",
      image: "https://img.heroui.chat/image/fashion?w=1200&h=600&u=2",
      cta: "Shop Now",
      link: "/products"
    },
    {
      id: 3,
      title: "Virtual Try-On",
      subtitle: "Test our products virtually before you buy",
      image: "https://img.heroui.chat/image/fashion?w=1200&h=600&u=3",
      cta: "Try It Now",
      link: "/products"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{ duration: 1 }}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ 
                  y: currentSlide === index ? 0 : 30, 
                  opacity: currentSlide === index ? 1 : 0 
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-xl mx-auto text-center"
              >
                <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl mb-4 text-white glow-text">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  as={Link}
                  to={slide.link}
                  color="primary"
                  size="lg"
                  radius="full"
                  className="font-medium px-8 py-6"
                >
                  {slide.cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      <Button
        isIconOnly
        variant="flat"
        radius="full"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md z-10"
        onPress={prevSlide}
      >
        <Icon icon="lucide:chevron-left" width={24} />
      </Button>
      
      <Button
        isIconOnly
        variant="flat"
        radius="full"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md z-10"
        onPress={nextSlide}
      >
        <Icon icon="lucide:chevron-right" width={24} />
      </Button>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};