import React, { Fragment } from 'react';

import { Paper } from '@mui/material';

import GenericTab from '../../../common-components/page-elements/genericTabs';
import AddSignature from './add-signature/AddSignature';

import SubHeader from '../../../common-components/page-elements/SubHeader';


const tabStack = [
  {
    label: 'Add Signature',
    child: <AddSignature />
  }
];
const UserSetting = () => {
  return (
    <Fragment>
      <SubHeader title={'User Settings'} />
      <Paper>
        <GenericTab list={tabStack} />
      </Paper>
    </Fragment>
  );
};

export default UserSetting;
