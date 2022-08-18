const INIT_STATE = [];

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
