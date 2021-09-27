import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const NavBar = () => {
  return (
    <div>
      <Tabs
        orientation="vertical"
      />
      <Tab label="Home"/>
      <Tab label="Dashboard"/>
    </div>
  );
};

export default NavBar;
