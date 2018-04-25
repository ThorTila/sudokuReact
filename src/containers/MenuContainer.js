import { connect } from 'react-redux';
import Menu from '../presentational/Menu';
import {
  getBoard,
  resetBoard,
  solveBoard,
  checkBoard
} from '../actions/board-actions';
import { toggleMenu } from '../actions/menu-actions';

const mapStateToProps = state => ({
  showed: state.menuReducer.showed
});

const mapDispatchToProps = dispatch => ({
  getBoard: level => {
    dispatch(getBoard(level));
    dispatch(toggleMenu());
  },
  resetBoard: () => dispatch(resetBoard()),
  solveBoard: () => dispatch(solveBoard()),
  checkBoard: () => dispatch(checkBoard()),
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
