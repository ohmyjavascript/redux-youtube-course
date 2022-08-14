import React from 'react';
import ProductItem from '../components/ProductItem';

const productsData = [
  { id: 1, text: 'iPhone', isFavorite: false, category: 'Mobile', price: 1500 },
  {
    id: 2,
    text: 'Lenovo Laptop',
    isFavorite: false,
    category: 'Laptop',
    price: 1200,
  },
  {
    id: 3,
    text: 'Peter England',
    isFavorite: false,
    category: 'Clothing',
    price: 199,
  },
];

const Products = () => {
  const [products, setProducts] = React.useState([...productsData]);
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
