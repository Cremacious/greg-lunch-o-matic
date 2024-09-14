import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";

export default function Comment() {
    const card = useSelector(selectComments);
    return (
        <div>
            {card.map((comment) => (
                <li key={comment.commentId}>
                    <h2>{comment.comment}</h2>
                </li>
            ) )}
        
        </div>
    );
}