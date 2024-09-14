import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestaurant: (state, action) => {
      const {restaurantId, name, location, comment} = action.payload; // TODO: 
      const newRestaurant = {
        restaurantId,
        name,
        location,
        comments: [],
      };
      state.restaurants.push(newRestaurant);
    },
    addComment: (state, action) => {
      const {restaurantId, comment} = action.payload;
      state.restaurants[restaurantId].comments.push(comment);
    }
  },
  // extraReducers: {
  //   'comments/addComment' : (state, action) => {
  //     const { restaurantId, comment } = action.payload;

  //   }
  // }
});

export const selectRestaurants = (state) => state.restaurants.restaurants;
export const { addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
