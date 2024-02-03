import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const powerfulReports = () => {
  return (
    <Fragment>
      <Box>
        <Typography mt={2} variant="h6" sx={{ textAlign: 'left' }} component={'h6'}>
          Powerful Reports
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          ePackBook Reports allow you to generate custom reports by date range for many operation
          and transactional types of data including Payments, Referrals, Claims, and even
          Commissions paid.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>1. Automatic Updates : </b>Whenever a payment is made or a referral sent, ePackBook
          will automatically add the event to your reports
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>2. Sort by Date : </b>Make finding the report you need simple by choosing to look only
          at reports made within a certain timeframe
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>3. Sort by Type : </b> ePackBook automatically sorts reports based on what was
          reported, making it easy to find what you need
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>4.Download Reports :</b> Download any and all reports as PDFs and Excel compatible
          CSVs.
        </Typography>
      </Box>
    </Fragment>
  );
};

export default powerfulReports;
