import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe('HomePage Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render HomePage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});