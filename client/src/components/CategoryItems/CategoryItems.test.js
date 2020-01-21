import React from 'react';
import { shallow } from 'enzyme';
import { CategoryItems } from './CategoryItems';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

describe('CategoryItems Component', () => {
  let wrapper;
  let mockCategoryItems;
  let mockCategoryTitle;
  
  beforeEach(() => {

    mockCategoryItems = [{id: 1}, {id: 2}, {id: 3}];
    mockCategoryTitle = 'Category';

    const mockProps = {
      categoryItems: mockCategoryItems, 
      categoryTitle: mockCategoryTitle
    };

    wrapper = shallow(<CategoryItems { ...mockProps } />);
  });

  it('should render CategoryItems Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Directory Item if component has categoryItems', () => {
    expect(wrapper.exists(DirectoryItem)).toBe(true);
  });
  
  it('should not render a Directory Item if categoryItems are empty', () => {
    const mockProps = {
      categoryItems: undefined, 
      categoryTitle: mockCategoryTitle
    };
    wrapper = shallow(<CategoryItems { ...mockProps } />)
    expect(wrapper.exists(DirectoryItem)).toBe(false);
    expect(wrapper.find('.category-items').children().length).toEqual(0);
    expect(mockProps.categoryItems).toBeUndefined();
  });
});