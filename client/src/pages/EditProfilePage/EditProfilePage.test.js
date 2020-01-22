import React from 'react';
import { shallow } from 'enzyme';
import { EditProfilePage } from './EditProfilePage';

describe('EditProfilePage Component', () => {
  let wrapper;
  let mockHistory;
  
  beforeEach(() => {
    
    mockHistory = { push: jest.fn() };

    const mockProps = {
      history: mockHistory, 
    };
    
    wrapper = shallow(<EditProfilePage { ...mockProps } />);
  });

  it('should render EditProfilePage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for .back-span span', () => {
    wrapper.find('.back-span').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });
});