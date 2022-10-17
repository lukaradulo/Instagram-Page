import React from "react";
import './ProfilePage.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from "@mui/material/colors";

const ProfilePage:React.FC = () => {
  return (
    <div className='profile-page'>
      <img src='profile_pic.webp' alt=''/>
      <div className='profile-info'>

        <div className='top-section'>
          <div className='profile-handle'>lukaradulo</div>
          <button className='edit-profile'>Edit profile</button>
          <SettingsIcon sx={{ fontSize: '28px', color: grey[700] }}/>
        </div>

        <div className='middle-section'>
          <div className='number-posts'><b>2</b> posts</div>
          <div className='number-followers'><b>108</b> followers</div>
          <div className='number-following'><b>51</b> following</div>
        </div>

        <div className='bottom-section'>
          <div className='profile-name'>Luka</div>
          <div className='profile-description'>hello, this is the desription of my profile</div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
