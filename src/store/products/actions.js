import axios from 'axios';

/******* Action creators *****************/
const loadProductAction = (products) => {
  return {
    type: 'products/LOAD_PRODUCTS',
    payload: products,
  };
};

const saveProductAction = (id, product) => {
  return {
    type: 'products/ADD_PRODUCT',
    payload: {
      id,
      ...product,
    },
  };
};

/******* Thunk Functions *****************/
export async function fetchProducts(dispatch, getState) {
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch(loadProductAction(response.data));
}

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
