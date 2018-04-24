import {connect} from 'react-redux';
import Menu from '../presentational/Menu';
import {getBoard, resetBoard, solveBoard, checkBoard} from '../actions/board-actions';

const mapDispatchToProps = dispatch => ({
    getBoard: (level) => dispatch(getBoard(level)),
    resetBoard: () => dispatch(resetBoard()),
    solveBoard: () => dispatch(solveBoard()),
    checkBoard: () => dispatch(checkBoard())
});

export default connect(null, mapDispatchToProps)(Menu);