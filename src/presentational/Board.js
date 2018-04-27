import React, { Component } from 'react';
import Tile from './Tile';
import '../css/Board.css';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      active: {}
    };
  }

  handleChange(e, id) {
    if ((e.target.value > 0 && e.target.value < 10) || e.target.value === '') {
      this.props.updateBoard(id, e.target.value);
    } else {
      return;
    }
  }

  handleFocus(column, row, square) {
    this.setActive(column, row, square);
  }

  setActive(column, row, square) {
    column && row && square
      ? this.setState({
          active: {
            column: column,
            row: row,
            square: square
          }
        })
      : this.setState({
          active: {}
        });
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
              active={this.state.active}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
