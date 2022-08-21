import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import favoritesReducer from './favorites';
import cartReducer from './cart';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    carts: cartReducer,
  },
});

export default store;
