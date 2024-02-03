import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const quotation = () => {
  return (
    <Fragment>
      <Box>
        <Typography variant="h6" mt={2} sx={{ textAlign: 'left' }} component={'h6'}>
          Quotation
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          Getting quotes for your clients quickly is important. With ePackBook, you can easily
          generate quotes and send them out to your customers in customizable emails or in Whatsapp
          as well.
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>1. Preset : </b>Preset emails means you do not have to write a new email for each
          client. Just hit send, and a preset email will be sent
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>2. Customizable : </b>Easily change the layout and content of your emails
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>3.Personalize :</b> Use the available commands to automatically enter information into
          the emails, such as the client’s name
        </Typography>
        <Typography variant="body1" mt={2} component={'p'}>
          <b>4.Deadline : </b> Want to set hear back from you clients within a certain timeframe?
          Set an expiration date for the quote
        </Typography>
      </Box>
    </Fragment>
  );
};

export default quotation;
