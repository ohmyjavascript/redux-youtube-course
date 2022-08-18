import { createSelector } from 'reselect';

export const selectProductIds = createSelector(
  (state) => state.products.products, // "input selector" functions
  (products) => products.map((prod) => prod.id) // "output selector" functions
);

export const selectProductById = (id) =>
  createSelector(
    (state) => state.products.products,
    (products) => products.find((prod) => prod.id === id)
  );

export const selectProductIsLoading = createSelector(
  (state) => state.products,
  (products) => products.isLoading
);
