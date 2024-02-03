import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';

const friendlyDashboard = () => {
  return (
    <Fragment>
      <Box>
        <Typography variant="h6" sx={{ textAlign: 'left' }} component={'h6'}>
          Manage Your Daily Operations from User Friendly Dashboard
        </Typography>
        <Typography mt={1} variant="body1" style={{ textAlign: 'left' }} component={'p'}>
          ePackBook Dashboard is a user friendly interface that helps you to analyze your business
          economical situation. Easy Navigation to operate ePckBook software. Enquiry Status
          (New/Under Process/Approved/Cancelled) with information. Track each and every steps of
          enquiry.
        </Typography>
      </Box>
      <Grid container style={{ py: 4 }}>
        <Grid item md={4} lg={4}>
          <Typography className="textLeft" mt={3} variant="h6" component={'h6'}>
            Statistic view of Enquiry
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Today Follow ups in No.
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Today Shiftings in No.
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Approved Enuiries in No.
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Today Surveys in No.
          </Typography>
        </Grid>

        <Grid item md={4} lg={4}>
          <Typography className="textLeft" mt={3} variant="h6" component={'h6'}>
            Upcoming Surveys & Follow Ups
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Upcoming surveys details – Name, Mobile No., Shifting From, Survey date & Time.
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Upcoming Follow Ups – Name, Mobile No., Last communication, Oral Quotations info etc.
          </Typography>
        </Grid>

        <Grid item md={4} lg={4}>
          <Typography className="textLeft" mt={3} variant="h6" component={'h6'}>
            Today Shifting & Enquiry Status
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Today Shifting – Name, Mobile No., Carrier Vehicles, Shifting From, Shifting To info.
          </Typography>
          <Typography className="textLeft" mt={1} variant="body1" component={'p'}>
            Enquiry Status – New (Name, Mobile No., Shifting From, Shifting To info. ) Under Process
            (Name, Mobile No., Shifting From, Last Communication, Quotation comment info.)
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default friendlyDashboard;
