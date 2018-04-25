import React, { Component } from 'react';
import Board from '../containers/BoardContainer';
import Header from './Header';
import Menu from '../containers/MenuContainer';
import Won from '../containers/WonContainer';
import DevTools from '../containers/DevTools';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showed: false,
      active: {}
    };
  }

  componentWillMount() {
    this.props.getBoard('medium');
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
      <div className="App">
        {this.props.isWon === true ? <Won /> : false}
        <Header />
        <Menu />
        <Board
          setActive={(column, row, square) =>
            this.setActive(column, row, square)
          }
          active={this.state.active}
        />
        <DevTools />
      </div>
    );
  }
}

export default App;
