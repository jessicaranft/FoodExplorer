import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(food) {
    setFavorites((prevFavorites) => [...prevFavorites, food]);
  }

  function removeFavorite(food) {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== food.id));
  }

  function checkFavorite(food) {
    return favorites.some((item) => item.id === food.id);
  }

  return (
    <FavoritesContext.Provider
      value={{
      favorites, addFavorite, removeFavorite, checkFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}