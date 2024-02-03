import { Box, Grid } from '@mui/material';
import { Fragment } from 'react';

const GenericDivider = () => {
  return (
    <Fragment>
      <Grid xs={12}>
        <Box
          sx={{ height: '2px', my: 1, backgroundColor: (theme) => theme.palette.primary.light }}
        />
      </Grid>
    </Fragment>
  );
};
export default GenericDivider;
