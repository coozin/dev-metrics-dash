import { configureStore } from '@reduxjs/toolkit';
import reviewTimeReducer from './reviewTimeSlice';

export default configureStore({
  reducer: {
    reviewTime: reviewTimeReducer,
  },
});
