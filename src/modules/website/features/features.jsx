import { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid } from '@mui/material';
import GenericTabs from '../../../common-components/page-elements/genericTabs';
import FriendlyDashboard from './tabs/friendlyDashboard';
import EnquiryManagement from './tabs/enquiryManagement';
import Quotation from './tabs/quotation';
import ShiftingManagement from './tabs/shiftingManagement';
import CustomerModule from './tabs/customerModule';
import PowerfulReports from './tabs/powerfulReports';
import Esignature from './tabs/esignature';

const tabStack = [
  {
    label: 'User Friendly Dashboard',
    child: <FriendlyDashboard />
  },
  {
    label: 'Enquiry Management',
    child: <EnquiryManagement />
  },
  {
    label: 'Rermiender-Survey Follow',
    child: '<CarConditionForm />'
  },
  {
    label: 'Quotation Module',
    child: <Quotation />
  },
  {
    label: 'Shifting Management',
    child: <ShiftingManagement />
  },
  {
    label: 'Money Reciept',
    child: '<InvoiceForm />'
  },
  {
    label: 'Bilty Module',
    child: '<InvoiceForm />'
  },
  {
    label: 'Car Condition',
    child: '<InvoiceForm />'
  },
  {
    label: 'Invoice Module',
    child: '<InvoiceForm />'
  },
  {
    label: 'Customer Module',
    child: <CustomerModule />
  },
  {
    label: 'Automatic Emails',
    child: '<InvoiceForm />'
  },
  {
    label: 'Powerfull Reports',
    child: <PowerfulReports />
  },
  {
    label: 'Branch Management',
    child: '<InvoiceForm />'
  },
  {
    label: 'Role Management',
    child: '<InvoiceForm />'
  },
  {
    label: 'Digital Signature',
    child: <Esignature />
  },
  {
    label: 'Mobile App',
    child: '<InvoiceForm />'
  },
  {
    label: 'Desktop Software',
    child: '<InvoiceForm />'
  },
  {
    label: 'Multi Templates',
    child: '<InvoiceForm />'
  }
];

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="Features" />
      <Container sx={{ py: 5 }}>
        <Grid container>
          <Grid item lg={12} md={12}>
            <GenericTabs orientation="vertical" list={tabStack} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Features;
