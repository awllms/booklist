import React from 'react';
import { shallow } from 'enzyme';
import { BreadCrumbNav } from './BreadCrumbNav';

describe('BreadCrumbNav Component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  
  beforeEach(() => {

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      history: mockHistory,
      title: 'This is a title'
    };

    wrapper = shallow(<BreadCrumbNav { ...mockProps } />)
  });

  it('should render BreadCrumbNav Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked', () => {
    wrapper.find('h4').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });
});