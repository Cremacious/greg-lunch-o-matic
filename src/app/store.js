import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import restaurantsReducer from '../features/restaurants/restaurantsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    restaurants: restaurantsReducer,
  },
});
