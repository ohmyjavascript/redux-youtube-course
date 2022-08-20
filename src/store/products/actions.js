import axios from 'axios';
import { loadAllProducts, loadProductsInit, saveProduct } from './index';

export const fetchProducts = () => async (dispatch) => {
  dispatch(loadProductsInit());
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch(loadAllProducts(response.data));
};

export const saveProductToDB = (product) => async (dispatch) => {
  product.rating = {
    rate: 0,
    count: 0,
  };
  const post = JSON.stringify(product);
  const response = await axios.post('https://fakestoreapi.com/products', post);
  dispatch(
    saveProduct({
      ...response.data.id,
      product,
    })
  );
};
