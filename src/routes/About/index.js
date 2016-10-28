if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);
import { injectAsyncReducer } from '../../store';

export default function createRoutes(store) {
  return {
    path: 'about',
    getComponents(location, cb) {
      require.ensure([
        './components/About',
        './reducer'
      ], (require) => {
          let About = require('./components/About').default;
          let aboutReducer = require('./reducer').default
          injectAsyncReducer(store, 'counter', aboutReducer)
          cb(null, About);
        });
    },
  };
}
