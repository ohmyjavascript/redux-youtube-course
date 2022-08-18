import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteItem from '../components/FavoriteItem';

const Favorites = () => {
  const favoriteIds = useSelector((state) => state.favorites);
  const favItems = useSelector((state) => {
    return favoriteIds.map((id) =>
      state.products.find((item) => item.id === id)
    );
  });
  return (
    <ul className="list-group">
      {favItems.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Favorites;
