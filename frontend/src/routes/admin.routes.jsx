import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/HomeAdmin';
import { FoodDetailsAdmin } from '../pages/FoodDetailsAdmin';
import { EditFood } from '../pages/EditFood';
import { NewFood } from '../pages/NewFood';
import { OrdersAdmin } from '../pages/OrdersAdmin';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/details/:id" element={<FoodDetailsAdmin />} />
      <Route path="/edit/:id" element={<EditFood />} />
      <Route path="/new" element={<NewFood />} />
      <Route path="/orders" element={<OrdersAdmin />} />
    </Routes>
  );
}