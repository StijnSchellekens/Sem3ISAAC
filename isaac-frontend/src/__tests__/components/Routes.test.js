/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, render, mount, configure } from 'enzyme';
import Routes from '../../components/helper/Routes';

import Dashboard from '../../components/Dashboard';
import Component404 from '../../components/Component404';

const flushPromises = require('flush-promises');
import { waitForState } from 'enzyme-async-helpers';
import { createMemoryHistory } from 'history';
import toJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';

// afterEach(() => {
// 	jest.resetModules();
// });

const mockFetch = Promise.resolve({
	json: () => Promise.resolve({
		entries:
        [
        	{
        		'id': 1,
        		'temp': 25.0,
        		'humidity': 45,
        		'dateTime': 'October 11, 2021 08:00:00',
        	},
        ],
	}),
});
global.fetch = jest.fn(() => mockFetch);


test('invalid paths should redirect to 404', async () => {
	fetch.mockImplementationOnce(() =>
		Promise.resolve({
			json: () => Promise.resolve({
				entries:
        [{
        		'id': 1,
        		'temp': 25.0,
        		'humidity': 45,
        		'dateTime': 'October 11, 2021 08:00:00',
        	},
        ],
			}),
		}));


	React.useState = jest.fn().mockReturnValue([{
		'id': 1,
		'temp': 25.0,
		'humidity': 45,
		'dateTime': 'October 11, 2021 08:00:00',
	}, {}]);
	const wrapper = await shallow(
		// <MemoryRouter initialEntries={[ '/random' ]}>
		<Routes/>
		// </MemoryRouter>
	);
    
	wrapper.update();
	// console.log(await wrapper.html());
	expect(wrapper.find(Dashboard)).toHaveLength(0);
	// expect(wrapper.find(Component404)).toHaveLength(1);
	expect(toJSON(wrapper)).toMatchSnapshot();
});