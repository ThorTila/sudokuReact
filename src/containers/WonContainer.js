import { connect } from 'react-redux';
import Won from '../presentational/Won';
import { getBoard, resetBoard } from '../actions/board-actions';

const mapDispatchToProps = dispatch => ({
  getBoard: () => dispatch(getBoard()),
  resetBoard: () => dispatch(resetBoard())
});

export default connect(null, mapDispatchToProps)(Won);
