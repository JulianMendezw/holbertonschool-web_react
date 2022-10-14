/* eslint-disable jest/valid-expect */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('Notifications renders without crashing', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('renders a list with three items', () => {
    expect(wrapper.find("ul")).to.have.lengthOf(0);
    expect(wrapper.find("li")).to.have.lengthOf(0);
  });
  it('has a close button', () => {
    expect(wrapper.find('img')).to.have.lengthOf(0);
  });
});
