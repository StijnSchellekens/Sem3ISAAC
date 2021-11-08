import React, {useState, useEffect} from 'react';
import iotCrop from '../images/iot-crop1.png';

const rows = 14;
const cols = 32;

const generateGrid = (row, col) => {
	const grid = [];
	for (let i = 0; i < row; i++) {
		grid.push([]);
		for (let j = 0; j < col; j++) {
			if (i == 2 && j == 3) {
				grid[i].push(1);
			} else {
				grid[i].push(0);
			}
		}
	}
	return grid;
};

const HeatmapGrid = () => {
	const [grid, setGrid] = useState(null);

	useEffect(async () => {
		const grid = await generateGrid(rows, cols);
		setGrid(grid);
	}, []);

	const getStyle = (value) => {
		if (value == 1) {
			return 'sensorGrid';
		}

		return 'cellNoWallStyle';
	};

	if (!grid) return <div>Loading...</div>;
	return (
		<div className='gridContainer'>
			<div
				className='gridboardGrid'
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${cols}, 40px`,
					margin: '0vh',
				}}>
				{grid.map((rows, y) => rows.map((col, x) => <div
					key={`${y}-${x}`}
					className={getStyle(grid[y][x])}></div>))}
			</div>
			<img src={iotCrop} className="floor3Grid"/>
		</div>
	);
};
export default HeatmapGrid;
