import { Routes, Route } from 'react-router-dom';

import { FavoritesProvider } from '../hooks/favorites';

import { Home } from '../pages/Home';
import { FoodDetails } from '../pages/FoodDetails';
import { Favorites } from '../pages/Favorites';
import { Order } from '../pages/Order';
import { OrdersHistory } from '../pages/OrdersHistory';

export function UserRoutes({ selectedTheme, setSelectedTheme }) {
  return (
    <FavoritesProvider>
      <Routes>
        <Route
          path="/"
          element={<Home setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
        />
        <Route 
          path="/details/:id"
          element={<FoodDetails setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
        />
        <Route
          path="/favorites"
          element={<Favorites setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
          />
        <Route
          path="/order" element={<Order setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
        />
        <Route
          path="/history"
          element={<OrdersHistory setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
        />
      </Routes>
    </FavoritesProvider>
  );
}