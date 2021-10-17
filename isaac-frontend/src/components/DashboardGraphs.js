import LineGraph from './LineGraph';
import PropTypes from 'prop-types';
import React, {useState, useRef} from 'react';
import {startOfWeek, endOfWeek} from 'date-fns';
import {
  Measurement, nextMeasurement,
} from '../components/helper/MeasurementEnum';

// const ref = useRef();
const DashboardGraphs = ({data}) => {
  const [measurement, setMeasurement,
  ] = useState(Measurement.TEMPERATURE);

  //  fetching data from json-server to be moved from file

  const graphChildRef = useRef(null);

  const graphData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday'],
    datasets: [
      // {
      //   fill: false,
      //   label: 'This week',
      //   // filter to return an array with temps of current week
      //   data: getMeasurementArray(new Date()),
      //   backgroundColor: [
      //     'rgba(13, 99, 132, 0.3)',
      //   ],
      //   borderColor: [
      //     'rgba(13, 99, 132, 1)',
      //   ],
      //   borderWidth: 2,
      // },
      {
        fill: false,
        label: 'Last week',
        data: getMeasurementArray(getLastWeekDate()),
        backgroundColor: [
          'rgba(146, 35, 168, 0.3)',
        ],
        borderColor: [
          'rgba(146, 35, 168, 1)',
        ],
        borderWidth: 2,
      },
      {
        label: 'Last week top',
        type: 'line',
        backgroundColor: 'rgba(146, 35, 168, 0.3)',
        borderColor: 'transparent',
        pointRadius: 0,
        fill: 0,
        tension: 0,
        data: [25, 25.1, 26, 26.6, 26, 27, 27],
        yAxisID: 'y',
        xAxisID: 'x',
      },
      {
        label: 'Last week bottom',
        type: 'line',
        backgroundColor: 'rgba(146, 35, 168, 0.3)',
        borderColor: 'transparent',
        pointRadius: 0,
        fill: 0,
        tension: 0,
        data: [23, 21, 24, 24.7, 25, 23, 25],
        yAxisID: 'y',
        xAxisID: 'x',
      },
    ],
  };

  function getLastWeekDate() {
    const date = new Date();
    date.setDate(date.getDate()-7);
    return date;
  };

  function getMeasurementArray(date) {
    const firstDay = startOfWeek(date, {weekStartsOn: 1});
    const lastDay = endOfWeek(date, {weekStartsOn: 1});

    // get an array with entries of current week
    const currentWeekEntries = data.filter((obj) =>
      obj.dateTime >= firstDay && obj.dateTime <= lastDay);

    // used so Monday is first day of the week not Sunday
    function getDayExtended(date) {
      let day = date.getDay();
      if (day == 0) {
        return 6;
      }
      return --day;
    };
    // sum the temps for a day and create counter
    const average = [0, 0, 0, 0, 0, 0, 0];
    const counter = [0, 0, 0, 0, 0, 0, 0];

    if (measurement === Measurement.TEMPERATURE) {
      currentWeekEntries.forEach((element) => {
        const arrayIndex = getDayExtended(element.dateTime);
        average[arrayIndex] += element.temp;
        counter[arrayIndex]++;
      });
    } else if (measurement === Measurement.HUMIDITY) {
      currentWeekEntries.forEach((element) => {
        const arrayIndex = getDayExtended(element.dateTime);
        average[arrayIndex] += element.humidity;
        counter[arrayIndex]++;
      });
    }

    // calculate average
    for (let index = 0; index < average.length; index++) {
      average[index] /= counter[index];
      average[index] = average[index].toPrecision(3);
    }
    return average;
  }

  function updateDatasets() {
    setMeasurement(nextMeasurement(measurement));
    graphChildRef.current.updateGraph();
  }

  return (
    <div>
      <input
        type="button"
        value="Switch"
        onClick={() => updateDatasets()}
      />
      <LineGraph
        data={graphData}
        height={300}
        title={measurement}
        ref={graphChildRef}
      />
    </div>
  );
};

DashboardGraphs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DashboardGraphs;
