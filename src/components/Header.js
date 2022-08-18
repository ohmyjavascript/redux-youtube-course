import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavoriteItemsCount } from '../store/favorites/selector';

const Header = () => {
  const favoritedItems = useSelector(selectFavoriteItemsCount);
  return (
    <div className="navbar navbar-dark bg-primary">
      <div className="navbar-header pull-left">
        <Link to="/" className="navbar-brand">
          Redux
        </Link>
      </div>
      <div className="navbar-header pull-right">
        <Link to="/" className="btn btn-default text-white navbar-btn">
          Products
        </Link>
        <Link to="/favorites" className="btn btn-default text-white navbar-btn">
          Favorites ({favoritedItems})
        </Link>
        <Link to="/cart" className="btn btn-default text-white navbar-btn">
          Cart
        </Link>
        <Link to="/new" className="btn btn-default text-white navbar-btn">
          New Product
        </Link>
      </div>
    </div>
  );
};

export default Header;
