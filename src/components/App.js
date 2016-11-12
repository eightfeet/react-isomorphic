import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Helmet from 'react-helmet';
import Nav from './Nav';

const App = ({ children }) => {
  return (
    <div className={css(styles.containers)}>
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
        <div className={css(styles.red)}>heardbar</div>
        <div>
          {children}
        </div>
        <div>dock</div>
    </div>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
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
