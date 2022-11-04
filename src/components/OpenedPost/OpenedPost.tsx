import React from 'react';
import Comments from './Comments';
import './OpenedPost.scss';
import { Avatar } from "@mui/material";
import { red, grey } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { IPost } from '../../data/constants';

interface IOpenedPost extends IPost {
  value: (childData: boolean) => void;
}

const OpenedPost: React.FC<IOpenedPost> = (props) => {
  function unfocusPost(this: any) {
    props.value(false);
  }

  return (
    <div className='opened-post-parent'>
      <div className='unfocusing-area' onClick={unfocusPost}></div>

      <div className='opened-post'>
        <img src={props.url} alt=''/>

        <div className='right-side'>
          <div className='profile-info'>
            <div className='name-and-picture'>
              <Avatar sx={{ bgcolor: red[500], width: 32, height: 32 }}>{props.username[0]}</Avatar>
              <div className='username'>{props.username}</div>
            </div>
            <MoreHorizIcon sx={{ color: grey[800], height: 22 }}/>
          </div>

          <Comments id={props.id} title={props.title} url={props.url} username={props.username} comments={props.comments} />

          <div>
            <div className='post-info'>
              <div className='post-interactive'>
                <div>
                  <FavoriteBorderIcon sx={{ fontSize: 26, marginRight: '16px' }}/>
                  <ChatBubbleOutlineIcon sx={{ fontSize: 24, marginRight: '16px' }}/>
                  <ShareIcon/>
                </div>
                <BookmarkBorderIcon sx={{ fontSize: 27 }}/>
              </div>

              <div>{Math.floor(Math.random() * 1000)} likes</div>
              <div className='post-upload-time'>10 HOURS AGO</div>
            </div>
            <div className='new-comment'>
              <SentimentSatisfiedAltOutlinedIcon sx={{ fontSize: 28, paddingRight: '12px' }}/>
              <input type='text' placeholder='Add a comment...'/>
              <button className='post-comment-post'>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenedPost;