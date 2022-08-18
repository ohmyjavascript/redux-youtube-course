import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteItem from '../components/FavoriteItem';
import { selectFavorites } from '../store/favorites/selector';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <ul className="list-group">
      {favorites.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Favorites;
