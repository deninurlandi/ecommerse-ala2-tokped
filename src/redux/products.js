import { configureStore } from '@reduxjs/toolkit';
import productsReduser from './action/productsSlice';

const products = configureStore({
  reducer: { products: productsReduser },
});
export default products;
