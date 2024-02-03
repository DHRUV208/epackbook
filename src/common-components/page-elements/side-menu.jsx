import React from 'react';
import { Hidden } from '@mui/material';
import NestedList from './nested-list';
import { MENU_ITENS } from '../constants';
const SideMenu = () => {
  return (
    <React.Fragment>
      <Hidden mdDown>
        <NestedList items={MENU_ITENS} />
      </Hidden>
    </React.Fragment>
  );
};
export default SideMenu;
