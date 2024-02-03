import { CircularProgress } from '@mui/joy';
import { Fragment } from 'react';

const GenericCircularProgress = () => {
  return (
    <Fragment>
      <CircularProgress
        sx={{
          '--CircularProgress-size': '150px',
          '--CircularProgress-trackThickness': '15px',
          '--CircularProgress-progressThickness': '15px'
        }}
      />
    </Fragment>
  );
};
export default GenericCircularProgress;
