import { createSelector } from 'reselect';

const selectAlert = state => state.alert;

export const selectAlertItem = createSelector(
  [selectAlert],
  alert => alert.alert
);