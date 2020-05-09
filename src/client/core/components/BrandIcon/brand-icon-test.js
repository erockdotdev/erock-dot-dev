import React from 'react';
import { shallow } from 'enzyme';
import BrandIcon from './index';

describe('Component: ProjectSlide', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BrandIcon />);
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
