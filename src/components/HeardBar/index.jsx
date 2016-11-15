import React, {PropTypes, Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Link from 'react-router/lib/Link';
import s from './HeardBar.css';
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
              <div className={`${css(styles.heardbar)} clearfix`}>
                <div className="fl w3">
                    <div className={`mgl1 mgt-7 ${css(styles.logo)}`}></div>
                </div>
                <ul className={`fr ${css(styles.search)} w7 nls clearfix`}>
                    <li className={'fr'} onClick={ this.handlerOpenMenu}>
                        <span className={`icon-more ${css(styles.bannerico)}`}></span>
                    </li>
                    <li className="fr">
                        <div ref="inputbox" onClick={this.handlerSearch} className={`pr ${css(styles.slidesearch)}`} style={{
                          width: '3.292rem'
                        }}>
                            <input ref="inputsearch" onBlur={this.handlerBlur} type="text" className={this.state.isSearch
                                ? `${css(styles.searchinput)} setgray`
                                : `${css(styles.searchinput)}`}/>
                            <span className={`icon-search ${css(styles.bannerico, styles.fixicon)}`}></span>
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
                        <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                          <div className={`bdright bdbottom ${'icon-home'}`}>
                            <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                                首页
                            </Link>
                          </div>
                        </li>
                      })}


                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-home'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              首页
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-bottle'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              产品馆
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-code'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              积分防伪
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-card'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              营养家会员
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-gift'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              礼品商城
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-location'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              身边好店
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-notebook'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              健康评测
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-factory'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              全景参观
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-star'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              活动推荐
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-talk'}`}>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              问营养师
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={'bdright bdbottom'}>
                          <p style={{ height: '1.1rem', lineHeight: '0', paddingTop: '1rem', textAlign: 'center', paddingBottom: '1.2rem' }}>
                            <img src={'/iconlogo.png'} style={{ width: '3.375rem' }} alt=""/>
                          </p>
                          <Link to="/about" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              问营养师
                          </Link>
                        </div>
                      </li>
                      <li className={`fl ${'iconitem'}`} onClick={this.handlerMenuItem}>
                        <div className={`bdright bdbottom ${'icon-talk'}`}>
                          <Link to="/icon" className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
                              问营养师
                          </Link>
                        </div>
                      </li>
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
    height: '3.292rem',
    lineHeight: '3.292rem',
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
    fontSize: '1.3rem',
    color: '#8699a0',
    width: '3.292rem',
    height: '3.292rem',
    display: 'block',
    fontWeight: 'bolder',
    textAlign: 'center',
    lineHeight: '3.292rem'
  },
  searchinput: {
    border: 'none',
    paddingLeft: '3.292rem'
  },
  logo: {
    width: '4.042rem',
    height: '1.958rem',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("/logo.png")',
    backgroundSize: '100% 100%'
  }
});

export default HeardBar;
