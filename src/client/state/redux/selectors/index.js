import { createSelector } from 'reselect';

export const pageSelector = ({ page }) => page;
export const appSelector = ({ app }) => app;

export const pageFieldsSelector = createSelector(
  pageSelector,
  page => page.items && page.items[0].fields
);

export const toggleModalSelector = createSelector(appSelector, app => {
  return app.toggleModal;
});
