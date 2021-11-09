/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import NavBar from '../../components/NavBar';
import { shallow, render, mount, configure } from 'enzyme';


test('should render NavBar without crashing', () => {
	shallow(<NavBar />);
});