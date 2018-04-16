import React, { Component } from 'react';
import sudoku from 'sudoku-umd';
import Board from './Board';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
  constructor(){
    super();
    this.state = {
      board: []
    }
  }

  componentDidMount() {
    this.getBoard();
  }

  getBoard() {
    const board = sudoku.generate('easy');
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
    const newBoard = this.state.board.map((tile) => {
      if(tile.initial === false) {
        return {...tile, value: ''}
      } 
      return tile;
    });
    this.setState({
      board: newBoard
    });
  }

  solveBoard() {
    const stringifiedBoard = this.stringifyBoard(),
      solved = sudoku.solve(stringifiedBoard);  
    this.generateBoard(solved);  
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
        <Menu generate={() => this.getBoard()} reset={() => this.resetBoard()} solve={() => this.solveBoard()}/>
      </div>
    );
  }
}

export default App;
