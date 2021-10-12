import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gauge from '../components/Gauge';
import Grid from '@mui/material/Grid';
import DashboardGraphs from '../components/DashboardGraphs';
import NavBar from '../components/NavBar';

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
  };

  const dashBoardStyle = {
    width: `calc(100% - ${drawerWidth}px)`,
  };

  return (
    <div style={generalStyle}>
      <NavBar value={0}/>
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
      <Grid container spacing={1}>
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
    </div>
  );
};

export default Dashboard;
