import React from 'react';
import Tile from './Tile';
import './Board.css';

class Board extends React.Component { 

    handleChange(e, id) {
        this.props.updateBoard(id, e.target.value);
    }

    render() {
        return (
            <div className="board">
                <h2>Board</h2>
                {
                    this.props.board.map( (tile, index) => {
                    return <Tile key={index} handleChange={(e, id) => this.handleChange(e, id)} value={tile.value} index={tile.id}/>
                    })
                }
            </div>
        );
    }
}

export default Board;