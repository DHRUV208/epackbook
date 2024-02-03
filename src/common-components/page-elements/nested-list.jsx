import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

import React, { Fragment, useState } from 'react';
import { List, ListItemText, ListItem, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
const NestedList = ({ items }) => {
  const [openItems, setOpenItems] = useState([]);

  const NavigationStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  const handleClick = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const renderNestedList = (nestedItems) => {
    return (
      <List disablePadding>
        {nestedItems.map((nestedItem, index) => (
          <NavLink style={NavigationStyle} to={nestedItem.path} key={index}>
            <NestedListItem item={nestedItem} />
          </NavLink>
        ))}
      </List>
    );
  };

  const NestedListItem = ({ item }) => {
    const hasNestedItems = item.nestedItems && item.nestedItems.length > 0;
    const isOpen = openItems.includes(item.index);

    return (
      <Fragment>
        <ListItem
          button
          onClick={() => handleClick(item.index)}
          sx={{ pl: item.nestedItems ? 1 : 3 }}
        >
          <Box sx={{ marginRight: '10px' }}> {item.icon}</Box>
          <ListItemText primary={item.label} className="sideList" />
          {hasNestedItems && (
            <IconButton
              style={{ marginLeft: '80px' }}
              className="sideList"
              edge="end"
              size="small"
              onClick={() => handleClick(item.index)}
            >
              {isOpen ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </ListItem>
        {hasNestedItems && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            {renderNestedList(item.nestedItems)}
          </Collapse>
        )}
      </Fragment>
    );
  };

  return (
    <List component="nav" disablePadding sx={{ bgcolor: 'background.paper' }}>
      {items.map((item, index) => (
        <NestedListItem key={index} item={item} />
      ))}
    </List>
  );
};

export default NestedList;
