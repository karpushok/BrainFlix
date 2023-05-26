import CommentItem from "../CommentItem/CommentItem";
import React, { useState } from "react";
import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments({ currentVideo }) {
  const comments = currentVideo.comments;
  const [inputText, setInputText] = useState("");
  const [hasChanged, setHasChanged] = useState(false);

  const handleInputTextChange = (e) => {
    const textValue = e.target.value;
    setHasChanged(false);
    setInputText(textValue);
  };

  const handleButtonClick = () => {
    setHasChanged(true);
  };

  //TODO
  /**
   * axios
   **/

  return (
    <section className="comments">
      <div className="comments__counter">
        <h3>{comments.length} Comments</h3>
      </div>
      <h2 className="comments__header">JOIN THE CONVERSATION</h2>
      <div className="comments__input">
        <div className="comments__input-profile">
          <img src={avatar} alt="logo" className="comments__input-avatar" />
        </div>
        <div className="comments__input-container">
          {/* <label htmlFor=""></label> */}
          <textarea
            className={
              hasChanged
                ? "comments__input-input--changed"
                : "comments__input-input"
            }
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            value={inputText}
            onChange={handleInputTextChange}
          />
          <button
            className={"comments__input-button"}
            type="submit"
            onClick={handleButtonClick}
          >
            COMMENT
          </button>
        </div>
      </div>
      <div className="comment-list">
        {comments.map((comment) => {
          return <CommentItem comment={comment} key={comment.id} />;
        })}
      </div>
    </section>
  );
}

export default Comments;
