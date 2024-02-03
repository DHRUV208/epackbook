import { Switch, Typography, FormControlLabel, Stack } from '@mui/material';

const GenericSwitch = (props) => {
  const { styles, start, end, label, value } = props;
  return (
    <Stack direction={'row'} spacing={1} alignItems={'center'}>
      <Typography>{start}</Typography>
      <FormControlLabel
        control={<Switch sx={{ ...styles }} {...props} defaultChecked={value} />}
        label={label}
      />
      <Typography>{end}</Typography>
    </Stack>
  );
};
export default GenericSwitch;
