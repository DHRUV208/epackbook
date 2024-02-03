import { Box } from '@mui/material';

const style = {
  padding: '25px',
  background: 'linear-gradient(45deg, rgba(130,166,226,1) 30%, rgba(64,123,255,1) 80%)',
  height: '100%'
};
const Layout = ({ children }) => {
  return <Box sx={style}>{children}</Box>;
};
export default Layout;
