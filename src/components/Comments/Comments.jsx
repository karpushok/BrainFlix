import React, {useEffect, useState} from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import {deleteData, postData} from "../../utils/utils";
import CommentItem from "../CommentItem/CommentItem";
import "./Comments.scss";

function Comments({ currentVideo }) {
  const [comments, setComments] = useState(currentVideo.comments);

  const [inputText, setInputText] = useState("");
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    setComments(currentVideo.comments);
    // no need for extra deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideo.comments]);

  const handleInputTextChange = (e) => {
    const textValue = e.target.value;
    setHasChanged(false);
    setInputText(textValue);
  };

  const handleButtonClick = () => {
    setHasChanged(true);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const isValidFrom = hasChanged && inputText;

    if (isValidFrom) {
      postData(currentVideo.id, inputText).then((newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]);
        setInputText("");
        setHasChanged(false);
      });
    }
  };

  const handleCommentDelete = async (commentId) => {
    const isSure = window.confirm("Are you sure you want to delete?");

    if (!isSure) return;

    deleteData(currentVideo.id, commentId).then((deletedComment) => {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    });
  };

  comments.sort((a, b) => b.timestamp - a.timestamp);

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
        <form
          className="comments__input-container"
          onSubmit={handleCommentSubmit}
        >
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
        </form>
      </div>
      <div className="comment-list">
        {comments.map((comment) => {
          return (
            <CommentItem
              comment={comment}
              key={comment.id}
              onDelete={() => handleCommentDelete(comment.id)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Comments;
