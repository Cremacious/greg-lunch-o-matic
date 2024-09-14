import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestaurant: (state, action) => {
      const { restaurantId, name, location, comment } = action.payload; // TODO: Allow comments to be added to the restaurant
      const newRestaurant = {
        restaurantId,
        name,
        location,
      };
      state.restaurants.push(newRestaurant);
    },
  },
});

export const selectRestaurants = (state) => state.restaurants.restaurants;
export const { addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
