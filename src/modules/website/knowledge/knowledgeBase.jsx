import React, { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import GenericAccordion from '../common-components/genericAccordion';

const general = [
  {
    title: 'What is ePackBook?',
    text: 'Welcome to ePackbook 2023: The Best Moving Company CRM Software!'
  },
  {
    title: 'How can ePackBook help us manage my day to day operations?',
    text: 'ePackBook enables you to create and manage all the day-to-day works online like - Lead Management, Quotation Creation, Docs management, Shifting Date Management, Creating and sharing Money Receipt, etc.'
  },
  {
    title: 'Can we manage all my leads under one platform?',
    text: ' Yes, ePackBook enables you to manage and edit all your leads in one single dashboard and eliminates unwanted business loss.'
  },
  {
    title: ' Can I fix a Shifting Date on this platform? ',
    text: ' Yes, not only you can fix the Shifting date, you can also alter the date if required from the enquiry list or order list itself.'
  },
  {
    title:
      ' Can packers and movers assign employees in one account or do I have to purchase different accounts? ',
    text: ' ePackBook enables you to create different profiles for employees without charging a single penny.'
  },
  {
    title: '  How much do you charge for one account?  ',
    text: '   Currently, during the beta version we are not charging a single penny for using our ePackBook CRM. It’s absolutely free.'
  },
  {
    title: '  Do I have to carry a Laptop each and every time to use an ePackBook? ',
    text: '   Certainly not, now you can use mobile to create packers and movers documents because it has a mobile friendly user interface. We are working to release an app for you to make it more accessible.'
  }
];

const support = [
  {
    title: 'Do you have any knowledge base videos to make it easy to understand?',
    text: ' Yes, we do have a YouTube channel just to give you a demo of how things work on our CRM. Please click here to watch the videos. https://www.youtube.com/@ePackBook '
  },
  {
    title: ' How to connect with you if I need any help? ',
    text: ' You can always write to us at info@epackbook.in or directly reach out to us on +91  9355771100. '
  }
];
const documentation = [
  {
    title: ' Can I create a Quotation for Customers Online?',
    text: '  ePackBook enables Packers and movers to create quotations for their customers online and save the data for future records. Create Quotations, Preview Quotations, Download Quotations, Edit Quotations.'
  },
  {
    title: ' Can I create a Money Receipt for Customers Online?',
    text: '  ePackBook enables packers and movers companies to create Money Receipts for their customers. Can create Advance Payment, Part Payment & Final Payment etc. Create Money Receipt, Preview Money Receipt, Download Money Receipt, Edit Money Receipt. '
  },
  {
    title:
      ' Can Packers and Movers create an Invoice by using ePackBook for their Customers Online?',
    text: '  Sure, you can create Invoices online for your customers and save both time & paper. Create Invoice, Preview Invoice, Download Invoice, Edit Invoice.'
  },
  {
    title: 'Can I create Car Conditions Online?',
    text: ' Yes, you can create Car Conditions online using ePackBook - The Packers & Movers CRM. Most importantly, no one can change the data rather than who has access once it has been created on the dashboard. Create, Preview, Download and Edit.'
  },
  {
    title: 'Which Documents do I need to create an account on ePackBook? ',
    text: ' To create a free account on ePackBook, you need basic documents like PAN, GST and other business-related documents. Though if you are not registered under GST, you can skip that too.'
  }
];

const KnowledgeBase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="Knowledge Base" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box sx={{ border: '1px solid #eee', padding: 2 }}>
              <Typography mb={3} variant="h5" component={'h5'}>
                General
              </Typography>
              <GenericAccordion data={general} />
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box sx={{ border: '1px solid #eee', padding: 2 }}>
              <Typography mb={3} variant="h5" component={'h5'}>
                Documentation
              </Typography>
              <GenericAccordion data={documentation} />
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box sx={{ border: '1px solid #eee', padding: 2 }}>
              <Typography mb={3} variant="h5" component={'h5'}>
                Support
              </Typography>
              <GenericAccordion data={support} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default KnowledgeBase;
