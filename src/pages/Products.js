import React, { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'products/LOAD_PRODUCTS',
    });
  }, [dispatch]);

  const addFavorite = (id) => {
    console.log('Adding product to favorite', id);
  };
  const addToCart = (id) => {
    console.log('Adding product to cart', id);
  };
  return (
    <div>
      <ul className="list-group">
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            item={prod}
            onFavorite={addFavorite}
            onCartAdd={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
