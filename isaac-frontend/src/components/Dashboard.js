import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gauge from '../components/Gauge';
import Grid from '@mui/material/Grid';
import DashboardGraphs from '../components/DashboardGraphs';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const Dashboard = () => {
  const [data, setData] = useState(null);
  useEffect( async () => {
    const res = await fetch('http://localhost:5000/entries');
    const rawData = await res.json();

    setData(await rawData.map((obj) => {
      obj.dateTime = new Date(obj.dateTime);
      return obj;
    }));
  }, []);

  if (!data) {
    return (
      <div>...Loading</div>
    );
  }

  const generalStyle = {
    marginLeft: `${drawerWidth}px`,
    marginRight: `auto`,
  };

  const dashBoardStyle = {
    width: `calc(100% - ${drawerWidth}px)`,
  };

  const content = {
    marginLeft: `10%`,
    marginRight: `10%`,
  };

  // const halfPieChart = {
  //   marginLeft: 'auto',
  //   marginRigh: 'auto',
  // };

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
      <Box style={content}>
        <Grid container
          spacing={2}
        >
          <Grid item xs={12} lg={6}>
            <Gauge id="graph-chart-temperature" name="Temperature" data={data}/>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Gauge id="graph-chart-humidity" name="Humidity" data={data}/>
          </Grid>
          <Grid item xs={12}>
            <DashboardGraphs data={data}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
