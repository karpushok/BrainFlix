import React, { useState } from "react";

function CommentItem({comment: commentItem}) {
    const {name, comment, timestamp} = commentItem
    
    const commentDate = new Date(timestamp).toLocaleDateString('en-GB')

  return (
    <div className="commentlist__item">
      <div className="commentlist__item-profile"></div>
      <div className="commentlist__item-container">
        <div className="commentlist__item-container-header">
          <div className="commentlist__item-container-header-name"><h3>{name}</h3></div>
          <div className="commentlist__item-container-header-date"><h4>{commentDate}</h4></div>
        </div>
        <div className="commentlist__item-paragraph"><p>{comment}</p></div>
      </div>
    </div>
  );
}

export default CommentItem;
