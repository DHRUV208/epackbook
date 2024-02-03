import React, { useMemo } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const GenericCheckbox = (props) => {
  const { list, name } = props;
  return (
    <FormGroup {...props}>
      {list?.map((item, index) => (
        <FormControlLabel
          name={name}
          key={`checkbox-${index}`}
          control={
            <Checkbox
              value={item.value}
              defaultChecked={item?.checked === true}
              onChange={props?.onChange}
            />
          }
          label={item?.label}
        />
      ))}
    </FormGroup>
  );
};
export default GenericCheckbox;
