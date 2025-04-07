import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from '../layout/layout';

// Pages
import App from '../pages/main/App';
import NotFound from '../pages/notFound/NotFound';
import Car from '../pages/car/Car';
import AdminProducts from '../pages/adminProducts/AdminProducts';
import AdminEmployees from '../pages/adminEmployees/AdminEmployees';
import ProductsPage from '../pages/products/ProductsPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="car" element={<Car />} />
        <Route path="admin-products" element={<AdminProducts />} />
        <Route path="admin-employees" element={<AdminEmployees />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
