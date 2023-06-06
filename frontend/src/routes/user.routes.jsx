import { Routes, Route } from 'react-router-dom';

import { FavoritesProvider } from '../hooks/favorites';

import { Home } from '../pages/Home';
import { FoodDetails } from '../pages/FoodDetails';
import { Favorites } from '../pages/Favorites';

export function UserRoutes() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  );
}