import React from 'react';
import {Line} from 'react-chartjs-2';

const Graph = (values) => {
  console.log(values);
  return (
    <div>
      <Line
        data={{
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Temperature',
            data: [1, 3, 4],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          }],
        }}
        options={{
          maintainAspectRatio: false,
        }}
        height={400}
        width={500}
      />
    </div>
  );
};

export default Graph;
