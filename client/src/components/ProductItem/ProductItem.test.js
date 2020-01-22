import React from 'react';
import { shallow } from 'enzyme';
import { ProductItem } from './ProductItem';
import { mapDispatchToProps } from './ProductItem';
import CustomButton from '../CustomButton/CustomButton';
import ReactHtmlParser from 'react-html-parser';

describe('Header Component', () => {
  let wrapper;
  let mockProduct;
  let mockAddItem;
  let mockItem;
  let mockPayload;
  let dummyFunction = jest.fn();

  mockPayload = {
    type: 'ADD_ITEM',
    payload: {
      title: 'Sample Item',
      imageUrl: 'example.com',
      subTitle: 'Sample Subtitle',
      author: 'Sample Author',
      narrator: 'Sample Narrator',
      length: 'Sample Length',
      releaseDate: 'Sample Release Date',
      language: 'English',
      publisher: 'Sample Publisher',
      price: 20,
      description: 'This is a sample description'
    }
  }
  
  beforeEach(() => {
    
    mockItem = {
      title: 'Sample Item',
      imageUrl: 'example.com',
      subTitle: 'Sample Subtitle',
      author: 'Sample Author',
      narrator: 'Sample Narrator',
      length: 'Sample Length',
      releaseDate: 'Sample Release Date',
      language: 'English',
      publisher: 'Sample Publisher',
      price: 20,
      description: 'This is a sample description'
    };

    mockProduct = [mockItem];
    mockAddItem = jest.fn();

    const mockProps = {
      product: mockProduct,
      addItem: mockAddItem
    }
    
    wrapper = shallow(<ProductItem { ...mockProps } />);
  });

  it('should render ProductItem Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when CustomButton is clicked', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should dispatch addItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(mockPayload);
  });
});
