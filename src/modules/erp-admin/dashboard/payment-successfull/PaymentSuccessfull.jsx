import { Box, Card, Grid, Paper, Typography } from '@mui/material';
import { Fragment } from 'react';
import SuccessImg from '../../../../../src/Assets/Images/successImg.svg';

const PaymentSuccessfull = () => {
  return (
    <Fragment>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={12} sx={{ alignItems: 'center' }}>
            <Box className="heading">
              <img src={SuccessImg} alt="image" />
              <Typography variant="h4" ml={2} color={'#72C31C'}>
                Payment Successfull !
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" my={1}>
                Thank you! Your payment of Rs.<span>4500</span> has been received.
              </Typography>
              <Typography variant="body1">Order ID : EPB-2351 | Transaction ID : 1235</Typography>
              <Typography variant="h6" my={2}>
                Payment Details{' '}
              </Typography>
            </Box>
            <Grid item xs={12} className="heading">
              <Card variant="outlined" sx={{ p: 2, width: '350px' }}>
                <Grid container spacing={1} className="heading">
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">Total Amount : ₹4500</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">Paid Via UPI : ₹4500</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Typography variant="body1" textAlign={'center'} my={2}>
              Please contact Us on our helpline no. 9355771100 for any query.{' '}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};
export default PaymentSuccessfull;
