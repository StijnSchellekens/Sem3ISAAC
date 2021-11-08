import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';

import h337 from 'heatmap.js';
import iotCrop from '../images/iot-crop1.png';

import '../index.css';


const drawerWidth = 240;

const Heatmap = ({data}) => {
  if (!data) {
    return (
      <div>Loading...</div>
    );
  }
  useEffect(() => {
    const heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.heatmap-container'),
    });
      // now generate some random data
    const points = [];
    // let max = 0;
    // const width = 1280;
    // const height = 560;
    // let len = 200;

    // while (len--) {
    //   const val = Math.floor(Math.random()*100);
    //   max = Math.max(max, val);
    //   const point = {
    //     x: Math.floor(Math.random()*width),
    //     y: Math.floor(Math.random()*height),
    //     value: val,
    //   };
    //   points.push(point);
    // }
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const point = {
        x: element.x * 40 - 20,
        y: element.y * 40 - 20,
        value: element.temp,
      };
      points.push(point);
    }
    // points.push(data.map((obj) => {
    //   return {
    //     x: obj.x * 40 - 20,
    //     y: obj.y * 40 - 20,
    //     value: obj.temp,
    //   };
    // }));
    // points.push({
    //   x: 3 * 40 -20,
    //   y: 12 * 40 - 20,
    //   value: 24.5,
    // });
    // points.push({
    //   x: 22 * 40 -20,
    //   y: 3 * 40 - 20,
    //   value: 26.5,
    // });
    // points.push({
    //   x: 31 * 40 -20,
    //   y: 13 * 40 - 20,
    //   value: 27.5,
    // });
    // points.push({
    //   x: 4 * 40 -20,
    //   y: 3 * 40 - 20,
    //   value: 10,
    // });
    // points.push({
    //   x: 3 * 40 -20,
    //   y: 8 * 40 - 20,
    //   value: 20,
    // });
    // points.push({
    //   x: 11 * 40 -20,
    //   y: 4 * 40 - 20,
    //   value: 23,
    // });
    // points.push({
    //   x: 11 * 40 -20,
    //   y: 6 * 40 - 20,
    //   value: 23,
    // });
    // points.push({
    //   x: 11 * 40 -20,
    //   y: 12 * 40 - 20,
    //   value: 24,
    // });
    // points.push({
    //   x: 18 * 40 -20,
    //   y: 13 * 40 - 20,
    //   value: 25,
    // });
    // points.push({
    //   x: 22 * 40 -20,
    //   y: 13 * 40 - 20,
    //   value: 25,
    // });
    // points.push({
    //   x: 24 * 40 -20,
    //   y: 5 * 40 - 20,
    //   value: 25.3,
    // });
    // points.push({
    //   x: 24 * 40 -20,
    //   y: 8 * 40 - 20,
    //   value: 26,
    // });
    // points.push({
    //   x: 25 * 40 -20,
    //   y: 3 * 40 - 20,
    //   value: 24.6,
    // });
    // points.push({
    //   x: 25 * 40 -20,
    //   y: 13 * 40 - 20,
    //   value: 24.4,
    // });
    // points.push({
    //   x: 30 * 40 -20,
    //   y: 1 * 40 - 20,
    //   value: 26,
    // });
    // points.push({
    //   x: 30 * 40 -20,
    //   y: 7 * 40 - 20,
    //   value: 27,
    // });

    console.log(points);

    // heatmap data format
    const dataHeatmap = {
      max: 28,
      data: points,
    };

    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(dataHeatmap);
  });

  const heatmapStyle = {
    width: `calc(100% - ${drawerWidth}px)`,
    height: 100,
  };
  const mainContentStyle = {
    marginLeft: {drawerWidth},
  };
  const fontTheme = createTheme({
    typography: {
      fontFamily: 'Rockwell',
    },
  });
  return (
    <div className='heatmap-container'>
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
      <div style={mainContentStyle}>
        <img src={iotCrop} className="image"/>
      </div>
    </div>
  );
};

export default Heatmap;
