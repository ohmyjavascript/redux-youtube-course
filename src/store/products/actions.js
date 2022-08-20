import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/FetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

export const saveProductToDB = createAsyncThunk(
  'products/saveProduct',
  async (post) => {
    const response = await axios.post(
      'https://fakestoreapi.com/products',
      post
    );
    return { ...post, id: response.data.id };
  }
);
