import {
  GET_BOARD,
  SOLVE_BOARD,
  CHECK_BOARD,
  RESET_BOARD
} from '../actions/board-actions';
import { TOGGLE_MENU } from '../actions/menu-actions';

const initialState = {
  showed: false
};

export const menuReducer = function(state = initialState, action) {
  switch (action.type /* 
    case GET_BOARD: */) {
    case SOLVE_BOARD:
    case CHECK_BOARD:
    case RESET_BOARD:
      return { ...state, showed: false };
    case TOGGLE_MENU:
      return { ...state, showed: !state.showed };
    default:
      return state;
  }
};
