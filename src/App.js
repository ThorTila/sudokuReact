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
    this.generateBoard();
  }

  generateBoard() {
    const initialBoard = sudoku.generate('easy').split(''),
      board = initialBoard.map((value, index) => {
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
    console.log('reset');
    const newBoard = this.state.board.map((tile) => {
      if(tile.initial === false) {
        return {...tile, value: ''}
      } 
      return tile;
    });
    this.setState({
      board: newBoard
    });
    console.log(newBoard);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Board board={this.state.board} updateBoard={(id, value) => this.updateBoard(id, value)}/>
        <Menu generate={() => this.generateBoard()} reset={() => this.resetBoard()}/>
      </div>
    );
  }
}

export default App;
