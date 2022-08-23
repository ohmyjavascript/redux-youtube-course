import React from 'react';
import ProductItem from '../components/ProductItem';

const Products = () => {
  const [products] = React.useState([]);
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
