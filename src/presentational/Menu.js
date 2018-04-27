import React from 'react';
import '../css/Menu.css';

const Menu = props => (
  <div className="buttons">
    <button
      onClick={() => {
        props.checkBoard();
        if (props.showed) props.hideMenu();
      }}
    >
      Check
    </button>
    <button onClick={props.toggleMenu}>New Game</button>
    <div className={'dropdown ' + (props.showed ? 'show' : '')}>
      <button
        onClick={() => {
          props.getBoard('easy');
          props.hideMenu();
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          props.getBoard('medium');
          props.hideMenu();
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          props.getBoard('hard');
          props.hideMenu();
        }}
      >
        Hard
      </button>
      <button
        onClick={() => {
          props.getBoard('very-hard');
          props.hideMenu();
        }}
      >
        Very hard
      </button>
      <button
        onClick={() => {
          props.getBoard('insane');
          props.hideMenu();
        }}
      >
        Insane
      </button>
      <button
        onClick={() => {
          props.getBoard('inhuman');
          props.hideMenu();
        }}
      >
        Inhuman
      </button>
    </div>
    <button
      onClick={() => {
        props.solveBoard();
        if (props.showed) props.hideMenu();
      }}
    >
      Solve
    </button>
    <button
      onClick={() => {
        props.resetBoard();
        if (props.showed) props.hideMenu();
      }}
    >
      Restart
    </button>
  </div>
);

export default Menu;
