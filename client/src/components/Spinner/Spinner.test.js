import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from './Spinner';

describe('Spinner Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('should render Spinner Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});