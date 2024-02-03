import { Fragment } from 'react';

import AddAccount from './add-account/AddAccount';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import GenericTab from '../../../common-components/page-elements/genericTabs';
import AddBanks from './bank/Bank';

const tabStack = [
  {
    label: 'Add Bank',
    child: <AddBanks />
  },
  {
    label: 'Add Accounts',
    child: <AddAccount />
  }
];
const AccountManagement = () => {
  return (
    <Fragment>
      <SubHeader title={'Account Management'} />
      <GenericTab list={tabStack} />
    </Fragment>
  );
};
export default AccountManagement;
