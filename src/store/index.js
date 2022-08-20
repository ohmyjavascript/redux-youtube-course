import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import favoritesReducer from './favorites';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
