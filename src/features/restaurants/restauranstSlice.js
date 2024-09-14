import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestaurant: (state, action) => {
      const { id, name, location, comments } = action.payload;
      const newRestaurant = {
        id,
        name,
        location,
        comments,
      };
      state.restaurants.push(newRestaurant);
    },
  },
});

export const selectRestaurants = (state) => state.restaurants.restaurants;
export const { addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
