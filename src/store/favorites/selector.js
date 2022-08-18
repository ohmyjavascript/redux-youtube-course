import { createSelector } from 'reselect';

// Selector with multiple arguments
export const selectFavorites = createSelector(
  (state) => state.products,
  (state) => state.favorites,
  (products, favorites) => {
    return favorites.map((favId) => products.entities[favId]);
  }
);

export const selectFavoriteItemsCount = createSelector(
  (state) => state.favorites,
  (favorites) => favorites.length
);
