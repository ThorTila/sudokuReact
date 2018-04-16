import React from 'react';

const Tile = (props) => <input type="text" /* min="1" max="9" */ className={props.tile.initial ? 'initialed-tile tile' : 'tile'} onChange={(e, index) => props.handleChange(e, props.index)} value={props.value}/>;

export default Tile;