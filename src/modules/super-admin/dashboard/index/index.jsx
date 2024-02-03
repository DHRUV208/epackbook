import { Grid, Paper } from '@mui/material';
import { Fragment } from 'react';
import SubHeader from '../../../../common-components/page-elements/SubHeader';

const Template = () => {
  return (
    <Fragment>
      <SubHeader title={'Dashboard'} />
      <Paper sx={{ p: 3, mb: 2 }}>
        <Grid container spacing={2}></Grid>
      </Paper>
    </Fragment>
  );
};
export default Template;
