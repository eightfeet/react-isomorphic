import React, {PropTypes, Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Link from 'react-router/lib/Link';
import MenuData from './MenuData';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import logo from './logo.png';
import s from './HeaderBar.css';

class HeardBar extends Component {
  constructor () {
    super();
    this.state = {
      isSearch: false,
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
              <div className={`${s.heardbar} clearfix`}>
                <div className="fl w3">
                    <div className={`mgl1 mgt1 ${s.logo}`}></div>
                </div>
                <ul className={`fr ${css(styles.search)} w7 nls clearfix`}>
                    <li className={'fr'} onClick={ this.handlerOpenMenu}>
                        <span className={`icon-more-b ${s.bannerico}`} ></span>
                    </li>
                    <li className="fr">
                        <div ref="inputbox" onClick={this.handlerSearch} className={`pr ${s.slidesearch}`} style={{
                          width: '4.0rem'
                        }}>
                            <input ref="inputsearch" onBlur={this.handlerBlur} type="text" className={this.state.isSearch
                                ? `${s.searchinput}`
                                : `${s.searchinput}`}/>
                            <span className={`icon-search-a ${s.bannerico} ${s.fixicon}`} style={{fontSize: '2rem'}}></span>
                        </div>
                    </li>
                  </ul>
              </div>
              <div className={
                    this.state.isSubMenu
                    ? `fr ${s.submenu} show`
                    : `fr ${s.submenu} hide`}
                    onClick={
                      this.handlerCloseMenu
                    }
                    >
                  <ul className={`clearfix  ${s.subicon} nls`}>
                      {MenuData.map((item, i) => {
                        if (item.id === 9) {
                          return (
                            <li className={`fl ${s.iconitem}`} onClick={this.handlerMenuItem} key={item.id}>
                              <div className={`${s.bdright} ${s.bdbottom}`}>
                                <p style={{ height: '1.1rem', lineHeight: '0', paddingTop: '1rem', textAlign: 'center', paddingBottom: '1.2rem' }}>
                                  <img src={logo} style={{ width: '3.375rem' }} alt=""/>
                                </p>
                                <Link to={item.url}>
                                    {item.name}
                                </Link>
                              </div>
                            </li>
                          );
                        }
                        return (
                        <li className={`fl ${s.iconitem}`} onClick={this.handlerMenuItem} key={item.id}>
                          <div className={`${s.bdright} ${s.bdbottom} ${item.icon}`}>
                            <Link to={item.url} >
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
  
});

export default withStyles(s)(HeardBar);
