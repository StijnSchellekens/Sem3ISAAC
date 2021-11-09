import React, {useState, useEffect} from 'react';
import iotCrop from '../images/iot-crop1.png';

const rows = 14;
const cols = 32;
const mapTemperature = new Map();

const heatMapColorforValue = (value) => {
	var h = (1.0 - value) * 240;
	return 'hsl(' + h + ', 100%, 50%)';
};

const generateGrid = async (row, col, data) => {
	const grid = [];
	for (let i = 0; i < row; i++) {
		grid.push([]);
		for (let j = 0; j < col; j++) {
			grid[i].push(0);
		}
	}

	for (let  i = 0; i < data.length; i++) {
		const obj = data[i];
		const {x, y} = obj;
		
		grid[Math.round(y - 1)][Math.round(x - 1)] = 1;

		// setting map
		await mapTemperature.set(`${Math.round(x)}-${Math.round(y)}`, obj.temp);
	}
	return grid;
};

// const getColor = (value, temp) => {
// 	if (value === 1) {
// 		const value = heatMapColorforValue(temp);
// 		return {
// 			backgroundColor: value
// 		};
// 	}
// };

const HeatmapGrid = () => {
	const [grid, setGrid] = useState(null);

	useEffect(async () => {
		const rawData = await (await fetch('http://localhost:5000/entries')).json();
		const data = await rawData.map((obj) => {
			obj.dateTime = new Date(obj.dateTime);
			return obj;
		});

		const grid = await generateGrid(rows, cols, data);

		setGrid(grid);
	}, []);

	const getStyle = (value, x , y) => {
		if (value == 1) {
			//heatMapColorforValue(mapTemperature.get(`${Math.round(x + 1)}-${Math.round(y + 1)}`))
			return  {
				background: heatMapColorforValue(mapTemperature.get(`${Math.round(x + 1)}-${Math.round(y + 1)}`)),
				/* border: solid 2px purple; */
				width: '40px',
				height: '40px',
				borderRadius: '10%',
			};
		}

		return {
			backgroundColor: undefined,
			/* border: solid 2px purple; */
			width: '40px',
			height: '40px',
		};
	};

	console.log(mapTemperature);

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
					style={getStyle(grid[y][x], x, y)}
					// style={getColor(grid[y][x])}
				></div>))}
			</div>
			<img src={iotCrop} className="floor3Grid"/>
		</div>
	);
};
export default HeatmapGrid;
