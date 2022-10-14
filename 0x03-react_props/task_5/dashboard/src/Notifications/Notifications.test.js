/* eslint-disable jest/valid-expect */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<Notifications />);

describe('Notifications renders without crashing', () => {
  it('renders description text', () => {
    expect(wrapper.find('p').first().text()).to.equal('Here is the list of notifications');
  });
  it('has a close button', () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });
  it('renders a list with three items', () => {
    const listItems = wrapper.find(NotificationItem);
    expect(listItems).to.have.lengthOf(3);
  });
});
