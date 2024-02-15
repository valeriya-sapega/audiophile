import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../interface/productsInterface';

const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (category: string) => {
    const response = await axios.get(
      'https://audiophile-server.glitch.me/products'
    );

    const result = response.data.filter(
      (product: Product) => product.category === category
    );

    await pause(1000);

    return result;
  }
);

const fetchSingleProduct = createAsyncThunk(
  'product/fetch',
  async (id: string) => {
    const response = await axios.get(
      `https://audiophile-server.glitch.me/products/${id}`
    );

    await pause(1000);

    return response.data;
  }
);

const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchProducts, fetchSingleProduct };
