import React, { Fragment } from 'react';
import { Grid } from '@mui/material';
import ContactDetail from './contact-detail/ContactDetail';
import RegistrationDetail from './registration-detail/RegistrationDetail';
import FooterContent from './footer-content/FooterContent';

import Modules from './modules/Modules';
import EnquirySource from './enquiry-source/EnquirySource';
import ApprovalAuthority from './approval-authority/ApprovalAuthority';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import GenericTab from '../../../common-components/page-elements/genericTabs';
import SubModules from './sub-modules/SubModules';
import Feature from './feature/Feature';

const menuList = [
  {
    label: 'Contact Detail',
    child: <ContactDetail />
  },
  {
    label: 'Govt. Registration Detail',
    child: <RegistrationDetail />
  },
  {
    label: 'Footer Content',
    child: <FooterContent />
  },
  {
    label: 'Modules',
    child: <Modules />
  },
  {
    label: 'Sub Modules',
    child: <SubModules />
  },
  {
    label: 'Feature',
    child: <Feature />
  },
  {
    label: 'Enquiry Source',
    child: <EnquirySource />
  },
  {
    label: 'Approval Authority',
    child: <ApprovalAuthority />
  }
];

const ContentManagement = () => {
  return (
    <Fragment>
      <SubHeader title={'Content Management'} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GenericTab list={menuList} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ContentManagement;
