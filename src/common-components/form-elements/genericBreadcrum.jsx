import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.primary.light;
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06)
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12)
    }
  };
});
const GenericBreadcrum = (props) => {
  const { list } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {list.map((item, index) => {
        return <StyledBreadcrumb component="a" href={item?.url} label={item?.label} key={index} />;
      })}
    </Breadcrumbs>
  );
};
export default GenericBreadcrum;
