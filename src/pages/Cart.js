import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cart';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
