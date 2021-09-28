import {Line} from 'react-chartjs-2';
import React from 'react';
import PropTypes from 'prop-types';

const Graph = ({values}) => {
  return (
    <div>
      <Line
        /*
        data={{
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'],
        }}


        */
        data={{
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Temperature',
            data: values,
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

Graph.propTypes = {
  values: PropTypes.array.isRequired,
};

export default Graph;

