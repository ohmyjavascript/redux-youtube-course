import axios from 'axios';

export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';
export const SAVE_PRODUCT = 'products/ADD_PRODUCT';
export const LOAD_PRODUCTS_INIT = 'products/LOAD_PRODUCTS_INIT';
export const ADD_FAVORITE = 'favorites/ADD_FAVORITE';
/******* Action creators *****************/
const loadProductAction = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};

const saveProductAction = (id, product) => {
  return {
    type: SAVE_PRODUCT,
    payload: {
      id,
      ...product,
    },
  };
};

const loadProductsInit = () => {
  return {
    type: LOAD_PRODUCTS_INIT,
  };
};

/******* Thunk Functions *****************/
export async function fetchProducts(dispatch, getState) {
  dispatch(loadProductsInit());
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch(loadProductAction(response.data));
}

// If you hover on the saveProducts, we see it returns a promise.
export function saveProducts(product) {
  return async function saveNewProduct(dispatch, getState) {
    product.rating = {
      rate: 0,
      count: 0,
    };
    const post = JSON.stringify(product);
    const response = await axios.post(
      'https://fakestoreapi.com/products',
      post
    );
    dispatch(saveProductAction(response.data.id, product));
  };
}
