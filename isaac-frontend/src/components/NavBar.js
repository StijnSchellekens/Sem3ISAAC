import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpeedIcon from '@mui/icons-material/Speed';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsInputCompositeIcon from
  '@mui/icons-material/SettingsInputComposite';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const icons = (index) => {
    if (index === 0) return <SpeedIcon />;
    if (index === 1) return <ThermostatIcon />;
    if (index === 2) return <NotificationsIcon />;
    if (index === 3) return <SettingsInputCompositeIcon />;
    if (index === 4) return <SettingsIcon />;
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
        <List>
          {['Dashboard', 'HeatMap', 'Notificatons',
            'Advanced', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {icons(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
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
