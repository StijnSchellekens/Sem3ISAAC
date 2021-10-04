import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gauge from '../components/Gauge';
import Grid from '@mui/material/Grid';
import DashboardGraphs from '../components/DashboardGraphs';

const drawerWidth = 240;

const Dashboard = () => {
  // const [temp, setTemp] = useState(0);
  const generalStyle = {
    marginLeft: `${drawerWidth}px`,
  };

  const dashBoardStyle = {
    width: `calc(100% - ${drawerWidth}px)`,
  };

  return (
    <div style={generalStyle}>
      <AppBar
        position="fixed"
        color="primary"
        style={dashBoardStyle}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={6}>
          <Gauge name="Temperature"/>
        </Grid>
        <Grid item xs={6}>
          <Gauge name="Humidity"/>
        </Grid>
        <Grid item xs={12}>
          <DashboardGraphs/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
