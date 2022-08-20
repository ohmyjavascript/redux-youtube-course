import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProductsInit(state, action) {
      state.isLoading = true;
    },
    loadAllProducts(state, action) {
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
    },
    addFavorite(state, action) {
      const changedEntity = state.entities[action.payload];
      changedEntity.isFavorite = !changedEntity.isFavorite;
      state.entities[action.payload] = changedEntity;
    },
    saveProduct(state, action) {
      state.entities[action.payload.id] = action.payload;
    },
  },
});

export const { loadProductsInit, loadAllProducts, addFavorite, saveProduct } =
  productSlice.actions;

export default productSlice.reducer;
