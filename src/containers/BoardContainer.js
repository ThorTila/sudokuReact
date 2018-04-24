import {connect} from 'react-redux';
import Board from '../presentational/Board';
import { addValue } from '../actions/board-actions';

const mapStateToProps = state => ({
    board: state.boardReducer.currentBoard
});

const mapDispatchToProps = dispatch => ({
    updateBoard: (id, value) => dispatch(addValue(id, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);