import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Box,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  Grid
} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import NestedList from './nested-list';
import { MENU_ITENS } from '../constants';
import GenericDrawer from './genericDrawer';
import RightDrawerChild from '../../modules/erp-admin/child-components/RightDrawerChild';
import LogoImage from '../../Assets/Logos/epackbookLogoWhite.svg';
import CustomerLogo from '../../Assets/Images/user.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ drawerLeftOpen, openLeftDrawer, drawerRightOpen, openRightDrawer }) => {
  const {
    company: { companyDetails }
  } = useSelector((state) => state);
  const menuId = 'main-header-menu';
  const mobileMenuId = 'main-header-menu-mobile';
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleNotificationMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const rightDrawerOpener = () => {
    handleMenuClose();
    openRightDrawer();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      sx={{ maxWidth: '500px' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
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
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem sx={{ textWrap: 'wrap' }}>
        <ListItemIcon>
          <NotificationsIcon fontSize="small" />
        </ListItemIcon>
        Lorem Ipsum welcome onboard gghfghgfhfgh
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <NotificationsIcon fontSize="small" />
        </ListItemIcon>
        Lorem Ipsum welcome onboard
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleNotificationMenuOpen}>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={rightDrawerOpener}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={openLeftDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <Link to="/erp">
              <img src={LogoImage} alt="logo" style={{ width: '180px' }} />
            </Link>
          </Hidden>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <img className="customerLogo" src={CustomerLogo} alt={CustomerLogo} />
            <Typography variant="h6">{companyDetails.companyName}</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Hidden mdDown>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={rightDrawerOpener}
            >
              <AccountCircle />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Hidden mdUp>
        <GenericDrawer position="left" open={drawerLeftOpen} closeHandler={openLeftDrawer}>
          <Grid
            container
            sx={{ background: (theme) => theme.palette.primary.dark, padding: '5px' }}
          >
            <img src={LogoImage} alt="logo" />
          </Grid>
          <NestedList items={MENU_ITENS} />
        </GenericDrawer>
      </Hidden>
      <GenericDrawer
        position="right"
        open={drawerRightOpen}
        closeHandler={rightDrawerOpener}
        className="right-drawer"
      >
        <RightDrawerChild />
      </GenericDrawer>
    </Box>
  );
};

export default Header;
