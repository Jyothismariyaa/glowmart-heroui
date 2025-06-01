import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardBody, Radio, RadioGroup, Checkbox, CheckboxGroup, Progress } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product-card';

// Sample product data for recommendations
const recommendedProducts = [
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
    id: '9',
    name: 'Hydrating Face Mist',
    price: 26.99,
    image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=109',
    category: 'Skincare',
    rating: 4.6,
    isNew: true
  }
];

// Quiz questions
const quizQuestions = [
  {
    id: 'skin-type',
    question: 'What is your skin type?',
    type: 'single',
    options: [
      { id: 'dry', label: 'Dry' },
      { id: 'oily', label: 'Oily' },
      { id: 'combination', label: 'Combination' },
      { id: 'normal', label: 'Normal' },
      { id: 'sensitive', label: 'Sensitive' }
    ]
  },
  {
    id: 'concerns',
    question: 'What are your main skin concerns?',
    type: 'multiple',
    options: [
      { id: 'acne', label: 'Acne & Blemishes' },
      { id: 'aging', label: 'Fine Lines & Wrinkles' },
      { id: 'dullness', label: 'Dullness & Uneven Tone' },
      { id: 'dryness', label: 'Dryness & Flakiness' },
      { id: 'pores', label: 'Large Pores' },
      { id: 'redness', label: 'Redness & Irritation' }
    ]
  },
  {
    id: 'makeup-style',
    question: 'What is your preferred makeup style?',
    type: 'single',
    options: [
      { id: 'natural', label: 'Natural & Minimal' },
      { id: 'glam', label: 'Full Glam' },
      { id: 'bold', label: 'Bold & Colorful' },
      { id: 'dewy', label: 'Dewy & Radiant' },
      { id: 'matte', label: 'Matte & Polished' }
    ]
  },
  {
    id: 'occasions',
    question: 'What occasions do you typically apply makeup for?',
    type: 'multiple',
    options: [
      { id: 'everyday', label: 'Everyday Wear' },
      { id: 'work', label: 'Work & Professional' },
      { id: 'date', label: 'Date Night' },
      { id: 'special', label: 'Special Events' },
      { id: 'weekend', label: 'Weekend Casual' }
    ]
  },
  {
    id: 'budget',
    question: 'What is your beauty budget preference?',
    type: 'single',
    options: [
      { id: 'affordable', label: 'Affordable' },
      { id: 'mid-range', label: 'Mid-Range' },
      { id: 'luxury', label: 'Luxury' },
      { id: 'mix', label: 'Mix of Price Points' }
    ]
  }
];

