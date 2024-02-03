import { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid, Typography } from '@mui/material';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="About Us" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography variant={'body1'} component={'p'}>
              <b>ePackBook</b> is a cloud based online software to manage packers and movers
              business and developed by Essence Web Technology. We are a software development firm
              based in Gurugram (HR) India. We found a big opportunity in logistic sector to manage
              their business online and create efficiency in work flow. To grab this opportunity we
              build <b>ePackBook</b> to bring value to the niche middle markets that are underserved
              in terms of operational efficiency.
            </Typography>
            <Typography mt={3} variant={'body1'} component={'p'}>
              We launched <b>ePackbook</b> to bring our technology to improve the performance of
              moving companies around the world.
            </Typography>
            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>ePackbook</b> is a creative idea of whole team of Essence Web Technology, the
              reason behind development of <b>ePackbook</b> was our packers portfolio. Most packers
              and movers companies use diary to manage their business. They forget their customers
              after a time period. This software <b>"ePackBook"</b> will enhance efficiency of
              packers and movers business.
            </Typography>
            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>ePackBook</b> is now used by packers and movers companies across the India and it's
              a cloud based solution, you can use from anywhere around the world.
            </Typography>
            <Typography mt={3} variant={'body1'} component={'p'}>
              In Next few days, we will continue to offer better features and user friendly mobile
              Apps of <b>ePackBook</b>.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default About;
