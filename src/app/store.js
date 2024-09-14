import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from '../features/restaurants/restaurantsSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    comments: commentsReducer,
  },
});
