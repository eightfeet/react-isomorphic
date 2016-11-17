import React, {PropTypes, Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Link from 'react-router/lib/Link';
import MenuData from './MenuData';

class HeardBar extends Component {
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
              <ul className={`clearfix ${css(styles.dockbar)} nls`}>
                {
                  MenuData.map((item, i) => {
                    return (
                      <li className="fl w2-5 al-c" key={item.id} style={
                          item.select
                          ? {color: '#15ce4f', fontSize: '2rem', lineHeight: '0rem'}
                          : {color: '#8699a0', fontSize: '2rem', lineHeight: '0rem'}}
                        >
                        <div className={`${item.icon} pdt-5 pdb-2`}></div>
                        <span className="fz-s">{item.name}</span>
                      </li>
                    );
                  })
                }
              </ul>
              <div className={
                  `${this.state.isSubMenu
                    ? 'fr submenu show'
                    : 'fr submenu hide'}`}
                    onClick={
                      this.handlerCloseMenu
                    }
                    >
                  <ul className={`clearfix  ${'subicon'} nls`}>
                      {MenuData.map((item, i) => {
                        if (item.id === 10) {
                          return (
                            <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem} key={item.id}>
                              <div className={'bdright bdbottom'}>
                                <p style={{ height: '1.1rem', lineHeight: '0', paddingTop: '1rem', textAlign: 'center', paddingBottom: '1.2rem' }}>
                                  <img src={'/iconlogo.png'} style={{ width: '3.375rem' }} alt=""/>
                                </p>
                                <Link to={item.url} className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                                    {item.name}
                                </Link>
                              </div>
                            </li>
                          );
                        }
                        return (
                        <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem} key={item.id}>
                          <div className={`bdright bdbottom ${item.icon}`}>
                            <Link to={item.url} className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                                {item.name}
                            </Link>
                          </div>
                        </li>
                        );
                      })}
                  </ul>
                </div>
          </div>
    );
  }
}

const styles = StyleSheet.create({
  dockbar: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '4.250rem',
    backgroundColor: '#ffffff',
    width: '100%',
    borderTop: '1px solid #dfdfdf',
    color: '#15ce4f',
    zIndex: '10'
  }
});

export default HeardBar;
