import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from '../layout/layout';

// Pages
import App from '../pages/main/App';
import NotFound from '../pages/notFound/NotFound';
import Car from '../pages/car/Car';
import ProductsPage from '../pages/products/ProductsPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="car" element={<Car />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
