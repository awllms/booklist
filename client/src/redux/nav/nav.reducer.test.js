import NavActionTypes from './nav.types';
import navReducer from './nav.reducer';

describe('navReducer test', () => {
  const initialState = {
    navHidden: true
  };

  const mockToggleHiddenAction = {
    type: NavActionTypes.TOGGLE_NAV_HIDDEN
  };

  it('should return the initial state', () => {
    expect(navReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_NAV_HIDDEN action', () => {
    expect(navReducer(initialState, mockToggleHiddenAction)).toEqual({
      ...initialState,
      navHidden: !initialState.navHidden
    });
  });
});