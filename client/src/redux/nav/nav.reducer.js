import NavActionTypes from './nav.types';

const INITIAL_STATE = {
  navHidden: true
};

const navReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case NavActionTypes.TOGGLE_NAV_HIDDEN:
      return {
        ...state,
        navHidden: !state.navHidden
      };
    default:
      return state;
  }
};

export default navReducer;