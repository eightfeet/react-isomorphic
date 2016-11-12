import * as types from '../../constants';
import update from 'react/lib/update';
// store中维护了一个state
// reducer根据action更新state

let initialState = {
  data: [],
  lastFetched: null,
  isLoading: false,
  error: null,
  currentPost: null
};

export function posts (state = initialState, action) {
  switch (action.type) {
  case types.LOAD_POSTS_REQUEST:
    return update(state, {
      isLoading: { $set: true }
    });
  case types.LOAD_POSTS_SUCCESS:
    return update(state, {
      data: { $set: action.body },
      lastFetched: { $set: action.lastFetched },
      isLoading: { $set: false }
    });
  case types.LOAD_POSTS_FAILURE:
    return update(state, {
      error: { $set: action.error }
    });
  default:
    return state;
  }
}

export function test (state = initialState, action) {
  switch (action.type) {
  case types.LOAD_POST_REQUEST:
    return update(state, {
      isLoading: { $set: true }
    });
  case types.LOAD_POST_SUCCESS:
    return update(state, {
      data: { $set: action.body },
      lastFetched: { $set: action.lastFetched },
      isLoading: { $set: false }
    });
  case types.LOAD_POST_FAILURE:
    return update(state, {
      error: { $set: action.error }
    });
  default:
    return state;
  }
}
