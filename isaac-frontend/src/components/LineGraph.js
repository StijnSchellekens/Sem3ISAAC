import React from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
const Graph = ({data, height, title}) => {
  return (
    <div>
      <Line
        height={height}
        data={data}
        options= {{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: title,
            },
          },
          elements: {
            line: {
              tension: 0.4, // may cause bizzare curves
            },
          },
        }}
      />
    </div>

  );
};

Graph.propTypes = {
  data: PropTypes.object.isRequired,
};
Graph.propTypes = {
  height: PropTypes.number.isRequired,
};
Graph.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Graph;

