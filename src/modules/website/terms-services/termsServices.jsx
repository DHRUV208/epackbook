import { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid, Typography } from '@mui/material';

const TermsServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="Terms of Service" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography variant={'body1'} component={'p'}>
              By signing up for the ePackBook Service or any of the services of Essence web
              Technology, you are agreeing to be bound by the following terms and conditions (“Terms
              of Service"). Any new features or tools which are added to the current Service shall
              be also subject to the Terms of Service. You can review the most current version of
              the Terms of Service at any time. ePackBook reserves the right to update and change
              the Terms of Service by posting updates and changes to the ePackBook website. You are
              advised to check the Terms of Service from time to time for any changes that may
              impact you.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              ACCOUNT TERMS
            </Typography>

            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You must provide a valid email address and any other information needed in
              order to complete the signup process.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You are responsible for keeping your password secure. ePackBook cannot and
              will not be liable for any loss or damage from your failure to maintain the security
              of your account and password.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You may not use the service for any illegal or unauthorized purpose nor may
              you, in the use of the Service, violate any laws in your jurisdiction (including but
              not limited to copyright laws) as well as the Constitution of India and jurisdiction
              Gurugram (HR).
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You are responsible for all activity and content (data, graphics, photos,
              links) that is uploaded under your ePackBook account.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You must not transmit any worms or viruses or any code of a destructive
              nature.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; A breach or violation of any of the Account Terms as determined in the sole
              discretion of ePackBook will result in an immediate termination of your services.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You must be 18 years or older to use this Service.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              GENERAL CONDITIONS
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              You must read, agree with and accept all of the terms and conditions contained in this
              User Agreement and the Privacy Policy before you may become a member of ePackBook.
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              &#x2022; We reserve the right to modify or terminate the Service for any reason,
              without notice at any time.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; We reserve the right to refuse service to anyone for any reason at any time.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; Your use of the Service is at your sole risk. The Service is provided on an
              “as is and “as available" basis without any warranty or condition, express, implied or
              statutory.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook does not warrant that the service will be uninterrupted, timely,
              secure, or error-free.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook does not warrant that the results that may be obtained from the use
              of the service will be accurate or reliable.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You understand that your Content (not including credit card information), may
              be transferred unencrypted and involve (a) transmissions over various networks; and
              (b) changes to conform and adapt to technical requirements of connecting networks or
              devices. Credit Card information is always encrypted during transfer over networks.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; We may, but have no obligation to, remove Content and Accounts containing
              Content that we determine in our sole discretion are unlawful, offensive, threatening,
              libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any
              party’s intellectual property or these Terms of Service.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You expressly understand and agree that ePackBook shall not be liable for any
              direct, indirect, incidental, special, consequential or exemplary damages, including
              but not limited to, damages for loss of profits, goodwill, use, data or other
              intangible losses resulting from the use of or inability to use the service.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; Technical support is only provided to paying account holders and is only
              available via phone, email or the support forum.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You agree not to reproduce, duplicate, copy, sell, resell or exploit any
              portion of the The ePackBook system or Service, use of the Service, or access to the
              Service without the express written permission by ePackBook.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; Verbal or written abuse of any kind (including threats of abuse or
              retribution) of any ePackBook customer, ePackBook employee, member, or officer will
              result in immediate account termination.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; We do not claim any intellectual property rights over the material you
              provide to the ePackBook service. All material you upload remains yours. You can
              remove your ePackBook account at any time by deleting your account. This will also
              remove all content you have stored on the Service.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; The failure of ePackBook to exercise or enforce any right or provision of the
              Terms of Service shall not constitute a waiver of such right or provision. The Terms
              of Service constitutes the entire agreement between you and ePackBook and govern your
              use of the Service, superseding any prior agreements between you and ePackBook
              (including, but not limited to, any prior versions of the Terms of Service).
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; You retain ownership over all content that you submit to a ePackBook account,
              however, by making your account public, you agree to allow others to view your
              content.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook does not pre-screen Content and it is in their sole discretion to
              refuse or remove any Content that is available via the Service.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; Questions about the Terms of Service should be sent to support@epackbook.com
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              PAYMENT OF FEES
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              &#x2022; A valid credit card/Debit Card/Net Banking is required for paying accounts.
              Free accounts are not required to provide a credit card number.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; The Service will be billed on yearly basis. There are no refunds for partial
              year of service, upgrade/downgrade refunds, or refunds for years unused with an open
              account.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; When your billing period is over, ePackBook users will be automatically
              billed through their valid credit card on file. Users have five days to bring up and
              settle any issues with the billing.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; Failure to make payment within 7 days of invoice will result in account
              access being restricted to the owner of the account.
            </Typography>

            <Typography mt={3} variant={'h5'} component={'h5'}>
              MODIFICATIONS TO THE SERVICE AND PRICES
            </Typography>

            <Typography mt={2} variant={'body1'} component={'p'}>
              &#x2022; Prices for using ePackBook are subject to change upon 14 days notice from
              ePackBook. Such notice may be provided at any time by posting the changes to the
              ePackBook Site (ePackBook.com) or as an announcement in your ePackBook account.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook reserves the right time to time to modify or discontinue, the
              Service (or any part thereof) with or without notice.
            </Typography>
            <Typography mt={1} variant={'body1'} component={'p'}>
              &#x2022; ePackBook shall not be liable to you or to any third party for any
              modification, price change, suspension or discontinuance of the Service.
            </Typography>
            <Typography mt={2} variant={'body1'} component={'p'}>
              You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of
              the The ePackBook system or Service, use of the Service, or access to the Service
              without the express written permission by ePackBook. Any such activity shall be
              considered theft or vandalism, and a violation of our copyright and intellectual
              property.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default TermsServices;
