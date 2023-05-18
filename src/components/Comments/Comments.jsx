import CommentItem from "../CommentItem/CommentItem";
import "../../styles/partials/_colors.scss"
import "../../styles/partials/_fonts.scss"
import React, {useState} from 'react'
import "./Comments.scss"

import avatar from "../../assets/images/Mohan-muruge.jpg"

function Comments(){
  return(
    <div className="comments">
        <div className="comments__counter"><h3>3 COMMENTS</h3></div>
        <div className="comments__input">
          <div className="comments__input-profile">
            <img src={avatar} alt="logo" className="comments__input-profile-avatar"/>
          </div>
          <div className="comments__input-container">
            <h2 className="comments__input-container-header">JOIN THE CONVERSATION</h2>
            <textarea className="comments__input-container-input"
                id="comment"
                name="comment"
                placeholder="Add a new comment"
                ></textarea>
            <button className="comments__input-container-button" type="submit">COMMENT</button>
          </div>
        </div>
        <div className="commentlist">
          <CommentItem/>
        </div>
    </div> 
    );
}


export default Comments;