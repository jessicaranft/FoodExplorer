import { Routes, Route } from 'react-router-dom';

import { FavoritesProvider } from '../hooks/favorites';

import { Home } from '../pages/Home';
import { FoodDetails } from '../pages/FoodDetails';
import { Favorites } from '../pages/Favorites';
import { Order } from '../pages/Order';
import { OrdersHistory } from '../pages/OrdersHistory';

export function UserRoutes() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/order" element={<Order />} />
        <Route path="/history" element={<OrdersHistory />} />
      </Routes>
    </FavoritesProvider>
  );
}