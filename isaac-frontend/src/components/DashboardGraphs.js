import React, {useState, useEffect} from 'react';
import LineGraph from './LineGraph';
import {startOfWeek, endOfWeek} from 'date-fns';

function DashboardGraphs() {
  //  fetching data from json-server
  const [data, setData] = useState([]);

  useEffect( async () => {
    const res = await fetch('http://localhost:5000/entries');
    setData(await res.json());
  }, []);

  const graphData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        fill: true,
        label: 'Temperature',
        data: data.map((obj )=> obj.temp),
        backgroundColor: [
          'rgba(13, 99, 132, 0.3)',
        ],
        borderColor: [
          'rgba(13, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
      {
        fill: false,
        label: 'Humidity',
        data: data.map((obj )=> obj.humidity),
        backgroundColor: [
          'rgba(146, 35, 168, 0.3)',
        ],
        borderColor: [
          'rgba(146, 35, 168, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
  function test() {
    const firstDay = startOfWeek(new Date(), {weekStartsOn: 1});
    const lastDay = endOfWeek(new Date(), {weekStartsOn: 1});
    console.log(firstDay, lastDay);
  }
  return (
    <div>
      <LineGraph
        data={graphData}
        height={300}
        title='Temperature'/>
      {test()}
    </div>
  );
}

export default DashboardGraphs;
