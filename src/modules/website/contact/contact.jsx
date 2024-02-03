import { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid, Typography, Box, Paper, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import GenericInput from '../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="Contact Us" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Typography variant="h5" component={'h5'}>
              Our Address
            </Typography>

            <Typography variant="h6" mt={2} component={'h6'}>
              Head Office
            </Typography>

            <Grid item md={12} sx={{ display: 'flex', mt: 2 }}>
              <Box className="socialIcons">
                <LocationOnIcon />
              </Box>
              <Typography variant="body1" mt={1} component={'p'}>
                Unit No. 537-538, Spaze iTech Park, Tower B3, Sector 49, Gurugram-122018, Haryana,
                INDIA
              </Typography>
            </Grid>

            <Grid item md={12} sx={{ display: 'flex', mt: 2 }}>
              <Box className="socialIcons">
                <EmailIcon />
              </Box>
              <Typography variant="body1" mt={1} component={'p'}>
                info@epackbook.in
              </Typography>
            </Grid>

            <Grid item md={12} sx={{ display: 'flex', mt: 2 }}>
              <Box className="socialIcons">
                <PhoneInTalkIcon />
              </Box>
              <Typography variant="body1" mt={1} component={'p'}>
                +91-9355771100
              </Typography>
            </Grid>

            <Divider />

            <Grid item md={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.3250714414475!2d77.04397191592119!3d28.41318693651325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229aba105daf%3A0xb3fa0d0a48c3dabf!2sePackBook!5e0!3m2!1sen!2sin!4v1697093922054!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 'none' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography variant="h5" component={'h5'}>
              Get in Touch
            </Typography>

            <Paper sx={{ p: 2 }} style={{ marginTop: '15px' }}>
              <Box>
                <GenericInput label={'Company Name'} />
              </Box>
              <Box mt={2}>
                <GenericInput label={'Contact Person'} />
              </Box>
              <Box mt={2}>
                <GenericInput label={'Business Mail'} />
              </Box>
              <Box mt={2}>
                <GenericInput label={'Mobile No'} />
              </Box>
              <Box mt={2}>
                <GenericInput label={'Message'} multiline rows={3} />
              </Box>

              <GenericLoadingButton sx={{ width: '100%', marginTop: '15px' }}>
                Send
              </GenericLoadingButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Contact;
