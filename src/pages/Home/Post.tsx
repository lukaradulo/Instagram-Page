import React, { useEffect, useState } from "react";
import './HomePage.scss';
import { Avatar } from "@mui/material";
import { red, grey } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { IPost, IComment } from "../../data/constants";
import OpenedPost from "../../components/OpenedPost/OpenedPost";
import axios from "axios";

const Post:React.FC<IPost> = ( props ) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
    .then(response => setComments(response.data))
    .catch(error => {console.log(error)})
    // eslint-disable-next-line
  }, []);

  const focusPost = (childData: boolean) => {
    setIsFocused(childData);
  };

  return (
    <div className='posts'>
      <div className='post'>
        <div className='post-top'>
          <div className='post-profile'>
            <div>
              <Avatar sx={{ bgcolor: red[500], width: 32, height: 32 }}>{props.username[0]}</Avatar>
            </div>
            <div className='post-left-padding'>{props.username}</div>
            </div>
          <MoreHorizIcon sx={{ color: grey[800], height: 22 }}/>
        </div>

        <img src={props.url} alt=''/>
        
        <div className='post-interactive'>
          <div>
            <FavoriteBorderIcon sx={{ fontSize: 26, marginRight: '16px' }}/>
            <ChatBubbleOutlineIcon sx={{ fontSize: 24, marginRight: '16px' }}/>
            <ShareIcon/>
          </div>
          <BookmarkBorderIcon sx={{ fontSize: 27 }}/>
        </div>

        <div className='post-info'>
          <div>{Math.floor(Math.random() * 1000)} likes</div>
          <div className='post-name'>
            <div>{props.username}</div>
            <div className='post-name-description'>{props.title}</div>
          </div>
          <div className='post-view-comments' onClick={() => focusPost(true)}>View all {comments.length} comments</div>
          <div className='post-upload-time'>10 HOURS AGO</div>
        </div>

        <div className='post-new-comment'>
          <SentimentSatisfiedAltOutlinedIcon sx={{ fontSize: 28, paddingRight: '12px' }}/>
          <input type='text' placeholder='Add a comment...'/>
          <button className='post-comment-post'>Post</button>
        </div>
      </div>

      {isFocused ? <OpenedPost id={props.id} title={props.title} url={props.url} username={props.username} comments={comments} value={focusPost}/> : <div></div>}

    </div>
  );
}

export default Post;