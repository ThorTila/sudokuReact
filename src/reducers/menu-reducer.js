import { HIDE_MENU, TOGGLE_MENU } from '../actions/menu-actions';

const initialState = {
  showed: false
};

export const menuReducer = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, showed: !state.showed };
    case HIDE_MENU:
      return { ...state, showed: false };
    default:
      return state;
  }
};
