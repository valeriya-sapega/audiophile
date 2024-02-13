import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interface/productsInterface';

export interface CartItem extends Product {
  amount: number;
}

interface Cart {
  cartItems: CartItem[];
  totalPrice: number;
  totalAmount: number;
}

const localStorageData = localStorage.getItem('data');

const cartItems: CartItem[] =
  localStorageData !== null ? JSON.parse(localStorageData) : [];

const initialState: Cart = {
  cartItems: cartItems,
  totalPrice: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.cartItems[productIndex].amount++;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }

      localStorage.setItem(
        'data',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    decrementFromCart(state, action) {
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state.cartItems[productIndex].amount > 1) {
        state.cartItems[productIndex].amount -= 1;
      } else if (state.cartItems[productIndex].amount === 1) {
        const updatedCart = state.cartItems.filter((product) => {
          return product.id !== action.payload.id;
        });
        state.cartItems = updatedCart;
      }

      localStorage.setItem(
        'data',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    removeFromCart(state, action) {
      const updatedCart = state.cartItems.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.cartItems = updatedCart;
      localStorage.setItem(
        'data',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    removeAllFromCart(state) {
      state.cartItems = [];
      localStorage.clear();
    },
    getTotalPrice(state) {
      const totalData = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.quantity += amount;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.totalAmount = totalData.quantity;
      state.totalPrice = parseFloat(totalData.total.toFixed(2));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  decrementFromCart,
  removeFromCart,
  removeAllFromCart,
  getTotalPrice,
} = cartSlice.actions;
