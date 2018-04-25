import React from 'react';

const Tile = props => (
  <div className="tile">
    <input
      type="text"
      className={
        (props.tile.correct
          ? 'correct '
          : props.tile.correct === false
            ? 'incorrect '
            : '') +
        (props.tile.initial ? 'initialed-tile ' : '') +
        (props.tile.column === props.active.column ||
        props.tile.row === props.active.row ||
        props.active.square === props.tile.square
          ? 'active '
          : '') +
        'main-tile'
      }
      onChange={(e, index) => props.handleChange(e, props.tile.id)}
      onFocus={(column, row, square) =>
        props.handleFocus(props.tile.column, props.tile.row, props.tile.square)
      }
      onBlur={() => props.handleFocus()}
      readOnly={props.tile.initial}
      value={props.tile.value}
    />
    {/* <input className="candidates-tile"/> */}
  </div>
);

export default Tile;
