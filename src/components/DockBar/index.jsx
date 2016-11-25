import React, {PropTypes, Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Link from 'react-router/lib/Link';
import MenuData from './MenuData';
import s from './DockBar.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class DockBar extends Component {
  constructor () {
    super();
    this.state = {
      isSearch: true,
      isSubMenu: false
    };
  }
  handlerSearch = (event) => {
    if (this.state.isSearch) {
      this.setState({isSearch: false});
    } else {
      this.setState({isSearch: true});
    }
    this.refs.inputbox.style.width = '15rem';
    this.refs.inputsearch.focus();
    this.refs.inputsearch.style.backgroundColor = '#e6e7e9';
  }
  handlerBlur = () => {
    this.refs.inputbox.style.width = '3.292rem';
    this.refs.inputsearch.style.backgroundColor = '#fff';
  }
  handlerOpenMenu = () => {
    if (!this.state.isSubMenu) {
      this.setState({isSubMenu: true});
    }
  }
  handlerCloseMenu = () => {
    if (this.state.isSubMenu) {
      this.setState({isSubMenu: false});
    }
  }
  handlerMenuItem = (e) => {
    e.stopPropagation();
  }
  render () {
    return (
          <div>
              <ul className={`clearfix ${s.dockbar} nls`}>
                {
                  MenuData.map((item, i) => {
                    return (
                      <li className="fl w2-5 al-c" key={item.id} style={
                          item.select
                          ? {color: '#15ce4f', fontSize: '2rem', lineHeight: '0rem'}
                          : {color: '#8699a0', fontSize: '2rem', lineHeight: '0rem'}}
                        >
                        <div className={`${item.icon} pdt-5 pdb-2`}></div>
                        <span className="font-small">{item.name}</span>
                      </li>
                    );
                  })
                }
              </ul>
          </div>
    );
  }
}

export default withStyles(s)(DockBar);
