/* eslint-disable jest/valid-expect */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

const wrapper = shallow(<Login />);

describe('<Login />', () => {
  it('render App component', () => {
    shallow(<Login />);
    expect(wrapper.exists());
  });
  it('renders App-body', () => {
    const inputs = wrapper.find('input');
    const labels = wrapper.find('label');

    expect(inputs).to.have.lengthOf(2);
    expect(labels).to.have.lengthOf(2);;
  });
});
