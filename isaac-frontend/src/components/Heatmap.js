import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const drawerWidth = 240;

const Heatmap = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Heatmap
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Heatmap;
