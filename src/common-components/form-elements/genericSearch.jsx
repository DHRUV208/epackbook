import { Fragment } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/styles';
const GenericSearch = (props) => {
  return (
    <Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase inputProps={{ 'aria-label': 'search' }} {...props} />
      </Search>
    </Fragment>
  );
};
export default GenericSearch;
