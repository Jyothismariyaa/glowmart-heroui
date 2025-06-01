import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card, CardBody, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API call using the id
  const post = {
    id: Number(id),
    title: "5 Summer Skincare Tips for Radiant Skin",
    content: `
      <p>Summer brings sunshine, warmth, and outdoor activities, but it can also present challenges for your skin. The combination of heat, humidity, and increased sun exposure can lead to issues like sunburn, excess oil production, and dehydration. To help you maintain a healthy, radiant complexion throughout the summer months, we've compiled five expert-approved skincare tips.</p>
      
      <h2>1. Adjust Your Cleansing Routine</h2>
      <p>During summer, your skin tends to produce more oil and sweat, which can lead to clogged pores and breakouts. Consider switching to a gentle foaming cleanser that effectively removes impurities without stripping your skin of essential moisture. For oily skin types, a cleanser containing salicylic acid can help control excess sebum production while keeping pores clear.</p>
      <p>Pro tip: Cleanse your face twice daily, and after heavy sweating, but avoid over-washing as this can trigger your skin to produce even more oil to compensate.</p>
      
      <h2>2. Lighten Up Your Moisturizer</h2>
      <p>The heavy creams that kept your skin hydrated during winter may feel too heavy in summer's humidity. Opt for lightweight, oil-free moisturizers or gel formulations that provide hydration without adding heaviness. Look for ingredients like hyaluronic acid, which attracts moisture to your skin without clogging pores.</p>
      <p>For combination skin, you might consider using a lighter moisturizer on your T-zone and a slightly richer one on drier areas.</p>
      
      <h2>3. Never Skip Sunscreen</h2>
      <p>This is perhaps the most crucial summer skincare tip. Apply a broad-spectrum sunscreen with at least SPF 30 every day, regardless of whether you'll be spending time outdoors. Reapply every two hours when exposed to the sun, and after swimming or sweating.</p>
      <p>Consider using mineral sunscreens containing zinc oxide or titanium dioxide, which provide immediate protection and are less likely to irritate sensitive skin. For daily urban use, products that combine moisturizer with SPF can simplify your routine.</p>
      
      <h2>4. Incorporate Antioxidants</h2>
      <p>Summer's increased UV exposure can lead to more free radical damage, which accelerates skin aging. Antioxidants help neutralize these free radicals, providing an extra layer of protection beyond your sunscreen.</p>
      <p>Vitamin C serums are particularly beneficial in summer, as they brighten the skin, reduce hyperpigmentation, and boost your sunscreen's effectiveness. Apply your antioxidant serum in the morning, before moisturizer and sunscreen, for maximum benefit.</p>
      
      <h2>5. Don't Forget Your Body</h2>
      <p>While facial skincare often gets the most attention, summer is when more of your body is exposed. Extend your skincare routine below the neck with regular exfoliation to remove dead skin cells and improve circulation.</p>
      <p>After showering, apply a lightweight body lotion while your skin is still slightly damp to lock in moisture. Pay special attention to rough areas like elbows, knees, and heels. And of course, don't forget to apply sunscreen to all exposed areas, including often-missed spots like the tops of your feet, ears, and back of your neck.</p>
      
      <p>By adjusting your skincare routine to accommodate summer's unique challenges, you can maintain healthy, glowing skin all season long. Remember that consistency is key, and what works for someone else might not work for you. Pay attention to how your skin responds and adjust accordingly for your best summer skin ever.</p>
    `,
    image: "https://img.heroui.chat/image/fashion?w=1200&h=600&u=40",
    date: "June 15, 2023",
    category: "skincare",
    author: {
      name: "Emma Johnson",
      role: "Senior Beauty Editor",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=10"
    },
    tags: ["summer skincare", "sunscreen", "hydration", "skincare tips", "glowing skin"]
  };

  const relatedPosts = [
    {
      id: 4,
      title: "How to Build a Skincare Routine for Sensitive Skin",
      excerpt: "Gentle, effective skincare strategies for those with reactive or sensitive skin types.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=43",
      date: "May 22, 2023"
    },
    {
      id: 5,
      title: "The Science Behind Hyaluronic Acid",
      excerpt: "Understanding how this miracle molecule works to hydrate and plump your skin.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=44",
      date: "May 15, 2023"
    },
    {
      id: 9,
      title: "Understanding Your Skin Barrier and How to Protect It",
      excerpt: "The importance of a healthy skin barrier and tips to maintain it for glowing skin.",
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=48",
      date: "April 15, 2023"
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-end h-full pb-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Link to="/blog" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                  <Icon icon="lucide:chevron-left" width={16} />
                  Back to Blog
                </Link>
                <span className="text-white/60">•</span>
                <Link to={`/blog?category=${post.category}`} className="text-primary text-sm capitalize">
                  {post.category}
                </Link>
              </div>
              
              <h1 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white mb-6 glow-text">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4">
                <img 
                  src={post.author.image} 
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span>{post.author.role}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/3 lg:w-3/4"
            >
              <Card className="glass-card border border-white/10">
                <CardBody className="p-6 md:p-8">
                  <div className="prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                  
                  <Divider className="my-8" />
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag, index) => (
                      <Button
                        key={index}
                        variant="flat"
                        size="sm"
                        radius="full"
                        className="text-xs"
                      >
                        #{tag}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button
                        variant="flat"
                        size="sm"
                        startContent={<Icon icon="lucide:heart" width={16} />}
                      >
                        Like
                      </Button>
                      <Button
                        variant="flat"
                        size="sm"
                        startContent={<Icon icon="lucide:bookmark" width={16} />}
                      >
                        Save
                      </Button>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        isIconOnly
                        variant="flat"
                        size="sm"
                        aria-label="Share on Facebook"
                      >
                        <Icon icon="logos:facebook" width={16} />
                      </Button>
                      <Button
                        isIconOnly
                        variant="flat"
                        size="sm"
                        aria-label="Share on Twitter"
                      >
                        <Icon icon="logos:twitter" width={16} />
                      </Button>
                      <Button
                        isIconOnly
                        variant="flat"
                        size="sm"
                        aria-label="Share on Pinterest"
                      >
                        <Icon icon="logos:pinterest" width={16} />
                      </Button>
                      <Button
                        isIconOnly
                        variant="flat"
                        size="sm"
                        aria-label="Share via Email"
                      >
                        <Icon icon="lucide:mail" width={16} />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              {/* Author Bio */}
              <Card className="glass-card border border-white/10 mt-8">
                <CardBody className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <img 
                      src={post.author.image} 
                      alt={post.author.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-serif italic text-xl mb-2">About {post.author.name}</h3>
                      <p className="text-primary text-sm mb-4">{post.author.role}</p>
                      <p className="text-foreground/80 mb-4">
                        Emma is a certified dermatologist and beauty expert with over 10 years of experience in the skincare industry. 
                        She specializes in creating accessible skincare routines for all skin types and concerns.
                      </p>
                      <div className="flex gap-2">
                        <Button
                          isIconOnly
                          variant="flat"
                          size="sm"
                          aria-label="Instagram"
                        >
                          <Icon icon="logos:instagram-icon" width={16} />
                        </Button>
                        <Button
                          isIconOnly
                          variant="flat"
                          size="sm"
                          aria-label="Twitter"
                        >
                          <Icon icon="logos:twitter" width={16} />
                        </Button>
                        <Button
                          isIconOnly
                          variant="flat"
                          size="sm"
                          aria-label="LinkedIn"
                        >
                          <Icon icon="logos:linkedin-icon" width={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              {/* Comments Section */}
              <Card className="glass-card border border-white/10 mt-8">
                <CardBody className="p-6 md:p-8">
                  <h3 className="font-serif italic text-xl mb-6">Comments (12)</h3>
                  
                  <div className="space-y-6">
                    {[1, 2, 3].map((comment) => (
                      <div key={comment} className="flex gap-4">
                        <img 
                          src={`https://img.heroui.chat/image/avatar?w=100&h=100&u=${20 + comment}`} 
                          alt="Commenter"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">User Name</span>
                            <span className="text-xs text-default-400">• 2 days ago</span>
                          </div>
                          <p className="text-sm text-foreground/80 mb-2">
                            These are great tips! I've been struggling with my summer skincare routine, and the tip about switching to a lighter moisturizer really helped.
                          </p>
                          <div className="flex gap-4 text-xs text-default-400">
                            <button className="hover:text-primary flex items-center gap-1">
                              <Icon icon="lucide:heart" width={12} />
                              <span>Like (5)</span>
                            </button>
                            <button className="hover:text-primary flex items-center gap-1">
                              <Icon icon="lucide:message-circle" width={12} />
                              <span>Reply</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Divider className="my-6" />
                  
                  <h4 className="font-medium mb-4">Leave a Comment</h4>
                  <textarea 
                    className="w-full p-3 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={4}
                    placeholder="Share your thoughts..."
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <Button color="primary">
                      Post Comment
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              {/* Related Posts */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card border border-white/10 mb-6">
                  <CardBody>
                    <h3 className="font-serif italic text-xl mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="flex gap-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <Link to={`/blog/${relatedPost.id}`} className="text-sm font-medium hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </Link>
                            <p className="text-xs text-default-400 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
              
              {/* Popular Products */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass-card border border-white/10 mb-6">
                  <CardBody>
                    <h3 className="font-serif italic text-xl mb-4">Featured Products</h3>
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          name: "Hydra-Boost Serum",
                          price: "$48.00",
                          image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=11"
                        },
                        {
                          id: 2,
                          name: "UV Shield Sunscreen SPF 50",
                          price: "$32.00",
                          image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=14"
                        },
                        {
                          id: 3,
                          name: "Gentle Foaming Cleanser",
                          price: "$28.00",
                          image: "https://img.heroui.chat/image/fashion?w=200&h=200&u=15"
                        }
                      ].map((product) => (
                        <div key={product.id} className="flex gap-3">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <Link to={`/products/${product.id}`} className="text-sm font-medium hover:text-primary transition-colors">
                              {product.name}
                            </Link>
                            <p className="text-xs text-primary mt-1">{product.price}</p>
                            <Button
                              size="sm"
                              variant="flat"
                              color="primary"
                              className="mt-1 text-xs"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
              
              {/* Newsletter */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass-card border border-white/10">
                  <CardBody>
                    <h3 className="font-serif italic text-xl mb-2">Subscribe</h3>
                    <p className="text-sm text-default-400 mb-4">
                      Get the latest beauty tips and trends delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg bg-content2/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                    />
                    <Button color="primary" fullWidth>
                      Subscribe
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};