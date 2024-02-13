import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice';
import { singleProductReducer } from './slices/singleProductsSlice';
import {
  cartReducer,
  addToCart,
  decrementFromCart,
  removeFromCart,
  removeAllFromCart,
  getTotalPrice,
} from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});

export * from './thunks/fetchProducts';
export {
  addToCart,
  decrementFromCart,
  removeFromCart,
  removeAllFromCart,
  getTotalPrice,
};
export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export { store };
