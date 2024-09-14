import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";


export default function Comment({ restaurantId }) {
    const comments = useSelector((state)=> selectComments(state, restaurantId));
    return (
        <div>
            {comments.map((comment) => (
                <li key={comment.commentId}>
                    <h2>{comment.comment}</h2>
                </li>
            ) )}
        </div>
    );
}