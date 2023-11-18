import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
