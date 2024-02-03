import React from 'react';

import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Toasty = (props) => {
  const { show = false, alertWidth, type, message } = props;
  const [open, setOpen] = React.useState(show);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: alertWidth }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: alertWidth }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
export default Toasty;
