import {connect} from 'react-redux';
import App from '../presentational/App';
import {getBoard, resetBoard} from '../actions/board-actions';

const mapStateToProps = state => ({
    isWon: state.boardReducer.isWon
})

const mapDispatchToProps = dispatch => ({
    getBoard: (level) => dispatch(getBoard(level)),
    resetBoard: () => dispatch(resetBoard())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);