import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineMinusSquare } from 'react-icons/ai';

const CartItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Text
      <div>
        <button className="btn btn-secondary">
          <AiOutlineMinusSquare size={24} />
        </button>
        <span className="font-weight-bold"> 0 </span>
        <button className="btn btn-secondary">
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
