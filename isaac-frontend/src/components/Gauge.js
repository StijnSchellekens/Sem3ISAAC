import React from 'react';
import Typography from '@mui/material/Typography';
import GaugeChart from 'react-gauge-chart';
import Paper from '@mui/material/Paper';

// eslint-disable-next-line react/prop-types
const Gauge = ({name}) => {
  const chartStyle = {
    height: 240,
    width: 540,
  };

  const paperStyle = {
    height: 300,
    width: 500,
  };
  return (
    <Paper
      sx={paperStyle}
    >
      <Typography variant="h6" noWrap component="div">
        {name}
      </Typography>
      <GaugeChart
        style={chartStyle}
        id="gauge-chart"
        nrOfLevels={2}
        colors={['#009DDC', '#c12d3f']}
        arcWidth={0.3}
        textColor="#464A4F"
        needleColor="black"
        needleBaseColor="black"
        percent={0.6}
        arcsLength={[0.3, 0.5, 0.2]}
      />

    </Paper>
  );
};

export default Gauge;
