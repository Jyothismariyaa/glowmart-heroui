import React from 'react';
import { Button, Card, CardBody, Progress, Radio, RadioGroup, Checkbox, CheckboxGroup } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'image-single' | 'image-multiple';
  options: {
    id: string;
    text: string;
    image?: string;
  }[];
}

const StyleQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = React.useState(false);
  
  const questions: QuizQuestion[] = [
    {
      id: 'skin-type',
      question: 'How would you describe your skin type?',
      type: 'single',
      options: [
        { id: 'dry', text: 'Dry - Often feels tight or flaky' },
        { id: 'oily', text: 'Oily - Shiny, especially in T-zone' },
        { id: 'combination', text: 'Combination - Oily T-zone, dry cheeks' },
        { id: 'normal', text: 'Normal - Neither too dry nor too oily' },
        { id: 'sensitive', text: 'Sensitive - Easily irritated or reactive' }
      ]
    },
    {
      id: 'skin-concerns',
      question: 'What are your main skin concerns? (Select up to 3)',
      type: 'multiple',
      options: [
        { id: 'acne', text: 'Acne or breakouts' },
        { id: 'aging', text: 'Fine lines and wrinkles' },
        { id: 'dark-spots', text: 'Dark spots or hyperpigmentation' },
        { id: 'dullness', text: 'Dullness or uneven tone' },
        { id: 'redness', text: 'Redness or irritation' },
        { id: 'pores', text: 'Large pores' },
        { id: 'texture', text: 'Rough texture' }
      ]
    },
    {
      id: 'makeup-style',
      question: 'Which makeup look do you prefer?',
      type: 'image-single',
      options: [
        { id: 'natural', text: 'Natural/No-makeup look', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=30' },
        { id: 'glam', text: 'Full glam', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=31' },
        { id: 'bold', text: 'Bold and colorful', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=32' },
        { id: 'classic', text: 'Classic and timeless', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=33' }
      ]
    },
    {
      id: 'occasions',
      question: 'What occasions do you typically wear makeup for?',
      type: 'multiple',
      options: [
        { id: 'everyday', text: 'Everyday/Work' },
        { id: 'special', text: 'Special occasions' },
        { id: 'date', text: 'Date nights' },
        { id: 'weekend', text: 'Weekend outings' },
        { id: 'rarely', text: 'I rarely wear makeup' }
      ]
    },
    {
      id: 'fragrance',
      question: 'Which fragrance families appeal to you most?',
      type: 'image-multiple',
      options: [
        { id: 'floral', text: 'Floral', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=40' },
        { id: 'woody', text: 'Woody', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=41' },
        { id: 'oriental', text: 'Oriental/Spicy', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=42' },
        { id: 'fresh', text: 'Fresh/Citrus', image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=43' }
      ]
    }
  ];
  
  const handleSingleSelect = (value: string) => {
    setAnswers({
      ...answers,
      [questions[currentStep].id]: value
    });
  };
  
  const handleMultipleSelect = (values: string[]) => {
    setAnswers({
      ...answers,
      [questions[currentStep].id]: values
    });
  };
  
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isNextDisabled = () => {
    const currentQuestionId = questions[currentStep].id;
    const answer = answers[currentQuestionId];
    
    if (!answer) return true;
    
    if (Array.isArray(answer)) {
      return answer.length === 0;
    }
    
    return false;
  };
  
  const progressPercentage = ((currentStep + 1) / questions.length) * 100;
  
  const currentQuestion = questions[currentStep];
  
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'single':
        return (
          <RadioGroup
            value={answers[currentQuestion.id] as string || ''}
            onValueChange={handleSingleSelect}
            className="mt-6 space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <Radio key={option.id} value={option.id}>
                {option.text}
              </Radio>
            ))}
          </RadioGroup>
        );
        
      case 'multiple':
        return (
          <CheckboxGroup
            value={answers[currentQuestion.id] as string[] || []}
            onValueChange={handleMultipleSelect}
            className="mt-6 space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <Checkbox key={option.id} value={option.id}>
                {option.text}
              </Checkbox>
            ))}
          </CheckboxGroup>
        );
        
      case 'image-single':
        return (
          <RadioGroup
            value={answers[currentQuestion.id] as string || ''}
            onValueChange={handleSingleSelect}
            orientation="horizontal"
            className="mt-6 grid grid-cols-2 gap-4"
          >
            {currentQuestion.options.map((option) => (
              <Radio
                key={option.id}
                value={option.id}
                className="m-0 p-0"
                classNames={{
                  base: "m-0",
                  wrapper: "hidden",
                }}
              >
                <Card
                  isPressable
                  className={`overflow-hidden border-2 transition-all ${
                    (answers[currentQuestion.id] as string) === option.id
                      ? 'border-primary box-glow'
                      : 'border-transparent'
                  }`}
                >
                  <CardBody className="p-0">
                    <div className="aspect-square">
                      <img
                        src={option.image}
                        alt={option.text}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p>{option.text}</p>
                    </div>
                  </CardBody>
                </Card>
              </Radio>
            ))}
          </RadioGroup>
        );
        
      case 'image-multiple':
        return (
          <CheckboxGroup
            value={answers[currentQuestion.id] as string[] || []}
            onValueChange={handleMultipleSelect}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            {currentQuestion.options.map((option) => (
              <Checkbox
                key={option.id}
                value={option.id}
                className="m-0 p-0"
                classNames={{
                  base: "m-0",
                  wrapper: "hidden",
                }}
              >
                <Card
                  isPressable
                  className={`overflow-hidden border-2 transition-all ${
                    (answers[currentQuestion.id] as string[])?.includes(option.id)
                      ? 'border-primary box-glow'
                      : 'border-transparent'
                  }`}
                >
                  <CardBody className="p-0">
                    <div className="aspect-square">
                      <img
                        src={option.image}
                        alt={option.text}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p>{option.text}</p>
                    </div>
                  </CardBody>
                </Card>
              </Checkbox>
            ))}
          </CheckboxGroup>
        );
        
      default:
        return null;
    }
  };
  
  const renderResults = () => {
    return (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 150 150" className="mx-auto">
            <motion.path
              d="M75 30C60 45 45 60 45 75C45 90 60 105 75 120C90 105 105 90 105 75C105 60 90 45 75 30Z"
              stroke="#ff8599"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M45 75C60 60 90 60 105 75"
              stroke="#ff8599"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M75 30C60 60 60 90 75 120"
              stroke="#ff8599"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>
        </motion.div>
        
        <motion.h2
          className="font-serif italic text-3xl text-primary text-glow mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your Beauty Profile is Ready!
        </motion.h2>
        
        <motion.p
          className="text-foreground-400 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Our AI has analyzed your preferences and created a personalized beauty profile just for you. Discover products tailored to your unique style and needs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button 
            color="primary" 
            size="lg"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View My Recommendations
          </Button>
        </motion.div>
      </div>
    );
  };
  
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-serif italic text-3xl md:text-4xl text-primary text-glow mb-4">
            Discover Your Perfect Beauty Match
          </h1>
          <p className="text-foreground-400">
            Answer a few questions to get personalized product recommendations
          </p>
        </div>
        
        <Card className="glassmorphism">
          <CardBody className="p-6">
            {!isComplete ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(progressPercentage)}% Complete</span>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    color="primary"
                    className="h-2"
                  />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-medium mb-2">{currentQuestion.question}</h2>
                    {renderQuestion()}
                  </motion.div>
                </AnimatePresence>
                
                <div className="flex justify-between mt-8">
                  <Button
                    variant="bordered"
                    onPress={handlePrevious}
                    isDisabled={currentStep === 0}
                    startContent={<Icon icon="lucide:arrow-left" />}
                  >
                    Previous
                  </Button>
                  
                  <Button
                    color="primary"
                    onPress={handleNext}
                    isDisabled={isNextDisabled()}
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    {currentStep === questions.length - 1 ? 'Complete' : 'Next'}
                  </Button>
                </div>
              </>
            ) : (
              renderResults()
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default StyleQuiz;
