import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MoodCard {
  id: string;
  title: string;
  image: string;
  color: string;
}

export const ShopByMood: React.FC = () => {
  const moods: MoodCard[] = [
    {
      id: "energized",
      title: "Energized",
      image: "https://img.heroui.chat/image/fashion?w=400&h=400&u=20",
      color: "rgba(255, 133, 153, 0.7)"
    },
    {
      id: "calm",
      title: "Calm",
      image: "https://img.heroui.chat/image/fashion?w=400&h=400&u=21",
      color: "rgba(106, 90, 205, 0.7)"
    },
    {
      id: "confident",
      title: "Confident",
      image: "https://img.heroui.chat/image/fashion?w=400&h=400&u=22",
      color: "rgba(255, 133, 153, 0.7)"
    },
    {
      id: "romantic",
      title: "Romantic",
      image: "https://img.heroui.chat/image/fashion?w=400&h=400&u=23",
      color: "rgba(106, 90, 205, 0.7)"
    },
    {
      id: "playful",
      title: "Playful",
      image: "https://img.heroui.chat/image/fashion?w=400&h=400&u=24",
      color: "rgba(255, 133, 153, 0.7)"
    },
    {
      id: "mysterious",
      title: "Mysterious",
      image: "https://img.heroui.chat/image/fashion?w=400&h=400&u=25",
      color: "rgba(106, 90, 205, 0.7)"
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
    <section className="py-16 bg-content1/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
            Shop by Mood
          </h2>
          <p className="text-foreground-400 max-w-2xl mx-auto">
            Let your emotions guide your beauty journey. Select the mood that resonates with you today.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {moods.map((mood) => (
            <motion.div key={mood.id} variants={item}>
              <Link to={`/products?mood=${mood.id}`}>
                <Card 
                  className="mood-card h-40 sm:h-48 overflow-hidden border-none"
                  isPressable
                >
                  <CardBody className="p-0 relative">
                    <img 
                      src={mood.image} 
                      alt={mood.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: mood.color }}
                    >
                      <h3 className="font-serif italic text-white text-xl md:text-2xl text-glow">
                        {mood.title}
                      </h3>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
