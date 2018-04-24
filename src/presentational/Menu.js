import React from 'react';

const Menu = (props) => 
    <div className="buttons">
        <button onClick={() => props.checkBoard()}>Check</button>
        <button onClick={props.handleMenu}>New Game</button>
        <div className={'dropdown ' + ( props.showed ? 'show' : '')}>
            <button onClick={() => props.getBoard('easy')}>Easy</button>
            <button onClick={() => props.getBoard('medium')}>Medium</button>
            <button onClick={() => props.getBoard('hard')}>Hard</button>
            <button onClick={() => props.getBoard('very-hard')}>Very hard</button>
            <button onClick={() => props.getBoard('insane')}>Insane</button>
            <button onClick={() => props.getBoard('inhuman')}>Inhuman</button>
        </div>
        <button onClick={() => props.solveBoard()}>Solve</button>
        <button onClick={() => props.resetBoard()}>Restart</button>
    </div>;

export default Menu;