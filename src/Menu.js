import React from 'react';

const Menu = (props) => 
    <div className="buttons">
        <button onClick={props.check}>Check</button>
        <button onClick={props.handleMenu}>New Game</button>
        <div className={'dropdown ' + ( props.showed ? 'show' : '')}>
            <button onClick={() => props.generate('easy')}>Easy</button>
            <button onClick={() => props.generate('medium')}>Medium</button>
            <button onClick={() => props.generate('hard')}>Hard</button>
            <button onClick={() => props.generate('very-hard')}>Very hard</button>
            <button onClick={() => props.generate('insane')}>Insane</button>
            <button onClick={() => props.generate('inhuman')}>Inhuman</button>
        </div>
        <button onClick={props.solve}>Solve</button>
        <button onClick={props.reset}>Restart</button>
    </div>;

export default Menu;