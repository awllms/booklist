import React from 'react';
import { shallow } from 'enzyme';
import { AuthorsPage } from './AuthorsPage';
import CategoryItems from '../../components/CategoryItems/CategoryItems';

describe('AuthorsPage Component', () => {
  let wrapper;
  let mockMatch;
  let mockAuthorItems;
  
  beforeEach(() => {

    mockMatch = {
      params: {
        authorName: 'Sample Author'
      }
    };

    mockAuthorItems = [{ id: 1, authorName: 'Sample Author'}];
    const mockProps = {
      match: mockMatch, 
      authorItems: mockAuthorItems
    };

    wrapper = shallow(<AuthorsPage { ...mockProps } />);
  });

  it('should render AuthorsPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});