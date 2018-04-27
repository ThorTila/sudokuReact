import React, { Component } from 'react';
import Board from '../containers/BoardContainer';
import Header from './Header';
import Menu from '../containers/MenuContainer';
import Won from '../containers/WonContainer';
import DevTools from '../containers/DevTools';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getBoard('medium');
  }

  render() {
    return (
      <div className="App">
        {this.props.isWon === true ? <Won /> : false}
        <Header />
        <Menu />
        <Board />
        <DevTools />
      </div>
    );
  }
}

export default App;
