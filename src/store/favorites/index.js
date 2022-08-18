const INIT_STATE = [];

function favoritesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'favorites/ADD_FAVORITE':
      // if empty state, just add
      if (state.length === 0) {
        return [action.payload];
      }
      // if it already exist, then toggle it. Else add it
      const isExisting = !!state.find((item) => item === action.payload);
      if (isExisting) {
        return state.filter((item) => item !== action.payload);
      }
      return state.concat(action.payload);

    default:
      return state;
  }
}

export default favoritesReducer;
