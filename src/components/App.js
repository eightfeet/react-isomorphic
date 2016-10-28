import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import Nav from './Nav';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './App.css';
import messageStyle from 'antd/lib/message/style/index.css';
import message from 'antd/lib/message';
const info = () => {
  message.info('yes, it\'s me!');
  console.log(messageStyle);
  console.log(s);
};
const App = ({ children }) => {
  return (
    <div className={s.root}>
        <Helmet
          title="汤臣倍健"
          titleTemplate="%s - 同构测试"
          defaultTitle="汤臣倍健"
          meta={[
              {"name": "description", "content": "Helmet application"},
              {"property": "og:type", "content": "article"}
          ]}
        />
      <h1 className={s.title} >
          同构测试
        </h1>
        <a onClick={info}>这里用了蚂蚁金服的UI库</a>
        <Nav/>
        {children}
      <footer className={s.footer}>
        页脚部分
        </footer>
    </div>
  );
};



export default withStyles(s, messageStyle)(App);
