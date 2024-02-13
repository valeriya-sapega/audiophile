import { createSlice } from '@reduxjs/toolkit';
import { fetchSingleProduct } from '../thunks/fetchProducts';
import { Product } from '../../interface/productsInterface';

interface SingleProductSliceStateProps {
  data: Product | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: SingleProductSliceStateProps = {
  data: null,
  isLoading: false,
  error: null,
};

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'An error occurred';
    });
  },
});

export const singleProductReducer = singleProductSlice.reducer;
