import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';

const pages = [
  {
    url: '/',
    page: 'Home',
    color: 'white'
  },
  {
    url: '/features',
    page: 'Features'
  },
  {
    url: '/pricing',
    page: 'Pricing'
  },
  {
    url: '/contact',
    page: 'Contact Us'
  },
  {
    url: '',
    page: 'Blog'
  },
  {
    url: '/auth',
    page: 'Packers Login'
  }
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ paddingLeft: 5, paddingRight: 5, py: 0.5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((item, index) => (
                <Link to={item?.url} key={index}>
                  <MenuItem
                    sx={{ color: '#000', textDecoration: 'none' }}
                    key={index}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center" color={item?.color}>
                      {item?.page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ width: '200px' }}>
            <img
              width={'100%'}
              src="https://www.epackbook.in/static/media/logo.46af6889c01c7ffe7658.png"
              alt="logo"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
            {pages.map((item, index) => (
              <MenuItem className="menuClass" key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to={item?.url}>{item?.page}</NavLink>
                </Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
