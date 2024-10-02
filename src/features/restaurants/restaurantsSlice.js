import { createSlice } from '@reduxjs/toolkit';
import { currentDate, newCommentId } from '../../utilities/dateConverter';
import { restaurantData } from '../../app/data';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    // restaurants: [],
    restaurants: restaurantData,
  },
  reducers: {
    addRestaurant: (state, action) => {
      const { restaurantId, name, location, comment} = action.payload; // TODO: Allow comments to be added to the restaurant
      const newComment = {
        restaurantId,
        commentId: newCommentId,
        commentDate: currentDate,
        comment,
      }
      const newRestaurant = {
        restaurantId,
        name,
        location,
        comments: [newComment]
      };
      state.restaurants.push(newRestaurant);
    },
    newComment: (state, action) => {
      const { restaurantId, commentId, commentDate, comment } = action.payload;
      const restaurant = state.restaurants.find((restaurant) => restaurant.restaurantId === restaurantId);
      if (restaurant) {
        restaurant.comments.push({
          restaurantId,
          commentId,
          commentDate,
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
