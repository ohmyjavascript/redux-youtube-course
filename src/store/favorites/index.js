import { createSlice } from '@reduxjs/toolkit';
import { addFavorite } from '../products';

const initialState = [];

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addFavorite, (state, action) => {
      if (state.length === 0) {
        return [action.payload];
      }
      const isExisting = !!state.find((item) => item === action.payload);
      if (isExisting) {
        return state.filter((item) => item !== action.payload);
      }
      return state.concat(action.payload);
    });
  },
  reducers: {},
});

export default favoriteSlice.reducer;
