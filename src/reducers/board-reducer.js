import {
  GET_BOARD,
  SOLVE_BOARD,
  CHECK_BOARD,
  RESET_BOARD,
  ADD_VALUE
} from '../actions/board-actions';
import {
  generateBoard,
  getSolvedBoard,
  stringifyBoard
} from './auxiliaryFunctions';
import { generate } from 'sudoku-umd';

const initialState = {
  initialBoard: [],
  currentBoard: [],
  solvedBoard: [],
  highlighted: {
    column: false,
    row: false,
    square: false
  },
  isWon: false,
  diffLevel: ''
};

export const boardReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_BOARD: {
      let newLevel;
      !action.diffLevel
        ? (newLevel = state.diffLevel)
        : (newLevel = action.diffLevel);
      const initial = generate(newLevel),
        solved = getSolvedBoard(initial),
        current = generateBoard(initial);
      return {
        ...state,
        initialBoard: initial,
        currentBoard: current,
        solvedBoard: solved,
        diffLevel: newLevel,
        isWon: false
      };
    }
    case SOLVE_BOARD: {
      const solvedStringifiedBoard = getSolvedBoard(
          state.currentBoard,
          state.solvedBoard
        ),
        solvedBoard = generateBoard(solvedStringifiedBoard);
      return { ...state, currentBoard: solvedBoard };
    }
    case RESET_BOARD: {
      const board = generateBoard(state.initialBoard);
      return { ...state, currentBoard: board, isWon: false };
    }
    case CHECK_BOARD: {
      const solved = getSolvedBoard(state.currentBoard, state.solvedBoard),
        newBoard = state.currentBoard.map((tile, index) => {
          const solvedChar = solved.charAt(index);
          if (tile.value === solvedChar) {
            return { ...tile, correct: true };
          } else {
            return { ...tile, correct: false };
          }
        });
      let isWon = false;
      if (solved === stringifyBoard(state.currentBoard)) {
        isWon = true;
      }
      return { ...state, currentBoard: newBoard, isWon: isWon };
    }
    case ADD_VALUE: {
      const newBoard = state.currentBoard.map(tile => {
        if (tile.id === action.id) {
          return { ...tile, value: action.value, correct: undefined };
        }
        return tile;
      });
      return { ...state, currentBoard: newBoard };
    }
    default:
      return state;
  }
};
