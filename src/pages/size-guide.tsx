import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react';
import { Icon } from '@iconify/react';

export const SizeGuidePage: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const brushSizes = [
    { type: "Face Brush", small: "4-5 inches", medium: "5-6 inches", large: "6-7 inches", use: "Foundation, powder, bronzer" },
    { type: "Eye Brush", small: "3-4 inches", medium: "4-5 inches", large: "5-6 inches", use: "Eyeshadow, blending, liner" },
    { type: "Lip Brush", small: "3-4 inches", medium: "4-5 inches", large: "5-6 inches", use: "Lipstick, lip liner" },
    { type: "Contour Brush", small: "4-5 inches", medium: "5-6 inches", large: "6-7 inches", use: "Contouring, highlighting" }
  ];

  const cosmeticBagSizes = [
    { size: "Small", dimensions: "6\" x 4\" x 2\"", bestFor: "Daily essentials, travel size items" },
    { size: "Medium", dimensions: "8\" x 6\" x 3\"", bestFor: "Regular makeup collection" },
    { size: "Large", dimensions: "10\" x 8\" x 4\"", bestFor: "Professional kit, full collection" },
    { size: "Extra Large", dimensions: "12\" x 10\" x 5\"", bestFor: "Professional use, multiple products" }
  ];

  const headbandSizes = [
    { size: "Small", circumference: "19-20 inches", bestFor: "Petite head size" },
    { size: "Medium", circumference: "20-21 inches", bestFor: "Average head size" },
    { size: "Large", circumference: "21-22 inches", bestFor: "Larger head size" },
    { size: "One Size", circumference: "19-22 inches", bestFor: "Adjustable, fits most" }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif italic text-3xl md:text-4xl mb-4 glow-text">
            Size Guide
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Find the perfect size for your beauty tools and accessories.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/10">
            <CardBody className="p-6">
              <Tabs 
                aria-label="Size guide categories"
                classNames={{
                  tabList: "gap-4",
                  cursor: "bg-primary",
                  tab: "text-white/70 data-[selected=true]:text-white"
                }}
              >
                <Tab
                  key="brushes"
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:paint-brush" />
                      <span>Makeup Brushes</span>
                    </div>
                  }
                >
                  <div className="mt-4">
                    <p className="text-foreground/80 mb-6">
                      Our makeup brushes come in different sizes to suit various application needs. Choose the right size based on your preferred application technique and the area of use.
                    </p>
                    <Table
                      aria-label="Makeup brush sizes"
                      classNames={{
                        base: "min-w-full",
                        table: "min-w-full",
                        thead: "bg-content2/30",
                        th: "text-white font-medium text-sm",
                        td: "text-foreground/80"
                      }}
                    >
                      <TableHeader>
                        <TableColumn>BRUSH TYPE</TableColumn>
                        <TableColumn>SMALL</TableColumn>
                        <TableColumn>MEDIUM</TableColumn>
                        <TableColumn>LARGE</TableColumn>
                        <TableColumn>BEST FOR</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {brushSizes.map((brush) => (
                          <TableRow key={brush.type}>
                            <TableCell>{brush.type}</TableCell>
                            <TableCell>{brush.small}</TableCell>
                            <TableCell>{brush.medium}</TableCell>
                            <TableCell>{brush.large}</TableCell>
                            <TableCell>{brush.use}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Tab>
                
                <Tab
                  key="bags"
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:shopping-bag" />
                      <span>Cosmetic Bags</span>
                    </div>
                  }
                >
                  <div className="mt-4">
                    <p className="text-foreground/80 mb-6">
                      Choose a cosmetic bag size based on your collection and travel needs. Consider the number of products you typically carry and how you plan to use the bag.
                    </p>
                    <Table
                      aria-label="Cosmetic bag sizes"
                      classNames={{
                        base: "min-w-full",
                        table: "min-w-full",
                        thead: "bg-content2/30",
                        th: "text-white font-medium text-sm",
                        td: "text-foreground/80"
                      }}
                    >
                      <TableHeader>
                        <TableColumn>SIZE</TableColumn>
                        <TableColumn>DIMENSIONS</TableColumn>
                        <TableColumn>BEST FOR</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {cosmeticBagSizes.map((bag) => (
                          <TableRow key={bag.size}>
                            <TableCell>{bag.size}</TableCell>
                            <TableCell>{bag.dimensions}</TableCell>
                            <TableCell>{bag.bestFor}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Tab>
                
                <Tab
                  key="headbands"
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:heart" />
                      <span>Beauty Headbands</span>
                    </div>
                  }
                >
                  <div className="mt-4">
                    <p className="text-foreground/80 mb-6">
                      Our beauty headbands are designed to keep your hair back during skincare and makeup routines. Choose the size that best fits your head circumference.
                    </p>
                    <Table
                      aria-label="Headband sizes"
                      classNames={{
                        base: "min-w-full",
                        table: "min-w-full",
                        thead: "bg-content2/30",
                        th: "text-white font-medium text-sm",
                        td: "text-foreground/80"
                      }}
                    >
                      <TableHeader>
                        <TableColumn>SIZE</TableColumn>
                        <TableColumn>CIRCUMFERENCE</TableColumn>
                        <TableColumn>BEST FOR</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {headbandSizes.map((band) => (
                          <TableRow key={band.size}>
                            <TableCell>{band.size}</TableCell>
                            <TableCell>{band.circumference}</TableCell>
                            <TableCell>{band.bestFor}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Tab>
              </Tabs>

              <div className="mt-8 p-4 bg-content2/30 rounded-lg">
                <h2 className="text-lg font-medium mb-2">Measuring Tips</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:ruler" className="text-primary mt-1" />
                    <span>Use a flexible measuring tape for accurate measurements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <span>Measure twice to ensure accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:info" className="text-primary mt-1" />
                    <span>When in doubt, choose the larger size</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}; 