import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Fragment } from 'react';
import { MdEdit } from 'react-icons/md';
import GenericDropdown from '../form-elements/genericDropdown';
import GenericBreadcrum from '../form-elements/genericBreadcrum';

const breadcrumbList = [
  {
    url: '#',
    label: 'Dashboard'
  },
  {
    url: '#',
    label: 'Branch'
  },
  {
    url: '#',
    label: 'Branch List'
  }
];
const statusList = [
  { value: 'under-process', label: 'UNDER PROCESS' },
  { value: 'pending', label: 'PENDING' },
  { value: 'approved', label: 'APPROVED' },
  { value: 'cancelled', label: 'CANCELLED' }
];
const GenericStatusChanger = (props) => {
  const { onStatusChange, defaultData, selected } = props;
  const data = defaultData || statusList;

  return (
    <Fragment>
      <Box sx={{ backgroundColor: '#fff', padding: '8px', marginBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <GenericBreadcrum list={breadcrumbList} />
          </Grid>
          <Grid item xs={2}>
            <GenericDropdown
              selected={selected}
              label={'Status'}
              data={data}
              onChange={onStatusChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default GenericStatusChanger;
