import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { Fragment } from 'react';
import SubHeader from '../../../../common-components/page-elements/SubHeader';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';

const CheckoutScreen = () => {
  return (
    <Fragment>
      <SubHeader title={'Checkout'} />
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ px: 3 }}>
            <Typography variant="h6" mb={2}>
              Your Details
            </Typography>
            <GenericInput label={'Name'} sx={{ width: '90%' }} />
            <Typography variant="h6" my={2}>
              Subscription Details
            </Typography>
            <Typography variant="h6" component={'body2'} my={2}>
              Plan Name -
            </Typography>
            <Typography variant="h6" component={'body2'} my={2} ml={2} color={'#FF0000'}>
              epackBook Pro
            </Typography>
            <Box className="checoutPlanPrice">
              <Typography variant="h6" my={2} ml={2} color={'#01579B'}>
                6 Months <span style={{ color: '#5EC85E' }}>4500/-</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ px: 3 }}>
            <Typography variant="h6" mb={2}>
              Summery
            </Typography>
            <Box className="summerySideStyle">
              <Typography className="summrySideBText" variant="body1">
                Original Price
              </Typography>
              <Typography variant="body1" className="summrySideBText">
                6000/-
              </Typography>
            </Box>
            <Box className="summerySideStyle">
              <Typography variant="body1" className="summrySideBText">
                Discount Price
              </Typography>
              <Typography variant="body1" className="summrySideBText">
                4500/-
              </Typography>
            </Box>
            <Box className="summerySideStyle">
              <InputBase fullWidth placeholder="Enter Coupon Code" />
              <Button variant="text" color="secondary">
                Apply
              </Button>
            </Box>
            <Box className="summerySideStyle">
              <Typography variant="body1" className="summrySideBText">
                GST%
              </Typography>
              <Typography variant="body1" className="summrySideBText">
                450/-
              </Typography>
            </Box>
            <Box className="summerySideStyle">
              <Typography variant="h6" my={1} color={'#01579B'}>
                Total -
              </Typography>
              <Typography variant="h6" my={1} color={'#01579B'}>
                4900/-
              </Typography>
            </Box>
            <GenericLoadingButton sx={{ float: 'right', my: 2 }}>
              <span>Checkout</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default CheckoutScreen;
