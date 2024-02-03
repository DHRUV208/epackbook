import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import nl from 'dayjs/locale/nl';
const GenericDatePicker = (props) => {
  const { label } = props;

  return (
    <LocalizationProvider locale={nl} dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        slotProps={{ textField: { size: 'small', fullWidth: true } }}
        {...props}
      />
    </LocalizationProvider>
  );
};
export default GenericDatePicker;
