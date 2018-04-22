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
      isWon: false
    }
  }

  componentDidMount() {
    this.getBoard();
  }

  getBoard() {
    const board = sudoku.generate('medium'),
      solved = sudoku.solve(board);
      this.setState({
        initial: board,
        solved: solved
      });
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
  
  render() {
    return (
      <div className="App">
        {this.state.isWon === true ? <Won generate={() => this.getBoard()} reset={() => this.resetBoard()}/>: false}
        <Header />
        <Board board={this.state.board} updateBoard={(id, value) => this.updateBoard(id, value)}/>
        <Menu generate={() => this.getBoard()} reset={() => this.resetBoard()} solve={() => this.solveBoard()} check={() => this.checkBoard()}/>
      </div>
    );
  }
}

export default App;
