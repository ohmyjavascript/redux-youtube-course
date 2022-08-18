import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const INIT_STATE = [];

// Thunk function
export async function fetchProducts(dispatch, getState) {
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch({
    type: 'products/LOAD_PRODUCTS',
    payload: response.data,
  });
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
      const newProduct = {
        id: uuidv4(),
        text: action.payload.name,
        isFavorite: false,
        category: action.payload.category,
        price: action.payload.price,
      };
      return [...state, newProduct];

    default:
      return state;
  }
}

export default productsReducer;
