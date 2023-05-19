import React, { useState } from "react";
import "./CommentItem.scss"

function CommentItem({comment: commentItem}) {
    const {name, comment, timestamp} = commentItem
    const commentDate = new Date(timestamp).toLocaleDateString('en-GB')

  return (
    <div className="comment-list__item">
      <div className="comment-list__item-profile"></div>
      <div className="comment-list__item-container">
        <div className="comment-list__item-container-header">
          <div className="comment-list__item-container-name"><h3>{name}</h3></div>
          <div className="comment-list__item-container-date"><h4>{commentDate}</h4></div>
        </div>
        <div className="comment-list__item-paragraph"><p>{comment}</p></div>
      </div>
    </div>
  );
}

export default CommentItem;
