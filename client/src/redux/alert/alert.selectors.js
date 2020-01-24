import { createSelector } from 'reselect';

export const selectAlert = state => state.alert;

export const selectAlertItem = createSelector(
  [selectAlert],
  alert => alert.alert
);