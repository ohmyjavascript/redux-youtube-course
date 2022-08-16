import { v4 as uuidv4 } from 'uuid';

const INIT_STATE = [];

function productsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS':
      return state.length !== 0 ? state : [];

    case 'favorites/ADD_FAVORITE':
      const toggledFavItem = state.find((prod) => prod.id === action.payload);
      toggledFavItem.isFavorite = !toggledFavItem.isFavorite;
      return state.map((prodItem) => {
        return prodItem.id === action.payload ? toggledFavItem : prodItem;
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
