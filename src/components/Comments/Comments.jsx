import CommentItem from "../CommentItem/CommentItem";

function Comments(){
    <div className="comments">
        <div className="comments__counter"></div>
        <div className="comments__input">
          <div className="comments__input-profile"></div>
          <h2 className="comments__input-header">JOIN THE CONVERSATION</h2>
          <input className="comments__input-input"></input>
          <button className="comments__input-button"></button>
        </div>
        <div className="commentlist">
          <CommentItem/>
        </div>
    </div> 
}


export default Comments;