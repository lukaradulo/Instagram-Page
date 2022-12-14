import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import AccountMenu from '../ui/AccountMenu';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <Link className='nav-title' to='/' style={{ textDecoration: 'none' }}><div>Instagram</div></Link>

        <div className='nav-searchbar'>
          <SearchIcon className='nav-search-icon' sx={{ color: grey[500] }} />
          <input type='text' placeholder='Search'/>
        </div>

        <div className='nav-icons'>
          <div className='nav-icon' style={{ height: '29px', width: '29px' }}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <CottageOutlinedIcon sx={{ fontSize: 29, textDecoration: 'none' }}/>
            </Link>
            <div className='icon-name'>Home</div>
          </div>
          <div className='nav-icon'>
            <WhatsAppIcon sx={{ fontSize: 28 }}/>
            <div className='icon-name'>Chats</div>
          </div>
          <div className='nav-icon'>
            <AddBoxOutlinedIcon sx={{ fontSize: 28 }}/>
            <div className='icon-name'>New Post</div>
          </div>
          <div className='nav-icon'>
            <ExploreOutlinedIcon sx={{ fontSize: 28 }}/>
            <div className='icon-name'>Explore</div>
          </div>
          <div className='nav-icon'>
            <FavoriteBorderIcon sx={{ fontSize: 28 }}/>
            <div className='icon-name'>Likes</div>
          </div>
          <AccountMenu/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;