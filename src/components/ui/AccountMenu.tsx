import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './../Navbar/Navbar.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const AccountMenu:React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='account-menu'>
      <button onClick={handleClick}>
        <img src='profile_pic.webp' alt='profile' />
      </button>
      <Menu 
      anchorEl={anchorEl}
      open={open} 
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 5px rgba(0,0,0,0.10))',
          marginTop: 1.5,
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      MenuListProps={{ disablePadding:true }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to='/profile' className='menu-item' style={{ textDecoration: 'none', color: 'rgb(63, 63, 63)'}}>
          <MenuItem className='menu-item'
          sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, \'Roboto\', sans-serif',
            fontSize: '14px',
            padding: '10px 120px 11px 14px'
          }}>
            <AccountCircleOutlinedIcon sx={{ marginRight: '8px', width: '20px' }}/> Profile
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default AccountMenu;