import { v4 as uuidv4 } from 'uuid';

const INIT_STATE = [];

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

function productsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS':
      return state.length === 0 ? [...PRODUCTS] : state;
    case 'products/ADD_PRODUCT':
      const newProduct = {
        id: uuidv4(),
        text: action.payload.name,
        isFavorite: false,
        category: action.payload.category,
        price: action.payload.price,
      };
      return [...PRODUCTS, newProduct];
    default:
      return state;
  }
}

export default productsReducer;
