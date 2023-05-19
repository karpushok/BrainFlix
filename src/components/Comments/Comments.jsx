import CommentItem from "../CommentItem/CommentItem";
import React, { useState } from "react";
import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments({currentVideo}) {
  const comments = currentVideo.comments
  
  return (
    <div className="comments">
      <div className="comments__counter">
        <h3>3 Comments</h3> 
      </div>
      <h2 className="comments__header">JOIN THE CONVERSATION</h2>
      <div className="comments__input">
        <div className="comments__input-profile">
          <img
            src={avatar}
            alt="logo"
            className="comments__input-avatar"
          />
        </div>
        <div className="comments__input-container">
          <textarea
            className="comments__input-container-input"
            id="comment"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
          <button className="comments__input-container-button" type="submit">
            COMMENT
          </button>
        </div>
      </div>
      <div className="commentlist">
       {comments.map((comment) => {
        return (
          <CommentItem comment={comment} key={comment.id}/>
        )
       })}
      </div>
    </div>
  );
}

export default Comments;
