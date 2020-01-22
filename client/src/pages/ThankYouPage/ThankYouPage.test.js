import React from 'react';
import { shallow } from 'enzyme';
import { ThankYouPage } from './ThankYouPage';
import CustomButton from '../../components/CustomButton/CustomButton';

describe('ThankYouPage Component', () => {
  let wrapper;
  let wrapper2;
  let wrapper3;
  let mockLocation;
  let mockLocation2;
  let mockLocation3;
  let mockHistory;

  beforeEach(() => {
    mockLocation = {
      state: {
        token: '12819372874824'
      }
    }

    mockLocation2 = {
      state: {}
    };

    mockLocation3 = {};

    mockHistory = { push: jest.fn() };

    const mockProps = {
      location: mockLocation,
      history: mockHistory
    };

    const mockProps2 = {
      location: mockLocation2,
      history: mockHistory
    };

    const mockProps3 = {
      location: mockLocation3,
      history: mockHistory
    };

    wrapper = shallow(<ThankYouPage { ...mockProps } />);
    wrapper2 = shallow(<ThankYouPage { ...mockProps2 } />);
    wrapper3 = shallow(<ThankYouPage { ...mockProps3 } />);
  });

  it('should render ThankYouPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when CustomButton component is clicked', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should not render thank you page if there is not state on location object', () => {
    expect(wrapper2.exists('.thank-you-page')).toBe(false);
  });
  
  it('should not render thank you page if there is not token', () => {
    expect(wrapper3.exists('.thank-you-page')).toBe(false);
  });
});