import React, { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

const selectProdIds = (state) => state.products.map((prod) => prod.id);

const Products = () => {
  const productIds = useSelector(selectProdIds, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productIds.length === 0) {
      dispatch(fetchProducts);
    }
  }, [dispatch, productIds]);

  if (productIds.length === 0) {
    return (
      <div className="alert alert-dismissible alert-info">
        <strong>Alert! </strong> Please start adding products
        <Link to="/new" className="ml-2 alert-link">
          from here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <ul className="list-group">
        {productIds.map((prodId) => (
          <ProductItem key={prodId} id={prodId} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
