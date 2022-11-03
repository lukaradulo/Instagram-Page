import React, { useEffect, useState } from "react";
import './ProfilePage.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from "@mui/material/colors";
import TableViewIcon from '@mui/icons-material/TableView';
import { IPost } from './../../data/constants'
import axios from "axios";

const ProfilePage:React.FC = () => {
  const [profilePosts, setProfilePosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3')
    .then(response => setProfilePosts(response.data))
    .catch(error => {console.log(error)})
  });

  return (
    <div className='profile-page'>
      <div className='profile-top-half'>
        <img src='profile_pic.webp' alt=''/>
        <div className='profile-info'>

          <div className='top-section'>
            <div className='profile-handle'>lukaradulo</div>
            <button className='edit-profile'>Edit profile</button>
            <SettingsIcon sx={{ fontSize: '28px', color: grey[700] }}/>
          </div>

          <div className='middle-section'>
            <div className='number-posts'><b>3</b> posts</div>
            <div className='number-followers'><b>108</b> followers</div>
            <div className='number-following'><b>51</b> following</div>
          </div>

          <div className='bottom-section'>
            <div className='profile-name'>Luka</div>
            <div className='profile-description'>hello, this is the desription of my profile</div>
          </div>

        </div>
      </div>

      <div className='profile-bottom-half'>
        <button>
          <TableViewIcon sx={{ color: grey[800], paddingRight: '8px', fontSize: 22 }}/>
          POSTS
        </button>
        <div className='profile-posts'>
          {
            profilePosts.map((post) => (
              <img src={post.url} alt=''/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
