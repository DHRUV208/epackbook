import { Box, Grid, Paper, Typography } from '@mui/material';
import { Fragment } from 'react';
import FailedImg from '../../../../Assets/Images/errorImg.svg';

const PaymentFailed = () => {
  return (
    <Fragment>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="heading">
              <img src={FailedImg} alt="image" />
              <Typography variant="h4" ml={2} color={'#FF0B0B'}>
                Payment Failed !
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" my={1}>
                Something went wrong ! Please try again .
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};
export default PaymentFailed;
