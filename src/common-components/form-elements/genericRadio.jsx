import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormControlLabel } from '@mui/material';

const GenericRadio = (props) => {
  const { options, defaultSelected, name, groupLabel, orientation } = props;
  return (
    <FormControl sx={{ fontWeight: '470' }}>
      <FormLabel id="demo-row-radio-buttons-group-label">{groupLabel}</FormLabel>
      <RadioGroup
        defaultValue={defaultSelected}
        row={orientation === 'row' ? true : false}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        {...props}
      >
        {options &&
          options.map((option, index) => (
            <FormControlLabel
              value={option?.value}
              key={index}
              control={<Radio />}
              label={option?.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};
export default GenericRadio;
