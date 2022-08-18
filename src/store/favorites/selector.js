import { createSelector } from 'reselect';

// Selector with multiple arguments
export const selectFavorites = createSelector(
  (state) => state.products,
  (state) => state.favorites,
  (products, favorites) => {
    return favorites.map((favId) => products.find((prod) => prod.id === favId));
  }
);
