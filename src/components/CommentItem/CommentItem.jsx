import React, { useState } from "react";
import "./CommentItem.scss";
import { getDate, transformDateAgo } from "../../utils/utils";

function CommentItem({ comment: commentItem }) {
  // Destructure properties from the commentItem object
  const { name, comment, timestamp } = commentItem;

  return (
    <div className="comment-item">
      <div className="comment-item__profile"></div>
      <div className="comment-item__container">
        <div className="comment-item__header">
          <div className="comment-item__name">
            <h3>{name}</h3>
          </div>
          {/* Render the name of the commenter */}
          <div className="comment-item__date">
            {/* <h4>{getDate(timestamp)}</h4> */}
            <h4>{transformDateAgo(timestamp)}</h4>
          </div>
          {/* Render the formatted comment date */}
        </div>
        <div className="comment-item__paragraph">
          <p>{comment}</p>
        </div>
        {/* Render the comment content */}
      </div>
    </div>
  );
}

export default CommentItem;
