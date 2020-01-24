import { selectNavHidden } from './nav.selectors';

describe('Nav Selectors', () => {
  const mockState = {
    nav: {
      navHidden: true,
    }
  };

  it('should select navHidden off of state', () => {
    expect(selectNavHidden(mockState)).toEqual(mockState.nav.navHidden);
  });
});
