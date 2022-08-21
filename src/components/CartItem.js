import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cart';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addToCart(item.id));
  };
  const onRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.title}
      <div>
        <button onClick={onRemove} className="btn btn-secondary">
          <AiOutlineMinusSquare size={24} />
        </button>
        <span className="font-weight-bold"> {item.quantity} </span>
        <button onClick={onAdd} className="btn btn-secondary">
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
