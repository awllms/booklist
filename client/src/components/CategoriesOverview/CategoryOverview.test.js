import React from 'react';
import { shallow } from 'enzyme';
import { CategoryOverview } from './CategoriesOverview';
import DirectoryItems from '../DirectoryItems/DirectoryItems';

describe('CategoryOverview Component', () => {
  let wrapper;
  let mockCategories;
  
  beforeEach(() => {

    mockCategories = [
      {
        categoryName: 'Category 1',
        items: [{id: 1}, {id: 2}, {id:3}]
      },
      {
        categoryName: 'Category 2',
        items: [{id: 1}, {id: 2}, {id:3}]
      },
      {
        categoryName: 'Category 3',
        items: [{id: 1}, {id: 2}, {id:3}]
      }
    ];

    const mockProps = {
      categories: mockCategories
    };

    wrapper = shallow(<CategoryOverview { ...mockProps } />);
  });

  it('should render CategoryOverview Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct amount of DirectoryItems as categories length', () => {
    expect(wrapper.find(DirectoryItems).length).toEqual(mockCategories.length)
  });
});