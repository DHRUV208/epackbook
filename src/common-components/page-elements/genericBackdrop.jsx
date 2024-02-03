import Backdrop from '@mui/material/Backdrop';

import GenericCircularProgress from './genericCircularProgress';
const GenericBackdrop = () => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
      <GenericCircularProgress />
    </Backdrop>
  );
};
export default GenericBackdrop;
