import { Grid } from '@mui/material';
import { Fragment } from 'react';
import GenericTab from '../../../common-components/page-elements/genericTabs';
import AppConfig from './app-config/AppConfig';

import PaymentTypes from './payment-types/PaymentTypes';
import PaymentModes from './payment-modes/PaymentModes';
import UnitTypes from './unit-types/UnitTypes';
import SubHeader from '../../../common-components/page-elements/SubHeader';

const AppSetting = () => {
  const menuList = [
    {
      label: 'Configuration',
      child: <AppConfig />
    },

    {
      label: 'Payment Types',
      child: <PaymentTypes />
    },
    {
      label: 'Payment Modes',
      child: <PaymentModes />
    },
    {
      label: 'Unit Types',
      child: <UnitTypes />
    }
  ];
  return (
    <Fragment>
      <SubHeader title={'App Configuration'} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GenericTab list={menuList} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AppSetting;
