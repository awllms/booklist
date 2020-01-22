import React from 'react';
import { shallow } from 'enzyme';
import { NavIcon } from './NavIcon';

describe('NavIcon Component', () => {
  let wrapper;
  let mockToggleNavHidden;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {

    mockToggleNavHidden = jest.fn();

    const mockProps = {
      toggleNavHidden: mockToggleNavHidden
    };

    wrapper = shallow(<NavIcon { ...mockProps } />);
  });

  it('should render NavDropDown Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when clicked for nav-icon div', () => {
    wrapper.find('.nav-icon').simulate('click');
    expect(mockToggleNavHidden).toHaveBeenCalled();
  });

});
