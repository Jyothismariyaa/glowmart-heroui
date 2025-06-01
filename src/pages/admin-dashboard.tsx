import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Tabs, Tab, Badge, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const AdminDashboardPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("overview");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample data for dashboard
  const dashboardStats = [
    { title: "Total Revenue", value: "$24,568", change: "+12.5%", icon: "lucide:dollar-sign", color: "primary" },
    { title: "Total Orders", value: "1,243", change: "+8.2%", icon: "lucide:shopping-bag", color: "secondary" },
    { title: "New Customers", value: "856", change: "+18.7%", icon: "lucide:users", color: "success" },
    { title: "Conversion Rate", value: "3.2%", change: "+2.1%", icon: "lucide:percent", color: "warning" }
  ];

  // Sample recent orders
  const recentOrders = [
    { id: "ORD-7829", customer: "Emma Johnson", date: "Jun 12, 2023", amount: "$128.50", status: "Delivered" },
    { id: "ORD-7828", customer: "Michael Chen", date: "Jun 12, 2023", amount: "$85.20", status: "Processing" },
    { id: "ORD-7827", customer: "Sophia Rodriguez", date: "Jun 11, 2023", amount: "$210.75", status: "Shipped" },
    { id: "ORD-7826", customer: "James Wilson", date: "Jun 11, 2023", amount: "$64.30", status: "Delivered" },
    { id: "ORD-7825", customer: "Olivia Martinez", date: "Jun 10, 2023", amount: "$145.90", status: "Processing" }
  ];

  // Sample products
  const products = [
    { id: 1, name: "Luminous Silk Foundation", sku: "LSF-001", stock: 124, price: "$64.00", category: "Makeup" },
    { id: 2, name: "Hydra-Boost Serum", sku: "HBS-002", stock: 86, price: "$48.00", category: "Skincare" },
    { id: 3, name: "Velvet Matte Lipstick", sku: "VML-003", stock: 215, price: "$32.00", category: "Makeup" },
    { id: 4, name: "Shimmer Eyeshadow Palette", sku: "SEP-004", stock: 68, price: "$58.00", category: "Makeup" },
    { id: 5, name: "Overnight Recovery Mask", sku: "ORM-005", stock: 92, price: "$48.00", category: "Skincare" },
    { id: 6, name: "Volumizing Mascara", sku: "VM-006", stock: 178, price: "$32.00", category: "Makeup" },
    { id: 7, name: "Hydrating Face Mist", sku: "HFM-007", stock: 104, price: "$28.00", category: "Skincare" },
    { id: 8, name: "Precision Eyeliner", sku: "PE-008", stock: 156, price: "$26.00", category: "Makeup" }
  ];

  // Sample customers
  const customers = [
    { id: 1, name: "Emma Johnson", email: "emma.j@example.com", orders: 8, spent: "$645.20", joined: "Mar 15, 2023" },
    { id: 2, name: "Michael Chen", email: "michael.c@example.com", orders: 5, spent: "$320.75", joined: "Apr 2, 2023" },
    { id: 3, name: "Sophia Rodriguez", email: "sophia.r@example.com", orders: 12, spent: "$892.50", joined: "Jan 8, 2023" },
    { id: 4, name: "James Wilson", email: "james.w@example.com", orders: 3, spent: "$175.40", joined: "May 20, 2023" },
    { id: 5, name: "Olivia Martinez", email: "olivia.m@example.com", orders: 7, spent: "$510.30", joined: "Feb 12, 2023" }
  ];

  // Sample AI models
  const aiModels = [
    { id: 1, name: "Skin Analysis AI", status: "Active", accuracy: "94.2%", lastUpdated: "Jun 10, 2023" },
    { id: 2, name: "Virtual Try-On", status: "Active", accuracy: "92.8%", lastUpdated: "Jun 8, 2023" },
    { id: 3, name: "Product Recommendation", status: "Active", accuracy: "89.5%", lastUpdated: "Jun 5, 2023" },
    { id: 4, name: "Customer Segmentation", status: "Training", accuracy: "86.3%", lastUpdated: "Jun 12, 2023" },
    { id: 5, name: "Trend Prediction", status: "Inactive", accuracy: "78.9%", lastUpdated: "May 25, 2023" }
  ];

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Shipped":
        return "primary";
      case "Processing":
        return "warning";
      case "Cancelled":
        return "danger";
      case "Active":
        return "success";
      case "Training":
        return "warning";
      case "Inactive":
        return "danger";
      default:
        return "default";
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="font-serif italic text-3xl md:text-4xl mb-2 glow-text">
                Admin Dashboard
              </h1>
              <p className="text-foreground/80">
                Welcome back, Admin. Here's what's happening with your store today.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button
                color="primary"
                startContent={<Icon icon="lucide:plus" width={16} />}
              >
                Add New Product
              </Button>
            </div>
          </div>
          
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border border-white/10">
                  <CardBody className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground/70 text-sm mb-1">{stat.title}</p>
                        <h3 className="text-2xl font-semibold mb-2">{stat.value}</h3>
                        <div className={`text-xs ${stat.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                          {stat.change} from last month
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-full bg-${stat.color}/20 flex items-center justify-center`}>
                        <Icon icon={stat.icon} className={`text-${stat.color}`} width={24} />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Main Content Tabs */}
        <Tabs 
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab as any}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-4",
          }}
        >
          <Tab key="overview" title="Overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Orders */}
              <Card className="glass-card border border-white/10 lg:col-span-2">
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif italic text-xl">Recent Orders</h2>
                    <Button
                      as={Link}
                      to="/admin/orders"
                      variant="light"
                      size="sm"
                      endContent={<Icon icon="lucide:arrow-right" width={16} />}
                    >
                      View All
                    </Button>
                  </div>
                  
                  <Table 
                    aria-label="Recent orders table"
                    removeWrapper
                    classNames={{
                      table: "min-w-full",
                    }}
                  >
                    <TableHeader>
                      <TableColumn>ORDER ID</TableColumn>
                      <TableColumn>CUSTOMER</TableColumn>
                      <TableColumn>DATE</TableColumn>
                      <TableColumn>AMOUNT</TableColumn>
                      <TableColumn>STATUS</TableColumn>
                      <TableColumn>ACTIONS</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell>
                            <Badge color={getStatusColor(order.status) as any} variant="flat">
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button
                                isIconOnly
                                variant="light"
                                size="sm"
                                aria-label="View order details"
                              >
                                <Icon icon="lucide:eye" width={16} />
                              </Button>
                              <Button
                                isIconOnly
                                variant="light"
                                size="sm"
                                aria-label="Edit order"
                              >
                                <Icon icon="lucide:edit" width={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
              
              {/* AI Models Status */}
              <Card className="glass-card border border-white/10">
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif italic text-xl">AI Models Status</h2>
                    <Button
                      variant="light"
                      size="sm"
                      endContent={<Icon icon="lucide:refresh-cw" width={16} />}
                    >
                      Refresh
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {aiModels.slice(0, 3).map((model) => (
                      <div key={model.id} className="flex items-center justify-between p-3 bg-content2/30 rounded-lg">
                        <div>
                          <h3 className="font-medium">{model.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-foreground/70">
                            <span>Accuracy: {model.accuracy}</span>
                            <span>•</span>
                            <span>Updated: {model.lastUpdated}</span>
                          </div>
                        </div>
                        <Badge color={getStatusColor(model.status) as any} variant="flat">
                          {model.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      as={Link}
                      to="/admin/ai-models"
                      variant="flat"
                      color="primary"
                      fullWidth
                    >
                      Manage AI Models
                    </Button>
                  </div>
                </CardBody>
              </Card>
              
              {/* Sales Chart */}
              <Card className="glass-card border border-white/10 lg:col-span-3">
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif italic text-xl">Sales Analytics</h2>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button 
                          variant="light"
                          endContent={<Icon icon="lucide:chevron-down" width={16} />}
                        >
                          Last 30 Days
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Time period selection">
                        <DropdownItem key="7days">Last 7 Days</DropdownItem>
                        <DropdownItem key="30days">Last 30 Days</DropdownItem>
                        <DropdownItem key="90days">Last 90 Days</DropdownItem>
                        <DropdownItem key="year">This Year</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-80 bg-content2/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon icon="lucide:bar-chart-2" className="text-primary mx-auto mb-2" width={48} />
                      <p className="text-foreground/70">Sales chart visualization would appear here</p>
                      <p className="text-xs text-foreground/50">Showing daily sales data for the past 30 days</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Tab>
          
          <Tab key="products" title="Products">
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="font-serif italic text-xl">Product Inventory</h2>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      startContent={<Icon icon="lucide:search" className="text-default-400" width={16} />}
                      className="w-full sm:w-auto"
                      classNames={{
                        inputWrapper: "bg-content2/50 hover:bg-content2/70",
                      }}
                    />
                    <Button
                      color="primary"
                      startContent={<Icon icon="lucide:plus" width={16} />}
                    >
                      Add Product
                    </Button>
                  </div>
                </div>
                
                <Table 
                  aria-label="Products table"
                  removeWrapper
                  classNames={{
                    table: "min-w-full",
                  }}
                >
                  <TableHeader>
                    <TableColumn>PRODUCT NAME</TableColumn>
                    <TableColumn>SKU</TableColumn>
                    <TableColumn>STOCK</TableColumn>
                    <TableColumn>PRICE</TableColumn>
                    <TableColumn>CATEGORY</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>
                          <Badge 
                            color={product.stock > 100 ? "success" : product.stock > 50 ? "warning" : "danger"} 
                            variant="flat"
                          >
                            {product.stock}
                          </Badge>
                        </TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="View product details"
                            >
                              <Icon icon="lucide:eye" width={16} />
                            </Button>
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="Edit product"
                            >
                              <Icon icon="lucide:edit" width={16} />
                            </Button>
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="Delete product"
                              className="text-danger"
                            >
                              <Icon icon="lucide:trash-2" width={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="flex justify-center mt-6">
                  <Button
                    variant="flat"
                    size="sm"
                    startContent={<Icon icon="lucide:chevron-left" width={16} />}
                    className="mr-2"
                  >
                    Previous
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    isDisabled
                    className="mx-1 bg-primary/20"
                  >
                    1
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    className="mx-1"
                  >
                    2
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    className="mx-1"
                  >
                    3
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    endContent={<Icon icon="lucide:chevron-right" width={16} />}
                    className="ml-2"
                  >
                    Next
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab key="customers" title="Customers">
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="font-serif italic text-xl">Customer Management</h2>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Input
                      placeholder="Search customers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      startContent={<Icon icon="lucide:search" className="text-default-400" width={16} />}
                      className="w-full sm:w-auto"
                      classNames={{
                        inputWrapper: "bg-content2/50 hover:bg-content2/70",
                      }}
                    />
                    <Button
                      color="primary"
                      startContent={<Icon icon="lucide:download" width={16} />}
                    >
                      Export
                    </Button>
                  </div>
                </div>
                
                <Table 
                  aria-label="Customers table"
                  removeWrapper
                  classNames={{
                    table: "min-w-full",
                  }}
                >
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>ORDERS</TableColumn>
                    <TableColumn>TOTAL SPENT</TableColumn>
                    <TableColumn>JOINED</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.orders}</TableCell>
                        <TableCell>{customer.spent}</TableCell>
                        <TableCell>{customer.joined}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="View customer details"
                            >
                              <Icon icon="lucide:eye" width={16} />
                            </Button>
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="Edit customer"
                            >
                              <Icon icon="lucide:edit" width={16} />
                            </Button>
                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  isIconOnly
                                  variant="light"
                                  size="sm"
                                  aria-label="More actions"
                                >
                                  <Icon icon="lucide:more-vertical" width={16} />
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu aria-label="Customer actions">
                                <DropdownItem key="send-email" startContent={<Icon icon="lucide:mail" width={16} />}>
                                  Send Email
                                </DropdownItem>
                                <DropdownItem key="add-discount" startContent={<Icon icon="lucide:tag" width={16} />}>
                                  Add Discount
                                </DropdownItem>
                                <DropdownItem key="block-customer" 
                                  startContent={<Icon icon="lucide:ban" width={16} />}
                                  className="text-danger"
                                >
                                  Block Customer
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="flex justify-center mt-6">
                  <Button
                    variant="flat"
                    size="sm"
                    startContent={<Icon icon="lucide:chevron-left" width={16} />}
                    className="mr-2"
                  >
                    Previous
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    isDisabled
                    className="mx-1 bg-primary/20"
                  >
                    1
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    className="mx-1"
                  >
                    2
                  </Button>
                  
                  <Button
                    variant="flat"
                    size="sm"
                    endContent={<Icon icon="lucide:chevron-right" width={16} />}
                    className="ml-2"
                  >
                    Next
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab key="ai-models" title="AI Models">
            <Card className="glass-card border border-white/10">
              <CardBody className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="font-serif italic text-xl">AI Model Management</h2>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                      color="primary"
                      startContent={<Icon icon="lucide:plus" width={16} />}
                    >
                      Train New Model
                    </Button>
                  </div>
                </div>
                
                <Table 
                  aria-label="AI Models table"
                  removeWrapper
                  classNames={{
                    table: "min-w-full",
                  }}
                >
                  <TableHeader>
                    <TableColumn>MODEL NAME</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>ACCURACY</TableColumn>
                    <TableColumn>LAST UPDATED</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {aiModels.map((model) => (
                      <TableRow key={model.id}>
                        <TableCell>{model.name}</TableCell>
                        <TableCell>
                          <Badge color={getStatusColor(model.status) as any} variant="flat">
                            {model.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{model.accuracy}</TableCell>
                        <TableCell>{model.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="View model details"
                            >
                              <Icon icon="lucide:eye" width={16} />
                            </Button>
                            <Button
                              isIconOnly
                              variant="light"
                              size="sm"
                              aria-label="Retrain model"
                            >
                              <Icon icon="lucide:refresh-cw" width={16} />
                            </Button>
                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  isIconOnly
                                  variant="light"
                                  size="sm"
                                  aria-label="More actions"
                                >
                                  <Icon icon="lucide:more-vertical" width={16} />
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu aria-label="AI model actions">
                                <DropdownItem key="export-model" startContent={<Icon icon="lucide:download" width={16} />}>
                                  Export Model
                                </DropdownItem>
                                <DropdownItem key="configure" startContent={<Icon icon="lucide:settings" width={16} />}>
                                  Configure
                                </DropdownItem>
                                <DropdownItem key="toggle-status"   
                                  startContent={<Icon icon="lucide:power" width={16} />}
                                  className={model.status === "Active" ? "text-danger" : "text-success"}
                                >
                                  {model.status === "Active" ? "Deactivate" : "Activate"}
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
            
            {/* AI Performance Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <Card className="glass-card border border-white/10">
                <CardBody className="p-6">
                  <h2 className="font-serif italic text-xl mb-6">AI Performance Metrics</h2>
                  
                  {/* Chart placeholder */}
                  <div className="h-64 bg-content2/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Icon icon="lucide:line-chart" className="text-primary mx-auto mb-2" width={36} />
                      <p className="text-foreground/70">AI accuracy trends over time</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>Last 6 months</span>
                    <span>Updated: June 12, 2023</span>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="glass-card border border-white/10">
                <CardBody className="p-6">
                  <h2 className="font-serif italic text-xl mb-6">AI Usage Statistics</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Virtual Try-On</span>
                        <span className="text-sm">78%</span>
                      </div>
                      <div className="w-full h-2 bg-content2/50 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Skin Analysis</span>
                        <span className="text-sm">65%</span>
                      </div>
                      <div className="w-full h-2 bg-content2/50 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Product Recommendations</span>
                        <span className="text-sm">92%</span>
                      </div>
                      <div className="w-full h-2 bg-content2/50 rounded-full overflow-hidden">
                        <div className="h-full bg-success rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Chatbot Interactions</span>
                        <span className="text-sm">45%</span>
                      </div>
                      <div className="w-full h-2 bg-content2/50 rounded-full overflow-hidden">
                        <div className="h-full bg-warning rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-sm text-foreground/70 text-center">
                    Percentage of users engaging with each AI feature
                  </div>
                </CardBody>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};