import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/HomeAdmin';
import { FoodDetailsAdmin } from '../pages/FoodDetailsAdmin';
import { EditFood } from '../pages/EditFood';
import { NewFood } from '../pages/NewFood';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/details/:id" element={<FoodDetailsAdmin />} />
      <Route path="/edit/:id" element={<EditFood />} />
      <Route path="/new" element={<NewFood />} />
    </Routes>
  );
}