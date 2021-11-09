/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import { shallow, render, mount, configure } from 'enzyme';
import React from  'react';
import App from '../App';

test('should render App without crashing', () => {
	shallow(<App />);
});