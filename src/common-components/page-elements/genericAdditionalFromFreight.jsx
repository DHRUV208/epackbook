import { Grid, Stack, Typography } from '@mui/material';
import GenericRadio from '../form-elements/genericRadio';
import GenericDropdown from '../form-elements/genericDropdown';

const GenericAdditionalFromFreight = (props) => {
  const { label, radioOptions, onLoadedBy, onFloor, onLiftStatus } = props;
  const liftStatus = [
    {
      label: 'Yes',
      value: 'yes'
    },
    {
      label: 'No',
      value: 'no'
    }
  ];
  const floorList = [
    {
      value: '-2',
      label: '-2 Floor'
    },
    {
      value: '-1',
      label: '-1 Floor'
    }
  ];
  return (
    <Grid
      item
      sx={{
        background: (theme) => theme.palette.primary.light,
        borderRadius: '5px',
        border: (theme) => `1px solid ${theme.palette.primary.dark}`
      }}
    >
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={4}>
          <Stack direction={'column'}>
            <Typography>{label}</Typography>
            <GenericRadio
              options={radioOptions}
              onChange={onLoadedBy}
              defaultSelected="company"
              name="offeredBy"
            ></GenericRadio>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction={'column'}>
            <GenericDropdown
              label="Select Floor"
              onChange={onFloor}
              selected="-1"
              data={floorList}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction={'column'}>
            <GenericDropdown
              label="Lift Status"
              selected="yes"
              onChange={onLiftStatus}
              data={liftStatus}
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default GenericAdditionalFromFreight;
