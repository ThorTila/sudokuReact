import { solve } from 'sudoku-umd';

export function generateBoard (initialBoard) {
    const board = initialBoard.split('').map((value, index) => {
        let initialValue,  isInitial, column, row, square;
        if (value === '.') {
          initialValue = '';
          isInitial = false;
         } else {
           initialValue = value;
           isInitial = true;
        }
        row = Math.floor((index / 9) + 1);
        column = index + 1;
        while (column > 9) {
          column -= 9;
        };
        square = (Math.ceil(column / 3) + ((Math.ceil(row / 3) * 3) - 3));
        return {
          id: index,
          value: initialValue,
          column: column,
          row: row,
          square: square,
          initial: isInitial
        }
      });
      return board;
}

export function getSolvedBoard(board, initialSolved) {
    let solved = typeof board === 'string' ? board : solve(stringifyBoard(board));
    if (solved) {
      return solve(solved);
    } else {
      solved = initialSolved;
    } 
    return solved;
  }
  
export function stringifyBoard(board) {
    const stringifiedBoard = board.map(tile => {
      const newTile = Object.assign({}, tile);
      if(newTile.value === '') {
        newTile.value = '.';
      }
      return newTile.value;
    });
    return stringifiedBoard.join('');
  }