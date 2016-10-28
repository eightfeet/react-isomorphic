import { posts, test} from './routes/PostList/reducer';
import { combineReducers } from 'redux';

// import locationReducer from './location'
// createStore 时会对整个项目的reduce初始化，这里初始化了posts reducer，对其他的reducer异步按需请求
// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer(asyncReducers) {
  return combineReducers({
    // location: locationReducer,
    test,
    posts,
    ...asyncReducers,
  });
}
