import { toggleNavHidden } from './nav.actions';
import NavActionTypes from './nav.types';

describe('Nav actions test', () => {
  it('should create an action to toggle nav hidden', () => {
    const expectedAction = {
      type: NavActionTypes.TOGGLE_NAV_HIDDEN
    };
    expect(toggleNavHidden()).toEqual(expectedAction);
  });
});