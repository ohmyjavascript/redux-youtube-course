import React from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
  return (
    <ul className="list-group">
      <CartItem />
      <hr />
      <h5 className="text-right mr-3">
        Total is
        <span className="ml-3 badge  bg-primary text-white">0</span>
      </h5>
    </ul>
  );
};

export default Cart;
