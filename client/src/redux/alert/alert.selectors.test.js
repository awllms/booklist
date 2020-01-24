import { selectAlertItem } from './alert.selectors';

describe('Alert Selectors', () => {
  const mockState = {
    alert: {
      alert: null
    }
  };
  it('should select alert state', () => {
    expect(selectAlertItem(mockState)).toEqual(mockState.alert.alert);
  });
});