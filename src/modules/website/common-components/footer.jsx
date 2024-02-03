import { Box, Grid, Typography, Container, Divider } from '@mui/material';
import { Fragment } from 'react';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import GenericDivider from '../../../common-components/form-elements/genericDivider';

const footer = () => {
  return (
    <Fragment>
      <Box style={{ background: '#012b5f', color: 'white', paddingBottom: '15px' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={9}>
              <Typography variant="subtitle1" component={'h6'}>
                Hey! Are You Packers & Movers? We have a solution to manage your business online.
              </Typography>
            </Grid>
            <Grid item md={3} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <GenericLoadingButton sx={{ float: 'right' }}>
                GET A FREE ACCOUNT
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container py={3} spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <Box className="footerCards">
              <Box className="footerInners">
                <Typography variant="body1" fontWeight={600}>
                  WHAT WE DO
                </Typography>
              </Box>
              <GenericDivider />
              {/* <Divider /> */}
              <Box className="footerInners">
                <Typography variant="body1" component={'p'}>
                  ePackBook is a powerfull software to manage relocation business online. ePackBook
                  allows their user to manage all enquiries, Notify survey date & Time, Follow ups
                  reminder, Create and Send Quotations in stylish tamplets, Jobs reminder, Download
                  Reports, Manage customers profile & Their Moves and many more
                </Typography>
                <Typography sx={{ my: 1, color: '#012c60', cursor: 'pointer' }}>
                  <Link className="txt-none" to={'/about-us'}>
                    Read more...
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Box className="footerCards">
              <Box className="footerInners">
                <Typography variant="body1" fontWeight={600}>
                  KEEP IN TOUCH
                </Typography>
              </Box>
              <GenericDivider />
              <Box className="footerInners">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box className="socialIcons">
                    <FacebookOutlinedIcon />
                  </Box>
                  <Box className="socialIcons">
                    <LinkedInIcon />
                  </Box>
                  <Box className="socialIcons">
                    <TwitterIcon />
                  </Box>
                </Box>
                {/* <Typography variant="body1" component={'p'}>
                        ePackBook is a powerfull software to manage relocation business online. ePackBook allows their user to manage all enquiries, Notify survey date & Time, Follow ups reminder, Create and Send Quotations in stylish tamplets, Jobs reminder, Download Reports, Manage customers profile & Their Moves and many more...
                        </Typography> */}
                <Typography mt={1} variant="body1" component={'h6'}>
                  Contact ePackBook
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'h6'}>
                  <Link className="txt-none" to={'/contact'}>
                    <b>Contact Us</b>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Box className="footerCards">
              <Box className="footerInners">
                <Typography variant="body1" fontWeight={600}>
                  DOCUMENTATION & SUPPORT
                </Typography>
              </Box>
              <GenericDivider />
              <Box className="footerInners">
                <Typography variant="body1" component={'p'}>
                  How to use ePackBook:
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  <Link className="txt-none" to={'/knowledgeBase-page'}>
                    <b>ePackBook Support</b>
                  </Link>
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  Developers? Leads Providers?
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  ePackBook Terms & Privacy
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  <Link className="txt-none" to={'/terms-of-services'}>
                    <b>Terms of Service</b>
                  </Link>
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  <Link className="txt-none" to={'/privacy-policy'}>
                    <b>Privacy Policy</b>
                  </Link>
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  <Link className="txt-none" to={'/refund-policy'}>
                    <b>Refund Policy</b>
                  </Link>
                </Typography>
                <Typography mt={1} variant="subtitle1" component={'p'}>
                  Contact Support
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Box className="footerCards">
              <Box className="footerInners">
                <Typography variant="body1" fontWeight={600}>
                  EPACKBOOK ADDRESS
                </Typography>
              </Box>
              <GenericDivider />
              <Box className="footerInners">
                <Typography variant="body1" component={'p'}>
                  Unit No. 537-538, Spaze iTech Park, Tower B3, Sector 49, Gurugram-122018, Haryana,
                  INDIA
                </Typography>
                <Typography variant="body1" mt={2} component={'p'}>
                  Support- 9355771100
                </Typography>
                <Typography variant="body1" mt={2} component={'p'}>
                  info@epackbook.in
                </Typography>
                <Typography variant="body1" mt={2} component={'p'}>
                  <Link className="txt-none" to={'/about-us'}>
                    <b>About Us</b>
                  </Link>
                </Typography>
                <Typography variant="body1" mt={2} component={'p'}>
                  <Link className="txt-none" to={'/features'}>
                    <b> Features</b>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ marginTop: '25px', background: '#29333e', padding: '10px 0', color: 'white' }}>
        <Typography variant="subtitle1" component={'h6'} sx={{ textAlign: 'center' }}>
          © ePackBook 2023 | All Right Reserved
        </Typography>
      </Box>
    </Fragment>
  );
};

export default footer;
