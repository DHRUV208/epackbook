import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

function enquiryManagement() {
  return (
    <Fragment>
      <Box>
        <Typography variant="h6" sx={{ textAlign: 'left' }} component={'h6'}>
          ePackBook - Enquiry Management - Track enquiries & Go ahead
        </Typography>
        <Typography mt={1} variant="subtitle1" style={{ textAlign: 'left' }} component={'p'}>
          Easy ways to manage all packers and movers enquiries on single platforms
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>1.Lead generation and tracking : </b>
          The ability to capture and manage inquiries from potential customers.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>2.Customer database :</b>A database to store and manage customer information, including
          contact details, inquiry details, and previous interactions.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>
            3. Inquiry categorization : A system to categorize and prioritize inquiries based on
            specific criteria.
          </b>
          The ability to capture and manage inquiries from potential customers.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>4. Automated follow-up : </b>
          The ability to set up automated email or SMS follow-up sequences for inquiries that
          haven't been addressed.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>5. Quotation management : </b>
          The ability to create and manage quotes for potential customers, including the ability to
          compare quotes from different packers and movers.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>6. Booking management : </b>
          The ability to manage bookings and scheduling for confirmed moves.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>7. Customer communication : </b>
          The ability to communicate with customers through multiple channels, including
          email,SMS,and phone.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>8. Reporting and analytics : </b>
          The ability to generate reports and analytics on inquiries, quotes, bookings, and customer
          interactions to help optimize the process.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>9. Integration with other systems : </b>
          The ability to integrate with other systems, such as accounting, customer relationship
          management (CRM), and transportation management systems (TMS).
        </Typography>
      </Box>
    </Fragment>
  );
}

export default enquiryManagement;
