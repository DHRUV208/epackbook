import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Fragment } from 'react';
import { MdEdit } from 'react-icons/md';

const SubHeader = ({ title }) => {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: '#fff', padding: '15px', marginBottom: '15px' }}>
        <Grid container>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default SubHeader;
