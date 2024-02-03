import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const customerModule = () => {
  return (
    <Fragment>
      <Box>
        <Typography mt={2} variant="h6" sx={{ textAlign: 'left' }} component={'h6'}>
          Client Management
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          A client database for a packers and movers company can have the following features:
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>1.Contact Information : </b>Storing client's contact information, including name,
          address, phone number, and email.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>2. Move Details : </b>Recording information about the client's move, including pickup
          and delivery locations, date, time, and items being moved.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>3.Payment History : </b> Tracking client's payment history, including invoices, payment
          methods, and payment status.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>4. Communication Logs :</b> Keeping a record of all communication with the client,
          including email, phone calls, and in-person meetings.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>5. Feedback and Ratings : </b> Recording client feedback and ratings, which can be used
          for quality control and continuous improvement.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>6. Service History :</b> Keeping a record of all services provided to the client,
          including dates and type of services.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>7. Search and Filtering : </b> Ability to
        </Typography>
      </Box>
    </Fragment>
  );
};

export default customerModule;
