import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, saveProductToDB } from './actions';

const initialState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const sliced = action.payload.slice(0, 8);
        const entities = sliced.reduce((acc, item) => {
          return {
            ...acc,
            [item.id]: item,
          };
        }, {});
        state.entities = entities;
        state.isLoaded = true;
        state.isLoading = false;
      })
      .addCase(saveProductToDB.fulfilled, (state, action) => {
        state.entities[action.payload.id] = action.payload;
      });
  },
  reducers: {
    addFavorite(state, action) {
      const changedEntity = state.entities[action.payload];
      changedEntity.isFavorite = !changedEntity.isFavorite;
      state.entities[action.payload] = changedEntity;
    },
  },
});

export const { loadProductsInit, loadAllProducts, addFavorite, saveProduct } =
  productSlice.actions;

export default productSlice.reducer;
