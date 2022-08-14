import { legacy_createStore as createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { composeWithDevTools } from '@redux-devtools/extension';

// INITIAL STATE
const INIT_STATE = {
  products: [],
};

const PRODUCTS = [
  {
    id: uuidv4(),
    text: 'iPhone',
    isFavorite: false,
    category: 'Mobile',
    price: 1500,
  },
  {
    id: uuidv4(),
    text: 'MacBook Pro',
    isFavorite: true,
    category: 'Laptop',
    price: 2900,
  },
  {
    id: uuidv4(),
    text: 'Peter England',
    isFavorite: false,
    category: 'Clothing',
    price: 299,
  },
];

// A ROOT REDUCER TO HANDLE THE ACTIONS THAT STORE DELEGATES

function rootReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS':
      return {
        ...state,
        products: [...PRODUCTS],
      };
    default:
      return state;
  }
}

// CREATE A STORE
const store = createStore(rootReducer, composeWithDevTools());

// EXPOSE IT OUTSIDE
export default store;
