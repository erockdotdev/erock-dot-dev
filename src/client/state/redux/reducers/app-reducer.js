import { UI_TOGGLE_MODAL } from '../types';

const initialState = {
  toggleModal: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UI_TOGGLE_MODAL: {
      const { toggleModal } = state;
      return {
        toggleModal: !toggleModal
      };
    }
    default:
      return state;
  }
};
