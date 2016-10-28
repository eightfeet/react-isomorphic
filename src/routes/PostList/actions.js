import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from '../../constants';
import http from '../../utils/HttpClient';
function loadPosts() {
  return {
    // Types of actions to emit before and after
    types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],

    // Check the cache (optional):
    // shouldCallAPI: (state) => state.posts.data.length === 0 && !state.posts.isLoading,

    // Perform the fetching:
    callAPI: () => http.get('/api/v0/posts'),

    // Arguments to inject in begin/end actions
    payload: {},
  };
}

function loadTest() {
  return {
    // Types of actions to emit before and after
    types: [LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE],

    // Check the cache (optional):
    // shouldCallAPI: (state) => shouldFetchPost(state),

    // Perform the fetching:
    callAPI: () => http.get(`/api/v0/post/tcbj`),

    // Arguments to inject in begin/end actions
    payload: {},
  };
}

export {
  loadPosts,
  loadTest,
}
