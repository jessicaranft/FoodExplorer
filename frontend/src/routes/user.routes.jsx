import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { FoodDetails } from '../pages/FoodDetails';

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<FoodDetails />} />
    </Routes>
  );
}