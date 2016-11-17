import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Helmet from 'react-helmet';
import Nav from './Nav';
import HeardBar from './HeardBar';
import DockBar from './DockBar';

const App = ({ children }) => {
  return (
    <div>
        <Helmet
          title="汤臣倍健"
          titleTemplate="%s - 同构测试"
          defaultTitle="汤臣倍健"
          meta={[
              /* eslint-disable quotes */
              {"name": "description", "content": "Helmet application"},
              {"property": "og:type", "content": "article"}
          ]}
        />
        <HeardBar />
        <div className={css(styles.containers)}>
          {children}
        </div>
        <DockBar />
    </div>
  );
};

const styles = StyleSheet.create({
  containers: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: '#f1f4f8',
    overflow: 'auto'
  }
});

export default App;
