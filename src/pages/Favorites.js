import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteItem from '../components/FavoriteItem';
import { selectFavorites } from '../store/favorites/selector';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  if (favorites.length === 0) {
    return (
      <div className="alert alert-dismissible alert-info">
        <strong>Alert! </strong> Please start adding favorites
        <Link to="/" className="ml-2 alert-link">
          from here
        </Link>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {favorites.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Favorites;
