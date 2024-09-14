import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './commentsSlice';

export function CommentForm() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment) return;
    dispatch(
      addComment({
        commentId: Date.now(),
        comment,
      })
    );
    setComment('');
  }

  return (
    <form>
      <input
        placeholder="Comment"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      ></input>
      <button onClick={handleSubmit}>Add Comment</button>
    </form>
  );
}
