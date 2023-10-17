import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {

  const [allFavorites, setAllFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  function addFavorite(item) {
    setAllFavorites([...allFavorites, item]);
    localStorage.setItem("favorites", JSON.stringify([...allFavorites, item]));
  }

  function removeFavorite(item) {
    const favoritesFilters = allFavorites.filter(
      (character) => character.id !== item.id
    );
    setAllFavorites(favoritesFilters);
    localStorage.setItem("favorites", JSON.stringify(favoritesFilters));
  }

  function getFavorite(id) {
    return allFavorites.some((character) => character.id === id);
  }

  const data = {
    allFavorites,
    addFavorite,
    removeFavorite,
    getFavorite,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
}
