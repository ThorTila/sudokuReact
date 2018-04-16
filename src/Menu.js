import React from 'react';

const Menu = (props) => 
    <div className="buttons">
        <button>Check</button>
        <button onClick={props.generate}>New Game</button>
        <button>Solve</button>
        <button onClick={props.reset}>Restart</button>
    </div>;

export default Menu;