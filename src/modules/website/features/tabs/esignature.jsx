import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const esignature = () => {
  return (
    <Fragment>
      <Box>
        <Typography mt={2} variant="h6" sx={{ textAlign: 'left' }} component={'h6'}>
          eSignature
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          eSign: quotes or documents signed via web, App or in person
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          Looking for a simple way to collect signatures online and on the job? ePackBook has
          innovated and built an entire eSignature. The eSigned documents allow for authenticated
          tracking, and is the only legitimate eSign system.
        </Typography>
        <Typography mt={2} variant="subtitle1" component={'p'}>
          With ePackBook document tracking and authentication you can:
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>1. Request customers to sign quotes or estimates you send : </b>
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>2. Get any document eSigned in person on any device :</b>
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>3.Create fill & sign documents and share with clients via email or Whatsapp :</b>
        </Typography>

        <Typography mt={2} variant="subtitle1" component={'p'}>
          Now with eSignatures on ePackBook you can
        </Typography>

        <Typography mt={2} variant="body1" component={'p'}>
          <b>1. Save Time : </b> Document digitization allows you to easily transfer important
          information onto your document and stay organized without having to manually do anything.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>2. Go Paperless :</b> eSign assures that your entire business can be done from a
          computer, tablet, or phone.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>3. Retain Customers : </b> Enabling the option to have customers sign estimates, will
          help in lead to job turnover.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>4. Be More Professional : </b> Everyone knows that eSign is the new way to do business,
          be one with the professionals.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>5. Get any document eSigned in person on any device : </b>
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>6. Don’t pay for a third party eSign software : </b> ePackBook has it all, no need to
          pay for an eSign software.
        </Typography>
      </Box>
    </Fragment>
  );
};

export default esignature;
