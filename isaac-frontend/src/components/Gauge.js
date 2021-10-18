/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import GaugeChart from 'react-gauge-chart';
import Paper from '@mui/material/Paper';

// eslint-disable-next-line react/prop-types
const Gauge = ({name, data}) => {
  const [value, setValue] = useState(null);

  const chartStyle = {
    height: 400,
    width: 500,
  };

  useEffect(async () => {
    if (name === 'Temperature') {
      data = data.map((obj) =>
        obj.temp,
      );
    } else {
      data = data.map((obj) =>
        obj.humidity,
      );
    }
    const average = await data.reduce((total, next) => total +
    next, 0) / data.length;
    setValue(average / 100);
  }, []);

  const getFormatText = () => {
    if (name === 'Temperature') return '°C';
    return '%';
  };

  if (!value) {
    return (
      <div>Loading...</div>
    );
  }

  const paperStyle = {
    height: 200,
    width: 'auto',
    textAlign: 'center',
    paddingBottom: '250px',
    margin: 'auto',
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
        colors={['#009DDC', '#57C61A', '#c12d3f']}
        arcWidth={0.2}
        textColor="#464A4F"
        needleColor="black"
        needleBaseColor="black"
        percent={0.27}
        arcsLength={[0.15, 0.2, 0.27]}
        arcPadding={0.01}
        formatTextValue={(val) => val+getFormatText()}
      />

    </Paper>
  );
};

export default Gauge;
