import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/HomeAdmin';
import { FoodDetailsAdmin } from '../pages/FoodDetailsAdmin';
import { EditFood } from '../pages/EditFood';
import { NewFood } from '../pages/NewFood';
import { OrdersAdmin } from '../pages/OrdersAdmin';

export function AdminRoutes({ selectedTheme, setSelectedTheme }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomeAdmin setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
      <Route
        path="/details/:id"
        element={<FoodDetailsAdmin setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
      <Route
        path="/edit/:id"
        element={<EditFood setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
      <Route
        path="/new"
        element={<NewFood setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
      <Route
        path="/orders"
        element={<OrdersAdmin setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
    </Routes>
  );
}