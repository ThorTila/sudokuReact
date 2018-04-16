import React, { Component } from 'react';
import sudoku from 'sudoku-umd';
import Board from './Board';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
  constructor(){
    super();
    this.state = {
      initialBoard: '',
      actualBoard: ''
    }
  }
  generateSudoku() {
    const board = sudoku.generate('easy');
    this.setState({
      initialBoard: board,
      actualBoard: board
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Board initialBoard={this.state.initialBoard}/>
        <Menu generate={() => this.generateSudoku()}/>
      </div>
    );
  }
}

export default App;
