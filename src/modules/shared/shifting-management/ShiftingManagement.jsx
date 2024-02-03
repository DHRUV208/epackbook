import { Fragment } from 'react';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import { Grid } from '@mui/material';
import GenericTab from '../../../common-components/page-elements/genericTabs';
import TransitInsuranceCompany from './transit-insurance-company/TransitInsuranceCompany';
import ShiftingLuggage from './shifting-luggage/ShiftingLuggage';
import Floor from './floor/Floor';
import InsurancePercentage from './insurance-percentage/InsurancePercentage';
import Material from './material/Material';
import PackingType from './packing-type/PackingType';
import MovingType from './moving-type/MovingType';
import MovingMode from './moving-mode/MovingMode';

const menuList = [
  {
    label: 'Floor',
    child: <Floor />
  },
  {
    label: 'Insurance Percentage',
    child: <InsurancePercentage />
  },
  {
    label: 'Material',
    child: <Material />
  },
  {
    label: 'Moving Mode',
    child: <MovingMode />
  },
  {
    label: 'Moving Type',
    child: <MovingType />
  },
  {
    label: 'Packing Type',
    child: <PackingType />
  },
  {
    label: 'Shifting Luggage',
    child: <ShiftingLuggage />
  },
  {
    label: 'Transit Insurance',
    child: <TransitInsuranceCompany />
  }
];
const ShiftingManagement = () => {
  return (
    <Fragment>
      <SubHeader title={'Shifting Management'} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GenericTab list={menuList} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ShiftingManagement;
