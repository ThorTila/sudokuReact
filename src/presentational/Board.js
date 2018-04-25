import React, { Component } from 'react';
import Tile from './Tile';
import './Board.css';

class Board extends Component {
  handleChange(e, id) {
    if ((e.target.value > 0 && e.target.value < 10) || e.target.value === '') {
      this.props.updateBoard(id, e.target.value);
    } else {
      return;
    }
  }

  handleFocus(column, row, square) {
    this.props.setActive(column, row, square);
  }

  render() {
    return (
      <div className="board">
        <h2>Board</h2>
        {this.props.board.map((tile, index) => {
          return (
            <Tile
              key={index}
              handleChange={(e, id) => this.handleChange(e, id)}
              tile={tile}
              handleFocus={(column, row, square) =>
                this.handleFocus(column, row, square)
              }
              active={this.props.active}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
