import React, {useState, useEffect} from 'react';


import Dashboard from '../Dashboard';
import Heatmap from '../Heatmap';
import Notifications from '../Notifications';
import Advanced from '../Advanced';
import Settings from '../Settings';

import {serverFetch} from '../../utils/server-fetch';

import {
	Switch,
	Route,
} from 'react-router-dom';

const Routes = () => {
	const [data, setData] = useState(null);
	useEffect( async () => {
		// const rawData = await (await fetch('http://localhost:5000/entries')).json();
		const rawData = await serverFetch();
		setData(await rawData.map((obj) => {
			obj.dateTime = new Date(obj.dateTime);
			return obj;
		}));
	}, []);

	return (
		<Switch>
			<Route path="/heatmap">
				<Heatmap data={data}/>
			</Route>
			<Route path='/notifications'>
				<Notifications />
			</Route>
			<Route path='/advanced'>
				<Advanced />
			</Route>
			<Route path='/settings'>
				<Settings />
			</Route>
			<Route path="/">
				<Dashboard data={data}/>
			</Route>
		</Switch>
	);
};

export default Routes;
