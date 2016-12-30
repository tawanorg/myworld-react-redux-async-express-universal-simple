import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

describe('Welcome', () => {
	let app = shallow(<App />);

	it('App renders Welcome App with connection to nested component', () => {
    	expect(app.find('div').text()).toEqual("Welcome App<Connect(App) />");
  	});
});
