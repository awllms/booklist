import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render Footer Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});