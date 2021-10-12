import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import SpeedIcon from '@mui/icons-material/Speed';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsInputCompositeIcon from
  '@mui/icons-material/SettingsInputComposite';
import SettingsIcon from '@mui/icons-material/Settings';
import PropTypes from 'prop-types';

import {Tab, Tabs} from '@material-ui/core/';
import Link from 'next/link';

const drawerWidth = 240;

export default function PermanentDrawerLeft({value}) {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <Drawer
        sx={{
          'width': drawerWidth,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <>
          <Tabs
            orientation="vertical"
            value={value}
            textColor="secondary"
            indicatorColor="secondary"
          >
            {/* <Tab
              label='Dashboard'
              value="/"
              // component={<Link/>}
              to="/"
              icon={<SpeedIcon/>}
            /> */}
            <Link href="/dashboard" passHref>
              <Tab label="Dashboard"
                value={0}
                icon={<SpeedIcon/>}
              />
            </Link>
            <Link href="/heatmap" passHref>
              <Tab label="Heatmap"
                value={1}
                icon={<ThermostatIcon/>}
              />
            </Link>
            <Link href="/notifications" passHref>
              <Tab label="Notifications"
                value={2}
                icon={<NotificationsIcon/>}
              />
            </Link>
            <Link href="/advanced" passHref>
              <Tab label="Advanced"
                value={3}
                icon={<SettingsInputCompositeIcon />}
              />
            </Link>
            <Link href="/settings" passHref>
              <Tab label="Settings"
                value={4}
                icon={<SettingsIcon/>}
              />
            </Link>
            {/* <Tab
              label='HeatMap'
              // value="/heatmap"
              // component={Link}
              // href="/heatmap"
              icon={<ThermostatIcon/>}
            /> */}
            {/* <Tab
              label='Notifications'
              value="/notifications"
              // component={Link}
              to="/notifications"
              icon={<NotificationsIcon/>}
            />
            <Tab
              label='Advanced'
              value="/advanced"
              // component={Link}
              to="/advanced"
              icon={<SettingsInputCompositeIcon />}
            /> */}
            {/* <Tab
              label='Settings'
              value="/settings"
              // component={Link}
              to="/settings"
              icon={<SettingsIcon/>}
            /> */}
            {/* <Link href="/heatmap" passHref>
              <Tab label="Heatmap" />
            </Link> */}
          </Tabs>
        </>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

PermanentDrawerLeft.propTypes = {
  value: PropTypes.number.isRequired,
};
