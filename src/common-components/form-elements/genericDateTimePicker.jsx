import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { Fragment } from 'react';

const GenericDateTimePicker = (props) => {
  const { styles, label } = props;

  return (
    <Fragment>
      <DateTimePicker
        label={label}
        sx={{ ...styles }}
        {...props}
        slotProps={{ textField: { size: 'small', fullWidth: true } }}
      />
    </Fragment>
  );
};
export default GenericDateTimePicker;
