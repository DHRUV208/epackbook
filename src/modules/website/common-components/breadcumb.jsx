import { Box, Container, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const breadcumb = (props) => {
  const { title } = props;
  return (
    <Fragment>
      <Box sx={{ background: '#012A5E' }}>
        <Container>
          <Box sx={{ padding: '10px 0' }}>
            <Typography variant="h5" component={'h5'} color={'#fff'}>
              {title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography>Home &nbsp;</Typography>
              </Link>
              <Typography component={'h5'} color={'#fff'}>
                / {title}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};
export default breadcumb;
