import React from 'react';
import { shallow } from 'enzyme';
import { ProductsPage } from './ProductsPage';

describe('ProductsPage Component', () => {
  let wrapper;
  let mockMatch;

  beforeEach(() => {
    mockMatch = {
      path: '/products'
    }

    const mockProps = {
      match: mockMatch
    };
    wrapper = shallow(<ProductsPage { ...mockProps } />);
  });

  it('should render ProductsPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});