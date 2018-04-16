import React from 'react';

const Tile = (props) => <input type="number" min="1" max="9" className='tile' onChange={(e, index) => props.handleChange(e, props.index)} value={props.value}/>;

export default Tile;