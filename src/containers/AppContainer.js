import { connect } from 'react-redux';
import App from '../presentational/App';
import { getBoard } from '../actions/board-actions';

const mapStateToProps = state => ({
  isWon: state.boardReducer.isWon
});

const mapDispatchToProps = dispatch => ({
  getBoard: level => dispatch(getBoard(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
