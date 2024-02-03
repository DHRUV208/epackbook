import { Grid, Paper, styled, Box, Hidden } from '@mui/material';
import Header from './header';
import SideMenu from './side-menu';
import React from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}));

const DashboardLayout = ({ children }) => {
  const [drawerLeftOpen, setDrawerLeftOpen] = React.useState(false);
  const [drawerRightOpen, setDrawerRightOpen] = React.useState(false);
  const openLeftDrawer = () => {
    setDrawerLeftOpen(!drawerLeftOpen);
  };
  const openRightDrawer = () => {
    setDrawerRightOpen(!drawerRightOpen);
  };
  return (
    <Box sx={{ background: (theme) => theme.palette.primary.light }}>
      <Grid container>
        <Header
          openLeftDrawer={openLeftDrawer}
          drawerLeftOpen={drawerLeftOpen}
          openRightDrawer={openRightDrawer}
          drawerRightOpen={drawerRightOpen}
        />
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Hidden mdDown>
          <Grid item md={2}>
            <Item>
              <SideMenu />
            </Item>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardLayout;
