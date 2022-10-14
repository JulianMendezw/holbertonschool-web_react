/* eslint-disable jest/valid-expect */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('render App component', () => {
    shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders Notifications', () => {
    expect(wrapper.contains(<Notifications />));
  });
  it('renders App-header', () => {
    expect(wrapper.contains(<Header className="App-header" />));
  });
  it('renders App-body', () => {
    expect(wrapper.contains(<Login className='App-body' />));
  });
  it('renders App-footer', () => {
    expect(wrapper.contains(<Footer className='App-footer' />));
  });
});
