import React, { Component } from 'react';
import sudoku from 'sudoku-umd';
import Board from './Board';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
  constructor(){
    super();
    this.state = {
      board: [],
      solved: []
    }
  }

  componentDidMount() {
    this.getBoard();
  }

  getBoard() {
    const board = sudoku.generate('hard'),
      solved = sudoku.solve(board);
      this.setState({
        solved: solved
      })
    this.generateBoard(board);
  }

  generateBoard(initialBoard) {
    const board = initialBoard.split('').map((value, index) => {
        let initialValue,  isInitial;
        if (value === '.') {
          initialValue = '';
          isInitial = false;
         } else {
           initialValue = value;
           isInitial = true;
        }
        return {
          id: index,
          value: initialValue,
          initial: isInitial
        }
      });
      this.setState({
        board: board
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
    const initialBoard = this.getInitialBoard();
    this.setState({
      board: initialBoard
    });
  }

  solveBoard() {
    const stringifiedBoard = this.stringifyBoard(),
      solved = sudoku.solve(stringifiedBoard);  
    this.generateBoard(solved);  
  }

  checkBoard() {
    let solved;

    if (sudoku.solve(this.stringifyBoard())) {
      solved = sudoku.solve(this.stringifyBoard());
    } else {
      solved = this.state.solved;
    }

    const board = this.state.board.map((tile, index) => {
      const solvedChar = solved.charAt(index);
      if (tile.value === solvedChar) {
        return {...tile, correct: true}
      } else {
        return {...tile, correct: false}
      }
    });
    this.setState({
      board: board
    })
    console.log(solved);
    console.log(board);
  }

  getInitialBoard() {
    const initialBoard = this.state.board.map((tile) => {
      if(tile.initial === false) {
        return {...tile, value: ''}
      } 
      return tile;
    });
    return initialBoard;
  }

  stringifyBoard() {
    const stringifiedBoard = this.state.board.map(tile => {
      if(tile.value === '') {
        tile.value = '.';
      }
      return tile.value;
    });
    return stringifiedBoard.join('');
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Board board={this.state.board} updateBoard={(id, value) => this.updateBoard(id, value)}/>
        <Menu generate={() => this.getBoard()} reset={() => this.resetBoard()} solve={() => this.solveBoard()} check={() => this.checkBoard()}/>
      </div>
    );
  }
}

export default App;
