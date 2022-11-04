import { Avatar } from "@mui/material";
import { red, blue } from "@mui/material/colors";
import React from "react";
import { IPost } from "../../data/constants";
import './Comments.scss';

const Comments: React.FC<IPost> = ( props ) => {

  function getRandomNumber(): number {
    return Math.floor(Math.random() * 30) + 50;
  }

  return(
    <div className='post-comment'>

      <div className='description-section'>
        <Avatar sx={{ bgcolor: red[500], width: 32, height: 32 }}>{props.username[0]}</Avatar>
        
        <div className='comment-content'>
          <div className='username'>{props.username}
            <span className='description-text'>{props.title}</span>
          </div>

          <div className='comment-statistics'>5d
            <span>Reply</span>
          </div>
        </div>
      </div>
          
      {props.comments.map((comment) => (
        <div className='description-section'>
          <Avatar sx={{ bgcolor: blue[500], width: 32, height: 32 }}>{comment.name[0]}</Avatar>
          
          <div className='comment-content'>
            <div className='username'>{comment.name.substring(0, comment.name.indexOf(' '))}
              <span className='description-text'>{comment.body.slice(0, getRandomNumber())}</span>
            </div>

            <div className='comment-statistics'>5d
              <span>Reply</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;