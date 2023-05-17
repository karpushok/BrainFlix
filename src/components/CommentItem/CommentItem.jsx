import "../../styles/partials/_colors.scss"
import "../../styles/partials/_fonts.scss"
import React, {useState} from 'react'

function CommentItem(){
return (
<div className="commentlist__item">
    <div className="commentlist__item-profile"></div>
    <div className="commentlist__item-container">
        <div className="commentlist__item-container-header">
            <div className="commentlist__item-container-header-name"></div>
            <div className="commentlist__item-container-header-date"></div>
        </div>
    <div className="commentlist__item-paragraph"></div>
    </div>
</div>  
);

}

export default CommentItem;