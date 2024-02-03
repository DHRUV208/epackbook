import { TextField } from '@mui/material';
import React, { Fragment } from 'react';

const GenericInput = (props) => {
  const { label, type, className } = props;
  return (
    <Fragment>
      <TextField
        label={label}
        type={type}
        className={className}
        size="small"
        fullWidth
        {...props}
      />
    </Fragment>
  );
};
export default GenericInput;
