const INIT_STATE = [];

function favoritesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'favorites/ADD_FAVORITE':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default favoritesReducer;
