import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './Directory';

describe('Directory Component', () => {
  let wrapper;
  let mockBestSellers;
  let mockNewReleases;
  let mockComingSoon;
  let mockCategories;

  beforeEach(() => {

    mockBestSellers = [{id: 1}, {id: 2}, {id: 3}];
    mockNewReleases = [{id: 1}, {id: 2}, {id: 3}];
    mockComingSoon = [{id: 1}, {id: 2}, {id: 3}];

    mockCategories = [mockBestSellers, mockNewReleases, mockComingSoon]

    const mockProps = {
      bestSellers: mockBestSellers, 
      newReleases: mockNewReleases, 
      comingSoon: mockComingSoon
    };

    wrapper = shallow(<Directory { ...mockProps } />);
  });

  it('should render Directory Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct amount of DirectoryItems as categories length', () => {
    expect(wrapper.find('.directory').children().length).toEqual(mockCategories.length);
  });
});