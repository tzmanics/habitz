import { connect } from 'react-redux';
import * as components from './components';
import { addGoal, toggleGoal } from './actions';

export const GoalList = connect(
  function mapStateToProps(state) {
    return { goals: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addGoal: text => dispatch(addGoal(text)),
      toggleGoal: id => dispatch(toggleGoal(id))
    };
  }
)(components.GoalList);

