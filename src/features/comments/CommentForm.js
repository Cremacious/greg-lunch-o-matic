import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newComment } from '../restaurants/restaurantsSlice';
import { currentDate, newCommentId } from '../../utilities/dateConverter';

export function CommentForm({ restaurantId }) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newComment({ restaurantId, commentId: newCommentId, commentDate: currentDate, comment }));
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          className="form-control"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Comment
      </button>
    </form>
  );
}