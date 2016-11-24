import React, {PropTypes, Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Link from 'react-router/lib/Link';
import MenuData from './MenuData';
import logo from './logo.png';

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
    this.refs.inputbox.style.width = '14rem';
    this.refs.inputsearch.focus();
    this.refs.inputsearch.style.backgroundColor = '#e6e7e9';
  }
  handlerBlur = () => {
    this.refs.inputbox.style.width = '4.0rem';
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
              <div className={`${css(styles.heardbar)} clearfix`}>
                <div className="fl w3">
                    <div className={`mgl1 mgt1 ${css(styles.logo)}`}></div>
                </div>
                <ul className={`fr ${css(styles.search)} w7 nls clearfix`}>
                    <li className={'fr'} onClick={ this.handlerOpenMenu}>
                        <span className={`icon-more-b ${css(styles.bannerico)}`} ></span>
                    </li>
                    <li className="fr">
                        <div ref="inputbox" onClick={this.handlerSearch} className={`pr ${css(styles.slidesearch)}`} style={{
                          width: '4.0rem'
                        }}>
                            <input ref="inputsearch" onBlur={this.handlerBlur} type="text" className={this.state.isSearch
                                ? `${css(styles.searchinput)} setgray`
                                : `${css(styles.searchinput)}`}/>
                            <span className={`icon-search-a ${css(styles.bannerico, styles.fixicon)}`} style={{fontSize: '2rem'}}></span>
                        </div>
                    </li>
                  </ul>
              </div>
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
                        if (item.id === 9) {
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
  heardbar: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '4.0rem',
    lineHeight: '4.0rem',
    backgroundColor: '#ffffff',
    width: '100%',
    borderBottom: '1px solid #dfdfdf',
    zIndex: '10'
  },
  setgray: {
    backgroundColor: '#e6e7e9'
  },
  slidesearch: {
    paddingTop: '0.750rem',
    transition: 'width .5s'
  },
  fixicon: {
    position: 'absolute',
    left: '0',
    top: '0'
  },
  bannerico: {
    fontSize: '2.2rem',
    color: '#8699a0',
    width: '4.0rem',
    height: '4.0rem',
    display: 'block',
    textAlign: 'center',
    lineHeight: '4.0rem'
  },
  searchinput: {
    border: 'none',
    paddingLeft: '4.0rem',
    height: '2.5rem'
  },
  logo: {
    width: '4.042rem',
    height: '1.958rem',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${logo})`,
    backgroundSize: '100% 100%'
  }
});

export default HeardBar;
