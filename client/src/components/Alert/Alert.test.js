import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from './Alert';


describe('Alert Component', () => {
  it('should render Alert Component', () => {
    const mockAlert = {
      status: 'success',
      message: 'This is an alert'
    };
    const wrapper = shallow(<Alert alert={mockAlert} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not show alert if alert is null', () => {
    const mockAlert = null;
    const wrapper = shallow(<Alert alert={mockAlert} />);
    expect(wrapper.find('section[className="alert-container"]').children().length).toEqual(0);
  });

  it('should show alert if alert has value', () => {
    const mockAlert = {
      status: 'success',
      message: 'This is an alert'
    };
    const wrapper = shallow(<Alert alert={mockAlert} />);
    expect(wrapper.find('section[className="alert-container"]').children().length).toEqual(1);
  });
});