export const AiStyleQuizPage: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = React.useState(false);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  
  const totalSteps = quizQuestions.length;
  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep) / totalSteps) * 100;
  
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 3000);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };
  
  const isCurrentQuestionAnswered = () => {
    const currentAnswer = answers[currentQuestion.id];
    if (currentQuestion.type === 'single') {
      return !!currentAnswer;
    } else {
      return Array.isArray(currentAnswer) && currentAnswer.length > 0;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {!showResults ? (
          <>
            {!isAnalyzing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif italic text-white glow-text mb-6">
                      AI Style Quiz
                    </h1>
                    <p className="text-xl text-white/80">
                      Let's find your perfect beauty products and create a personalized routine.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <Progress 
                      value={progress} 
                      color="primary"
                      className="h-2"
                      aria-label="Quiz progress"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-white/70 text-sm">Question {currentStep + 1} of {totalSteps}</span>
                      <span className="text-white/70 text-sm">{Math.round(progress)}% Complete</span>
                    </div>
                  </div>
                  
                  <Card className="glass-card border-white/10">
                    <CardBody className="p-6 md:p-8">
                      <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h2 className="text-2xl font-medium text-white mb-6">{currentQuestion.question}</h2>
                        
                        {currentQuestion.type === 'single' && (
                          <RadioGroup
                            value={answers[currentQuestion.id] as string || ''}
                            onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                            className="gap-4"
                          >
                            {currentQuestion.options.map((option) => (
                              <Radio key={option.id} value={option.id} className="text-white">
                                {option.label}
                              </Radio>
                            ))}
                          </RadioGroup>
                        )}
                        
                        {currentQuestion.type === 'multiple' && (
                          <CheckboxGroup
                            value={answers[currentQuestion.id] as string[] || []}
                            onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                            className="gap-4"
                          >
                            {currentQuestion.options.map((option) => (
                              <Checkbox key={option.id} value={option.id} className="text-white">
                                {option.label}
                              </Checkbox>
                            ))}
                          </CheckboxGroup>
                        )}
                      </motion.div>
                    </CardBody>
                  </Card>
                  
                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="flat" 
                      radius="full"
                      onPress={handlePrev}
                      isDisabled={currentStep === 0}
                      startContent={<Icon icon="lucide:arrow-left" />}
                    >
                      Previous
                    </Button>
                    
                    <Button 
                      color="primary" 
                      radius="full"
                      onPress={handleNext}
                      isDisabled={!isCurrentQuestionAnswered()}
                      endContent={currentStep === totalSteps - 1 ? <Icon icon="lucide:sparkles" /> : <Icon icon="lucide:arrow-right" />}
                    >
                      {currentStep === totalSteps - 1 ? 'Get Results' : 'Next'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon icon="lucide:sparkles" className="text-primary text-3xl animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-serif italic text-white glow-text mb-4">
                    Analyzing Your Beauty Profile
                  </h2>
                  <p className="text-white/70">
                    Our AI is creating personalized recommendations based on your answers...
                  </p>
                </div>
                
                <Progress 
                  isIndeterminate 
                  color="primary"
                  className="max-w-md mx-auto"
                  aria-label="Analyzing"
                />
                
                <div className="mt-12 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <Icon icon="lucide:check-circle" className="text-primary" />
                    <span className="text-white/80">Analyzing skin type and concerns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="lucide:check-circle" className="text-primary" />
                    <span className="text-white/80">Matching with suitable ingredients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                    <span className="text-white/80">Creating your personalized routine</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <Icon icon="lucide:circle" className="text-white/50" />
                    <span className="text-white/80">Finding perfect product matches</span>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Icon icon="lucide:sparkles" className="text-primary text-3xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif italic text-white glow-text mb-6">
                  Your Beauty Profile
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Based on your answers, we've created a personalized beauty profile and product recommendations just for you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="glass-card border-white/10 col-span-1">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-4">Your Beauty Profile</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-white/70 text-sm mb-1">Skin Type</h3>
                        <p className="text-white font-medium">Combination</p>
                      </div>
                      <div>
                        <h3 className="text-white/70 text-sm mb-1">Main Concerns</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-content2 text-white/80 text-xs px-2 py-1 rounded-full">Dullness</span>
                          <span className="bg-content2 text-white/80 text-xs px-2 py-1 rounded-full">Uneven Tone</span>
                          <span className="bg-content2 text-white/80 text-xs px-2 py-1 rounded-full">Fine Lines</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white/70 text-sm mb-1">Makeup Style</h3>
                        <p className="text-white font-medium">Dewy & Radiant</p>
                      </div>
                      <div>
                        <h3 className="text-white/70 text-sm mb-1">Occasions</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-content2 text-white/80 text-xs px-2 py-1 rounded-full">Everyday</span>
                          <span className="bg-content2 text-white/80 text-xs px-2 py-1 rounded-full">Work</span>
                          <span className="bg-content2 text-white/80 text-xs px-2 py-1 rounded-full">Date Night</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white/70 text-sm mb-1">Budget</h3>
                        <p className="text-white font-medium">Mid-Range</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="glass-card border-white/10 col-span-1 md:col-span-2">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-medium text-white mb-4">Your Personalized Routine</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Icon icon="lucide:sun" className="text-primary" />
                          Morning Routine
                        </h3>
                        <ol className="space-y-3">
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">1</span>
                            <span className="text-white/80">Gentle Cleanser</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">2</span>
                            <span className="text-white/80">Vitamin C Serum</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">3</span>
                            <span className="text-white/80">Hydrating Moisturizer</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">4</span>
                            <span className="text-white/80">SPF 30+ Sunscreen</span>
                          </li>
                        </ol>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Icon icon="lucide:moon" className="text-primary" />
                          Evening Routine
                        </h3>
                        <ol className="space-y-3">
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">1</span>
                            <span className="text-white/80">Oil Cleanser</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">2</span>
                            <span className="text-white/80">Gentle Cleanser</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">3</span>
                            <span className="text-white/80">Exfoliating Toner (2-3x per week)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">4</span>
                            <span className="text-white/80">Hydrating Serum</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-content2 flex items-center justify-center text-xs text-white">5</span>
                            <span className="text-white/80">Night Cream</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-serif italic text-white glow-text mb-6">
                  Recommended Products
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recommendedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-serif italic text-white glow-text mb-4">
                  Ready to Elevate Your Beauty Routine?
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Save your personalized recommendations and explore products tailored to your unique beauty profile.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    as={Link}
                    to="/products"
                    color="primary" 
                    size="lg" 
                    radius="full"
                    className="font-medium"
                    startContent={<Icon icon="lucide:shopping-bag" />}
                  >
                    Shop Recommendations
                  </Button>
                  
                  <Button 
                    variant="bordered" 
                    size="lg" 
                    radius="full"
                    className="text-white border-white/30 font-medium"
                    startContent={<Icon icon="lucide:save" />}
                  >
                    Save to Profile
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
