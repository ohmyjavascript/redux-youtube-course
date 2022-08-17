import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const selectProductById = (state, id) => {
  return state.products.find((prod) => prod.id === id);
};

const ProductItem = ({ id }) => {
  const product = useSelector(
    (state) => selectProductById(state, id),
    shallowEqual
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    // HERE IS THE PROBLEM
    console.log('Render product Item ');
  });

  const onFavorite = () => {
    dispatch({
      type: 'favorites/ADD_FAVORITE',
      payload: id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {product.text}
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
