/* eslint-disable no-unreachable */
import { UI_TOGGLE_MODAL, UI_TOGGLE_MOBILE_MENU } from '../types';

const initialState = {
  toggleModal: false,
  toggleMobileMenu: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UI_TOGGLE_MODAL: {
      const { toggleModal } = state;
      return {
        toggleModal: !toggleModal
      };
    }
    case UI_TOGGLE_MOBILE_MENU: {
      const { toggleMobileMenu } = state;
      return {
        toggleMobileMenu: !toggleMobileMenu
      };
    }
    default:
      return state;
  }
};
