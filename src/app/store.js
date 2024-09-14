import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import restaurantsReducer from '../features/restaurants/restaurantsSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    restaurants: restaurantsReducer,
    comments: commentsReducer,
  },
});
