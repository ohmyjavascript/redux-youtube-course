import { createSlice, createSelector } from '@reduxjs/toolkit';

// Reducers
const initialState = [];

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart(state = initialState, action) {
      if (state.length === 0) {
        state.push({
          id: action.payload,
          quantity: 1,
        });
        return;
      }
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      itemIndex !== -1
        ? state[itemIndex].quantity++
        : state.push({
            id: action.payload,
            quantity: 1,
          });
    },
    removeFromCart(state = initialState, action) {
      const removeItem = state.find((item) => item.id === action.payload);
      console.log(removeItem);
      const index = state.findIndex((item) => item.id === action.payload);

      if (removeItem.quantity === 1) {
        state.splice(index, 1);
      } else {
        state[index].quantity = state[index].quantity - 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartIds = createSelector(
  (state) => state.carts,
  (carts) => carts
);

export const selectCartLength = createSelector(
  (state) => state.carts,
  (carts) =>
    carts.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
);

export const selectCartItems = createSelector(
  (state) => state.products,
  (state) => state.carts,
  (products, carts) => {
    return carts.map((cartItem) => {
      return {
        id: cartItem.id,
        title: products.entities[cartItem.id].title,
        quantity: cartItem.quantity,
        price: products.entities[cartItem.id].price,
      };
    });
  }
);

export const selectCartTotal = createSelector(selectCartItems, (carts) => {
  return carts.reduce((acc, item) => acc + item.quantity * item.price, 0);
});
