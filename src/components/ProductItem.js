import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteItem } from '../store/favorites';
import { addFavorite } from '../store/products';
import { selectProductById } from '../store/products/selectors';

const ProductItem = ({ id }) => {
  const product = useSelector(selectProductById(id));
  const dispatch = useDispatch();

  const onFavorite = () => {
    dispatch(addFavorite(id));
    dispatch(addFavoriteItem(id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {product.title.slice(0, 50)}
      <div>
        <button
          onClick={() => onFavorite(product.id)}
          className="btn btn-secondary"
        >
          {product.isFavorite ? (
            <AiFillHeart size={24} />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </button>
        <button className="btn btn-secondary">
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
