import React from "react";
import './OpenedPost.css';

const Comments: React.FC = () => {
  return(
    <div>
      <div className='description-section'>
        <div className='profile-picture'></div>
        <div className='description-text'></div>
      </div>
      <div className='comments'>
        <div className='profile-picture'></div>
        <div className='comment-info'>
          <div className='name-and-content'></div>
          <div className='comment-statistics'></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;