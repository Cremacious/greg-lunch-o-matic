import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestaurant: (state, action) => {
      const { restaurantId, name, location, comment} = action.payload; // TODO: Allow comments to be added to the restaurant
      const newRestaurant = {
        restaurantId,
        name,
        location,
        comments: [comment]
      };
      state.restaurants.push(newRestaurant);
    },
    newComment: (state, action) => {
      const { restaurantId, commentId, comment } = action.payload;
      const restaurant = state.restaurants.find((restaurant) => restaurant.restaurantId === restaurantId);
      if (restaurant) {
        restaurant.comments.push({
          commentId,
          comment,
        });
      }
    }
  },
});

export const selectRestaurants = (state) => state.restaurants.restaurants;
export const { addRestaurant } = restaurantsSlice.actions;
export const { newComment } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
