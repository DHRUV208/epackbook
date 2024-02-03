import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import React from 'react';
const GenericAutocomplete = (props) => {
  const { options = [], label, ...otherProps } = props;
  return (
    <Autocomplete
      onSelect={props?.getValue}
      selectOnFocus={props?.getValue}
      onChange={props?.getValue}
      options={options}
      getOptionLabel={(option) => option.label}
      {...props}
      freeSolo
      renderInput={(params) => {
        return (
          <TextField {...params} label={label} size="small" fullwidth={'true'} {...otherProps} />
        );
      }}
    />
  );
};
export default GenericAutocomplete;
