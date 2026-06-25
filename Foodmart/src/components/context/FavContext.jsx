import React, { createContext, useContext, useState } from 'react';

export const FAV = createContext(null);

export const FavProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);

  const toggleFav = (product) => {
    setFavList((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  };

  const isFav = (id) => favList.some((p) => p.id === id);

  return (
    <FAV.Provider value={{ favList, toggleFav, isFav }}>
      {children}
    </FAV.Provider>
  );
};

export const useFav = () => useContext(FAV);
