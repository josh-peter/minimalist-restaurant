import React from "react";
import Comment from "../APIs/Comment";

function Comments({ comments }) {
  return (
    <div className="CommentCon">
    <h1 className="menuTitle">Our Users</h1>
      {comments.map((comment) => ( <Comment key={comment.id} comment = {comment}/>))}
    </div>
  );
}

export default Comments;
