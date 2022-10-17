import React from "react";
import './HomePage.css';
import { Avatar } from "@mui/material";
import { red, grey } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const Post:React.FC = () => {
  return (
    <div className='posts'>
        <div className='post'>
          <div className='post-top'>
            <div className='post-profile'>
              <div>
                <Avatar sx={{ bgcolor: red[500], width: 32, height: 32 }}>R</Avatar>
              </div>
              <div className='post-left-padding'>profile_name</div>
              </div>
            <MoreHorizIcon sx={{ color: grey[800], height: 22 }}/>
          </div>

          <img src='selfie.webp' alt=''/>
          
          <div className='post-interactive'>
            <div>
              <FavoriteBorderIcon sx={{ fontSize: 26, marginRight: '16px' }}/>
              <ChatBubbleOutlineIcon sx={{ fontSize: 24, marginRight: '16px' }}/>
              <ShareIcon/>
            </div>
            <BookmarkBorderIcon sx={{ fontSize: 27 }}/>
          </div>
          <div className='post-left-padding'>5,584 likes</div>
          <div className='post-name'>
            <div>profile_name</div>
            <div className='post-name-description'>yay description</div>
          </div>
          <div className='post-view-comments'>View all 63 comments</div>
          <div className='post-upload-time'>10 HOURS AGO</div>

          <div className='post-new-comment'>
            <SentimentSatisfiedAltOutlinedIcon sx={{ fontSize: 28, paddingRight: '12px' }}/>
            <input type='text' placeholder='Add a comment...'/>
            <button className='post-comment-post'>Post</button>
          </div>
        </div>
      </div>
  );
}

export default Post;