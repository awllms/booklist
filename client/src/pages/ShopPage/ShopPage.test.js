import React from 'react';
import { shallow } from 'enzyme';
import { ShopPage } from './ShopPage';

describe('ShopPage Component', () => {
  let wrapper;
  let mockMatch;

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    }

    const mockProps = {
      match: mockMatch
    };
    wrapper = shallow(<ShopPage { ...mockProps } />);
  });

  it('should render ShopPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});