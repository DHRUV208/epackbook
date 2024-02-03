import { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="Privacy Policy" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography variant={'body1'} component={'p'}>
              <b>ePackBook</b> collects e-mail addresses of people who send us e-mail or via
              newsletter. We also collect information on what pages consumers access and information
              provided to us by consumers site registrations. Such information may contain personal
              data about you including your address,credit card numbers, phone numbers, etc. We are
              not allowed to disclose such personal information without your written permission.
              However, certain information collected from you and about you is used within the
              context of providing the Service. The information we collect is not shared with or
              sold to others except under the certain circumstances and which your use of the
              Service is deemed to provide us a valid consent to disclose the following:
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              &#x2022; In order to investigate, prevent, or take action regarding illegal
              activities, suspected fraud, situations involving potential threats to the physical
              safety of any person, violations of ePackBook’s terms of use, or as otherwise required
              by law.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook does not rent, sell, or share personal information about you with
              other companies except to provide products or services you’ve requested or when we
              have your permission.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; We will transfer information about you if ePackBook is acquired by or merged
              with another company (ePackBook is a product of Essence Web Technology) In this event,
              ePackBook will notify you by email or by putting a prominent notice on the ePackBook
              web site before information about you is transferred and becomes subject to a
              different privacy policy.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              WHAT WE DO WITH YOUR INFORMATION
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              &#x2022; When you register for ePackBook we ask for your name, company name, email
              address, billing address, credit card information.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook uses the information we collect for the following general purposes:
              products and services provision, billing, identification and authentication, services
              improvement, contact, and research.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              DATA SECURITY
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              The security of your personal information is important to us. When you enter sensitive
              information, such as credit card number on our registration form, we encrypt that
              information using secure socket layer technology (SSL). We follow generally accepted
              industry standards to protect the personal information submitted to us, both during
              transmission and once we receive it. No method of transmission over the Internet, or
              method of electronic storage, is 100% secure. We strive to use commercially acceptable
              means to protect your personal information, we cannot guarantee its absolute security.
              If you have any questions about security on our Web site, you can send email us at
              support@ePackBook.com.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              DATA STORAGE
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              ePackBook owns the data storage, databases and all rights to the ePackBook application
              however we make no claim to the rights of your data.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              DISCLOSURE
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              ePackBook may disclose personally identifiable information under special
              circumstances, such as to comply with court orders requiring us to do so or when your
              actions violate the Terms of Service.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              COOKIES
            </Typography>
            <Typography mt={2} variant={'body1'} component={'p'}>
              &#x2022; A cookie is a small amount of data, which may include an anonymous unique
              identifier. Cookies are sent to your browser from a web site’s computers and stored on
              your computer’s hard drive.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook uses cookies to record current session information, our cookies
              generally last one weeks. You are required to log-in to your ePackBook account after a
              certain period of time has elapsed to protect you against others accidentally
              accessing the content of your account.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              CHANGES TO THIS PRIVACY POLICY
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              We reserve the right to modify this privacy policy at any time, so please review it
              frequently. If we make material changes to this policy, we will notify you here or by
              means of a notice on our homepage so that you are aware of what information we
              collect, how we use it, and under what circumstances, if any, we disclose it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicy;
