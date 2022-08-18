import { createSelector } from 'reselect';

export const selectProductIds = createSelector(
  (state) => state.products,
  (products) => Object.keys(products.entities)
);

export const selectProductById = (id) =>
  createSelector(
    (state) => state.products,
    (products) => products.entities[id]
  );

export const selectProductIsLoading = createSelector(
  (state) => state.products,
  (products) => products.isLoading
);

export const selectHasProductCount = createSelector(
  (state) => state.products,
  (products) => !!Object.keys(products.entities).length > 0
);

export const selectProductIsLoaded = createSelector(
  (state) => state.products,
  (products) => products.isLoaded
);
