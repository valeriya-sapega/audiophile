import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/fetchProducts';
import { Product } from '../../interface/productsInterface';

interface ProductsSliceStateProps {
  data: Product[] | [];
  isLoading: boolean;
  error: null | string;
}

const initialState: ProductsSliceStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'An error occurred';
    });
  },
});

export const productsReducer = productsSlice.reducer;
