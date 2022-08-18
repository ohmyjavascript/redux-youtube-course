import axios from 'axios';

const INIT_STATE = [];

// Action creators
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

// Thunk function
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

function productsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS':
      const sliced = action.payload.slice(0, 8);
      return [...sliced];

    case 'favorites/ADD_FAVORITE':
      return state.map((prodItem) => {
        if (prodItem.id !== action.payload) {
          return prodItem;
        }
        return {
          ...prodItem,
          isFavorite: !prodItem.isFavorite,
        };
      });

    case 'products/ADD_PRODUCT':
      return [...state, action.payload];

    default:
      return state;
  }
}

export default productsReducer;
