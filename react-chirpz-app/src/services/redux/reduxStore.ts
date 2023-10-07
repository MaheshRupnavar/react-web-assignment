import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import dataSlice from './dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice,
    loading: loadingSlice,
  },
});
