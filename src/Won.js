import React from 'react';

const Won = (props) => 
    <div className="won">
        <h1>You won!!!</h1>
        <div>
            <button onClick={props.generate}>New Game</button>
            <button onClick={props.reset}>Restart</button>
        </div>
    </div>;

export default Won;