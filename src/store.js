import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { callAPIMiddleware } from './middleware/callAPIMiddleware';
import createReducer from './createReducer';

export function configureStore(initialState = {}) {
  // createStore(reducers, initstate)
  // 这里需要说明一下 createReducer()是外面定义的一个方法
  // 由于项目中由多个reducer，
  // 多个Reducer时，要用combineReducers()把多个reducers合并成一个再丢给createStore()
  let store = createStore(createReducer(), initialState, compose(
    applyMiddleware(
      thunk,
      callAPIMiddleware
    ),

     (process.env.NODE_ENV === 'development') &&
      typeof window === 'object' &&
       typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : f => f
  ));

  store.asyncReducers = {};

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./createReducer', () =>
        store.replaceReducer(require('./createReducer').default)
      );
    }
  }

  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
