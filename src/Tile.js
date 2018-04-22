import React from 'react';

const Tile = (props) => 
    <div className="tile">
        <input type="text" className={(props.tile.correct ? 'correct ' : props.tile.correct === false ? 'incorrect ' : '') + (props.tile.initial ? 'initialed-tile ' : '') + 'main-tile'} onChange={(e, index) => props.handleChange(e, props.tile.id)} readOnly={props.tile.initial} value={props.tile.value}/>
        {/* <input className="candidates-tile"/> */}
    </div>;

export default Tile;