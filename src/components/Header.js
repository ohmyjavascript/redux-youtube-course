import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const favoritedItems = useSelector((state) => {
    return state.products.reduce((acc, item) => {
      return item.isFavorite ? acc + 1 : acc;
    }, 0);
  });
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
      </div>
    </div>
  );
};

export default Header;
