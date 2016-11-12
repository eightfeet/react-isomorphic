import { CHANGE_COUNTER_STEP, TICK_COUNTER, START_COUNTER, STOP_COUNTER } from '../../constants';

export function tick () {
  return { type: TICK_COUNTER };
}
export function startc () {
  return { type: START_COUNTER };
}
export function startCounter () {
  return (dispatch, getState) => {
    console.log(getState());
    window.int = setInterval(() => {
      dispatch(tick());
      dispatch(startc());
    }, 1000);
  };
}
export function stopc () {
  return { type: STOP_COUNTER };
}
export function stopCounter () {
  return (dispatch, getState) => {
    console.log(getState().posts);
    dispatch(stopc());
    window.int ? window.int = window.clearInterval(window.int) : '';
  };
}

export function setStep (step) {
  return (dispatch, getState) => {
    console.log(getState());
    dispatch(changeCounterStep(step));
  };
}

export function changeCounterStep (step) {
  return { type: CHANGE_COUNTER_STEP, step };
}
