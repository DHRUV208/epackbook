import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../../App.css';
import { useTheme } from '@mui/material';
const GenericMediaCard = (props) => {
  const { icon } = props;
  const theme = useTheme();
  return (
    <Card
      className="dashboardCard"
      sx={{
        background: theme.palette.primary.light,
        boxSizing: `1px solid ${theme.palette.primary.light}`
      }}
    >
      <Grid container spacing={2} sx={{ padding: '10px' }}>
        <Grid item md={4} xs={4}>
          <Box
            sx={{
              height: '70px',
              width: '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              color: theme.palette.primary.dark,
              borderRadius: '50%',
              fontSize: '1rem'
            }}
          >
            {icon}
          </Box>
        </Grid>

        <Grid item md={5} xs={6}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: '600', color: theme.palette.primary.dark, fontSize: '16px' }}
            component="div"
          >
            {props.heading}
          </Typography>
          <Typography
            variant="body2"
            color={(theme) => theme.palette.primary.dark}
            className="DashboardContent"
          >
            {props.text}
          </Typography>
        </Grid>
        <Grid item md={3} xs={2}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: '600', fontSize: '42px', color: theme.palette.primary.dark }}
            component="div"
          >
            {props.value}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
export default GenericMediaCard;
