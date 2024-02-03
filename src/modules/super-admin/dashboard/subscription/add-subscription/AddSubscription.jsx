import { Fragment } from 'react';

import { Card, Chip, Grid, InputAdornment, Paper, Stack, Typography } from '@mui/material';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import { MODULES, SUBSCRIPTION_PLANS } from '../../../../../common-components/constants';
import GenericCheckbox from '../../../../../common-components/form-elements/genericCheckbox';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const AddSubscription = () => {
  return (
    <Fragment>
      <SubHeader title={'Subscription'} />
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
              Plans
            </Typography>
            <Stack direction="row" spacing={2} sx={{ ...style }}>
              <GenericDropdown label={'Select Plan'} data={SUBSCRIPTION_PLANS} />
              <Chip label="1500 ₹" color="primary" variant="filled" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
              Modules
            </Typography>
            <GenericDropdown label={'Select Modules'} data={MODULES} />
          </Grid>
        </Grid>

        <Card sx={{ p: 2, backgroundColor: '#fafafa', my: 1.5 }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ my: 1 }}>
                Features
              </Typography>
            </Grid>
          </Grid>
          {MODULES.map((module, index) => {
            return (
              <Grid container spacing={2} sx={{ my: 1 }} key={index}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1} sx={{ ...style }}>
                    <Grid item xs={6}>
                      <GenericCheckbox list={[{ value: module.key, label: module.value }]} />
                    </Grid>
                    <Grid item xs={6}>
                      <GenericInput
                        InputProps={{
                          endAdornment: <InputAdornment position="end">Quantity</InputAdornment>
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <GenericInput
                        InputProps={{
                          endAdornment: <InputAdornment position="end">Month</InputAdornment>
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <GenericInput label={'Enter Value'} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
          <Grid container>
            <Grid item xs={12}>
              <GenericLoadingButton sx={{ float: 'right', my: 2 }}>
                <span>Submit</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </Fragment>
  );
};
export default AddSubscription;
