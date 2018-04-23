import React, { Component } from 'react';
import sudoku from 'sudoku-umd';
import Board from './Board';
import Header from './Header';
import Menu from './Menu';
import Won from './Won';

class App extends Component {
  constructor(){
    super();
    this.state = {
      initial: [],
      board: [],
      solved: [],
      isWon: false,
      showed: false,
      active: {},
      diffLevel: ''
    }
  }

  componentDidMount() {
    this.getBoard('medium');
    /* this.generateBoard('.................................................................................') */
  }

  componentDidUpdate() {
    console.log(this.state.active);
    
  }

  getBoard(level) {
    let newLevel;
    !level ? newLevel = this.state.diffLevel : newLevel = level;
    const board = sudoku.generate(newLevel),
      solved = sudoku.solve(board);
      this.setState({
        initial: board,
        solved: solved,
        showed: false,
        diffLevel: level
      });
    this.generateBoard(board);
  }

  generateBoard(initialBoard) {
    const board = initialBoard.split('').map((value, index) => {
        let initialValue,  isInitial, column, row;
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
        return {
          id: index,
          value: initialValue,
          column: column,
          row: row,
          initial: isInitial
        }
      });
      this.setState({
        board: board,
        isWon: false
      });
  }

  updateBoard(id, value) {
    const newBoard = this.state.board.map((tile) => { 
      if(tile.id === id) {
          return {...tile, value: value}
      }
      return tile;
    });
    this.setState({
      board: newBoard
    });
  }

  resetBoard() {
    this.generateBoard(this.state.initial);
    /* const initialBoard = this.getInitialBoard();
    this.setState({
      board: initialBoard
    }); */
  }

  /* getInitialBoard() {
    const initialBoard = this.state.board.map((tile) => {
      if(tile.initial === false) {
        return {...tile, value: ''}
      } 
      return tile;
    });
    return initialBoard;
  } */

  solveBoard() {
    const solved = this.getSolvedBoard();
    this.generateBoard(solved);  
  }

  getSolvedBoard() {
    let solved;
    if (sudoku.solve(this.stringifyBoard())) {
      solved = sudoku.solve(this.stringifyBoard());
    } else {
      solved = this.state.solved;
    } 
    return solved;
  }

  checkBoard() {
    const solved = this.getSolvedBoard();
    const board = this.state.board.map((tile, index) => {
      const solvedChar = solved.charAt(index);
      if (tile.value === solvedChar) {
        return {...tile, correct: true}
      } else {
        return {...tile, correct: false}
      }
    });
    solved === this.stringifyBoard() ? this.setState({isWon: true}) : console.log('nie wygrana');
    this.setState({
      board: board
    })
  }

  stringifyBoard() {
    const stringifiedBoard = this.state.board.map(tile => {
      const newTile = Object.assign({}, tile);
      if(newTile.value === '') {
        newTile.value = '.';
      }
      return newTile.value;
    });
    return stringifiedBoard.join('');
  }

  handleMenu() {
    this.setState({
      showed: !this.state.showed
    });
  }

  setActive(column, row, isFocused) {
    console.log(`główna: /n kolumna: ${column}, wiersz: ${row}`);
    isFocused ?
      this.setState({
        active: {
          column: column,
          row: row
        }
      }) : 
      this.setState({
        active: {}
      });
  }
  
  render() {
    return (
      <div className="App">
        {this.state.isWon === true ? <Won generate={() => this.getBoard()} reset={() => this.resetBoard()}/>: false}
        <Header />
        <Menu handleMenu={() => this.handleMenu()} generate={(level) => this.getBoard(level)} reset={() => this.resetBoard()} solve={() => this.solveBoard()} check={() => this.checkBoard()} showed={this.state.showed}/>
        <Board board={this.state.board} updateBoard={(id, value) => this.updateBoard(id, value)} setActive={(column, row, isFocused) => this.setActive(column, row, isFocused)} active={this.state.active}/>
      </div>
    );
  }
}

export default App;
