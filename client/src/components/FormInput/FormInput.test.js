import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from './FormInput';

describe('FormInput Component', () => {
  let wrapper;

  beforeEach(() => {

    const mockProps = {
      name:'email',
      type: 'email',
      value: 'example@example.com',
      label: 'Email',
      placeholder: 'Email', 
      required: true 
    }
    wrapper = shallow(<FormInput { ...mockProps } />);
  });

  it('should render FormInput Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});