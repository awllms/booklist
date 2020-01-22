import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesPage } from './CategoriesPage';
import CategoryItems from '../../components/CategoryItems/CategoryItems';

describe('CategoriesPage Component', () => {
  let wrapper;
  let mockMatch;
  let mockCategoryItemsList;
  
  beforeEach(() => {

    mockMatch = {
      params: {
        categoryTitle: 'Sample Category'
      },
      path: '/categories'
    };

    mockCategoryItemsList = [[{ id: 1, authorName: 'Sample Author'}]];
    const mockProps = {
      match: mockMatch, 
      categoryItemsList: mockCategoryItemsList
    };

    wrapper = shallow(<CategoriesPage { ...mockProps } />);
  });

  it('should render CategoriesPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});