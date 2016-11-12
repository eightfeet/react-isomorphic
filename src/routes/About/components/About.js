import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { StyleSheet, css } from 'aphrodite';
import { startCounter, setStep, stopCounter } from '../action';
import s from '../test.scss';

const redial = {
  defer: ({ dispatch }) => dispatch(startCounter())
};

class About extends Component {
  handlerTmpc (event) {
    let step = event.target.value ? event.target.value : 1;
    this.props.setStep(parseInt(step));
  }
  render () {
    const {count, step, setStep, startCounter, stopCounter, iscount} = this.props;
    return (
      <div className={css(styles.pd)}>
        <p className={s.atest}>redux 状态管理，计数器</p>
        <p>&nbsp;</p>
        <p className={css(styles.pb)}>{iscount ? '计数器运行中' : '暂停计数'}</p>
        <p className={css(styles.counter)}>计数器{count}</p>
        <p className={css(styles.pd)}>当前步值{step}</p>
        <div className="clearfix w7 center">
          <div className="fl w4 al-r fz lh">输入每秒步值：</div>
          <div className="fr w6"><input className={css(styles.input)} type="number" value={this.props.step} onChange={(event) => this.handlerTmpc(event)} /></div>
        </div>

      <br /><button className="pd1 fz bdr mgr1 bg-blue-0 white-0" onClick={() => setStep(1)}>设置步值为1</button>
        <button className="pd1 fz bdr mgr1 bg-red-0 white-0" onClick={() => setStep(200)}>设置步值为200</button><br /><br />
        <button className={`pd1 fz bdr mgr1 mgr1 ${iscount ? 'bg-gray-0' : 'bg-green-0'} white-0`}
          onClick = {
            iscount
            ? null
            : () => startCounter()
          }>开始计数</button>
        <button className="pd1 fz bdr mgr1 bg-gray-0 white-0" onClick={() => stopCounter()}>停止计数</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  step: state.counter.step,
  iscount: state.counter.iscount
});
const mapDispatchToProps = {
  setStep,
  startCounter,
  stopCounter
};

const styles = StyleSheet.create({
  btn: {
    color: '#333',
    fontSize: '1rem',
    width: '5rem',
    backgroundColor: '#eee',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '1.2s opacity ease',
    ':hover': {
      opacity: 0.3
    }
  },
  counter: {
    textAlign: 'center',
    color: '#000',
    fontSize: '2rem'
  },
  pd: {
    padding: '1rem',
    textAlign: 'center'
  },
  pb: {
    paddingBottom: '1rem'
  },
  input: {
    border: '1px solid #eee',
    padding: '1rem'
  }
});

// export default provideHooks(redial)(connect(mapStateToProps, mapDispatchToProps)(About))
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(About));
