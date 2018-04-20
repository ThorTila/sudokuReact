import React from 'react';

const Tile = (props) => <input type="text" className={(props.tile.correct ? 'correct ' : props.tile.correct === false ? 'incorrect ' : '') + (props.tile.initial ? 'initialed-tile ' : '') + 'tile'} onChange={(e, index) => props.handleChange(e, props.tile.id)} readOnly={props.tile.initial} value={props.tile.value}/>;

export default Tile;