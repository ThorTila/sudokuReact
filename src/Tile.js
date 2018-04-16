import React from 'react';

const Tile = (props) => <input type="number" min="1" max="9" onChange={e => props.handleChange(e)} value={props.value} placeholder={props.initialValue}/>;

export default Tile;