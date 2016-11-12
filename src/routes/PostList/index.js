import { provideHooks } from 'redial';
import React, { PropTypes } from 'react';
import { loadPosts, loadTest } from './actions';
import { connect, dispatch } from 'react-redux';
import PostListItem from './components/PostListItem';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PostList.css';

// 这里方法配合路由要做一些生命周期做数据调用的方法
// const redial = {
//   fetch: ({ dispatch }) => dispatch(loadPosts()),
//   defer: ({ dispatch }) => dispatch(loadTest()),
// };

const redial = {
  fetch: ({ dispatch }) => Promise.all([
    dispatch(loadPosts()),
    dispatch(loadTest())
  ])
};

const mapDispatchtoProps = {
  loadTest
};

// (1) mapStateToProps是一个函数，返回值表示的是需要merge进props的state
const mapStateToProps = (state) => ({
  posts: state.posts.data,
  test: state.test.data
});

const PostListPage = ({ posts, test }) =>
  <div className={s.root}>
    {posts.map((post, i) => <PostListItem key={post.id} post={post} />)}
    <h3>{test.title}</h3>
    <p>{test.slug}</p>
    <p>{test.content}</p>
  </div>;

PostListPage.PropTypes = {
  posts: PropTypes.array.isRequired
};

// connect就是将store中的必要数据作为props传递给React组件来render，
// 并包装action creator用于在响应用户操作时dispatch一个action。
/*
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
参数说明
(1)见上文,
(2)mapDispatchToProps是可以是一个函数，返回值表示的是需要merge仅props的actionCreators，
这里通过redial来处理了
*/

export default provideHooks(redial)(connect(mapStateToProps, mapDispatchtoProps)(withStyles(s)(PostListPage)));
