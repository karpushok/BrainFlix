import React, { useState } from "react";
import "./CommentItem.scss"

function CommentItem({comment: commentItem}) { // Destructure properties from the commentItem object
    const {name, comment, timestamp} = commentItem
    const commentDate = new Date(timestamp).toLocaleDateString('en-GB') // Convert timestamp to a localized date string

  return (
    <div className="comment-list__item">
      <div className="comment-list__item-profile"></div>
      <div className="comment-list__item-container">
        <div className="comment-list__item-container-header">
          <div className="comment-list__item-container-name"><h3>{name}</h3></div> {/* Render the name of the commenter */}
          <div className="comment-list__item-container-date"><h4>{commentDate}</h4></div> {/* Render the formatted comment date */}
        </div>
        <div className="comment-list__item-paragraph"><p>{comment}</p></div> {/* Render the comment content */}
      </div>
    </div>
  );
}

export default CommentItem;
