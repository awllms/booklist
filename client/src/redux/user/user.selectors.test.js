import * as userSelectors from './user.selectors';

describe('User Selectors', () => {
  const mockState = {
    user: {
      currentUser: null,
      error: null
    }
  };

  it('should select currentUser off of state', () => {
    expect(userSelectors.selectCurrentUser(mockState)).toEqual(mockState.user.currentUser);
  });
});

