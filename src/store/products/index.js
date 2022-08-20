import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, saveProductToDB } from './actions';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  isLoaded: false,
  isLoading: false,
});

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
        productsAdapter.setAll(state, sliced);
        state.isLoaded = true;
        state.isLoading = false;
      })
      .addCase(saveProductToDB.fulfilled, (state, action) => {
        productsAdapter.addOne(state, action.payload);
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
