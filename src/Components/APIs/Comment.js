import React from "react";
import "../APIs/Comment.css";

function Comment({ comment }) {
  return (
    <div className="Comment">
        <ul>
          <li><b>Name:</b> {comment.name}</li>
          <p><b>Email:</b>{comment.email}</p>
        </ul>
    </div>
  );
}

export default Comment;
