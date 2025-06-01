import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from '@heroui/react';

// Lazy load pages
const Home = React.lazy(() => import('../pages/home'));
const Products = React.lazy(() => import('../pages/products'));
const ProductDetail = React.lazy(() => import('../pages/product-detail'));
const About = React.lazy(() => import('../pages/about'));
const Blog = React.lazy(() => import('../pages/blog'));
const Cart = React.lazy(() => import('../pages/cart'));
const StyleQuiz = React.lazy(() => import('../pages/style-quiz'));
const NotFound = React.lazy(() => import('../pages/not-found'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <Spinner color="primary" size="lg" className="text-glow" />
  </div>
);

export const AppRoutes = () => {
  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/cart" component={Cart} />
        <Route path="/style-quiz" component={StyleQuiz} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
};
