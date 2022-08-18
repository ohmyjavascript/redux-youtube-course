import {
  ADD_FAVORITE,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_INIT,
  SAVE_PRODUCT,
} from './actions';

const INIT_STATE = {
  products: [],
  isLoaded: false,
  isLoading: false,
};

function productsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_PRODUCTS:
      const sliced = action.payload.slice(0, 8);
      return {
        ...state,
        products: sliced,
        isLoaded: true,
        isLoading: false,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        products: state.products.map((prodItem) => {
          if (prodItem.id !== action.payload) {
            return prodItem;
          }
          return {
            ...prodItem,
            isFavorite: !prodItem.isFavorite,
          };
        }),
      };

    case SAVE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
}

export default productsReducer;
