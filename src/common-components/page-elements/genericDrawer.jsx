import { Drawer } from '@mui/material';
const GenericDrawer = (props) => {
  const { position, open, closeHandler, children, style, className } = props;
  return (
    <Drawer
      anchor={position}
      open={open}
      onClose={closeHandler}
      className={className}
      sx={{ ...style }}
    >
      {children}
    </Drawer>
  );
};
export default GenericDrawer;
