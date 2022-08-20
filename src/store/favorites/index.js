import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteItem(state, action) {
      if (state.length === 0) {
        return [action.payload];
      }
      const isExisting = !!state.find((item) => item === action.payload);
      if (isExisting) {
        return state.filter((item) => item !== action.payload);
      }
      return state.concat(action.payload);
    },
  },
});

export const { addFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
