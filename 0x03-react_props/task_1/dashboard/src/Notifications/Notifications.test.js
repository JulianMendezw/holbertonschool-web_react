/* eslint-disable jest/valid-expect */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('Notifications renders without crashing', () => {
  it('Notifications renders three list items', () => {
    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });
  it('Notifications renders the text', () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>));
  });
});
