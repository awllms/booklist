import React from 'react';
import { shallow } from 'enzyme';
import { SignInAndSignUpPage } from './SignInAndSignUpPage';

describe('SignInAndSignUpPage Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<SignInAndSignUpPage />);
  });

  it('should render SignInAndSignUpPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});