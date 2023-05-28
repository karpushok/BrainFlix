import "./CommentItem.scss";
import { transformDateAgo } from "../../utils/utils";
import deleteImage from "../../assets/icons/delete.png";

function CommentItem({ comment: commentItem, onDelete }) {
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
          <div className="comment-item__date">
            <h4>{transformDateAgo(timestamp)}</h4>
          </div>
        </div>
        <div className="comment-item__paragraph">
          <p>{comment}</p>
        </div>
        <button className="comment-item__button" onClick={onDelete}>
          <img src={deleteImage} alt="delete" className="comment-item__delete" />
        </button>
      </div>
    </div>
  );
}

export default CommentItem;
