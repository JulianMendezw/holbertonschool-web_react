/* eslint-disable jest/valid-expect */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';


const wrapper = shallow(<Footer />);

describe('<Footer />', () => {
  it('render App component', () => {
    shallow(<Footer />);
    expect(wrapper.exists());
  });
  it('renders App-footer', () => {
    const p = wrapper.find('p');

    const re = /Copyright/;

    expect(re.test(wrapper.text()));
  });
});
