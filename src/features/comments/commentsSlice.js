import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {},
  },
  reducers: {
    addComment: (state, action) => {
      const { restaurantId, comment } = action.payload;
      state.comments[restaurantId]
        ? state.comments[restaurantId].push(comment)
        : (state.comments[restaurantId] = [comment]);
    },
  },
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
export const { addComment } = commentsSlice.actions;
