import React from 'react';
import Tile from './Tile';

class Board extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            board: []
        };
    }

    static getDerivedStateFromProps(newProps, prevState) {
        console.log(newProps);
        console.log(prevState);
        
        return {
            board: newProps.initialBoard.split('')
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="board">
                <h2>Board</h2>
                {
                    this.state.board.map( tile => {
                    return <Tile handleChange={e => this.handleChange(e)} value={this.state.value} initialValue={tile}/>
                    })
                }
            </div>
        );
    }
}

export default Board;