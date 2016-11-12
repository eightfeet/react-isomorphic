import { CHANGE_COUNTER_STEP, TICK_COUNTER, START_COUNTER, STOP_COUNTER } from '../../constants';
import update from 'react/lib/update';

export default function counterReducer (state = {
  step: 2,
  count: 0,
  iscount: false
}, action) {
  switch (action.type) {
  case CHANGE_COUNTER_STEP:
    return update(state, {
      step: { $set: action.step }
    });
  case TICK_COUNTER:
    return update(state, {
      count: { $set: state.count + state.step }
    });
  case START_COUNTER:
    return update(state, {
      iscount: { $set: true }
    });
  case STOP_COUNTER:
    return update(state, {
      iscount: { $set: false }
    });
  default:
    return state;
  }
}
