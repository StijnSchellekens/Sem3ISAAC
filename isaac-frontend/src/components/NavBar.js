import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import SpeedIcon from '@mui/icons-material/Speed';
import ThermostatIcon from '@mui/icons-material/Thermostat';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SettingsInputCompositeIcon from
//   '@mui/icons-material/SettingsInputComposite';
// import SettingsIcon from '@mui/icons-material/Settings';

import {Tab, Tabs} from '@material-ui/core/';


import {
  Route,
  Link,
} from 'react-router-dom';


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  // const icons = (index) => {
  //   if (index === 0) return <SpeedIcon />;
  //   if (index === 1) return <ThermostatIcon />;
  //   if (index === 2) return <NotificationsIcon />;
  //   if (index === 3) return <SettingsInputCompositeIcon />;
  //   if (index === 4) return <SettingsIcon />;
  // };

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
        {/* <Tab
          label='Dashboard'
          value="/dashboard"
          component={Link}
          to="/dashboard"
        />
        <Tab
          label='HeatMap'
          value="/heatmap"
          component={Link}
          to="/heatmap"/> */}
        <Route
          path='/'
          render={(history) => (
            <Tabs
              orientation="vertical"
              value={history.location.pathname}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab
                label='Dashboard'
                value="/"
                component={Link}
                to="/"
                icon={<SpeedIcon/>}
              />
              <Tab
                label='HeatMap'
                value="/heatmap"
                component={Link}
                to="/heatmap"
                icon={<ThermostatIcon/>}
              />
            </Tabs>
          )}>
        </Route>
        {/* <List>
          {['Dashboard', 'HeatMap', 'Notificatons',
            'Advanced', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {icons(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
      >
        <Toolbar />
        <Typography paragraph>
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
