import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return (
      <div className="alert alert-dismissible alert-info">
        <strong>Alert! </strong> Please start adding to cart
        <Link to="/" className="ml-2 alert-link">
          from here
        </Link>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {cartItems.length &&
        cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      <hr />
      <h5 className="text-right mr-3">
        Total is
        <span className="ml-3 badge  bg-primary text-white">
          {cartTotal.toFixed(2)}
        </span>
      </h5>
    </ul>
  );
};

export default Cart;
