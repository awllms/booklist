import React from 'react';
import { shallow } from 'enzyme';
import { ImageSlider } from './ImageSlider';

describe('ImageSlider Component', () => {
  let wrapper;
  let mockHistory;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {
    
    mockHistory = { push: jest.fn() };

    const mockProps = { history: mockHistory };

    wrapper = shallow(<ImageSlider { ...mockProps } />);
  });

  it('should render ImageSlider Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for image-slider-placeholder1 div', () => {
    wrapper.find('#image-slider-placeholder1').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call history.push when clicked for image-slider-placeholder2 div', () => {
    wrapper.find('#image-slider-placeholder2').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call history.push when clicked for image-slider-placeholder3 div', () => {
    wrapper.find('#image-slider-placeholder3').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });
});