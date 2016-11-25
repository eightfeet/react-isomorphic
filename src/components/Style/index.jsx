import React, {PropTypes, Component} from 'react';
import styleData from './styleData';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

const colorList = styleData.color.data;
const fontList = styleData.fontSize.data;
const radiusList = styleData.borderRadius.data;
const floatList = styleData.float.data;
const fontStyleList = styleData.fontStyle.data;
const layoutList = styleData.layout.data;
const hideList = styleData.hide.data;
const widthList = styleData.width.data;
const paddingList = styleData.padding.data;
const marginList = styleData.margin.data;
const listStyleList = styleData.listStyle.data;
const onShadowList = styleData.onShadow.data;

class IconList extends Component {
  constructor () {
    super();
    this.state = {
      colorList: colorList,
      fontList: fontList,
      fontStyleList: fontStyleList,
      radiusList: radiusList,
      floatList: floatList,
      layoutList: layoutList,
      hideList: hideList,
      widthList: widthList,
      paddingList: paddingList,
      marginList: marginList,
      listStyleList: listStyleList,
      onShadowList: onShadowList
    };
  }
  handlerSearch = (event) => {
    let s = event.target.value;
    let colordata = [];
    let fontdata = [];
    let fontstyledata = [];
    let radiusdata = [];
    let floatdata = [];
    let layoutdata = [];
    let hidedata = [];
    let widthdata = [];
    let paddingdata = [];
    let margindata = [];
    let listStyledata = [];
    let onShadowdata = [];
    colorList.map((item, i) => {
        if(item.name.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            colordata.push(temp);
        }
    });
    fontList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            fontdata.push(temp);
        }
    });
    radiusList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            radiusdata.push(temp);
        }
    });
    floatList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            floatdata.push(temp);
        }
    });
    fontStyleList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            fontstyledata.push(temp);
        }
    });
    layoutList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            layoutdata.push(temp);
        }
    });
    hideList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            hidedata.push(temp);
        }
    });
    widthList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            widthdata.push(temp);
        }
    });
    paddingList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            paddingdata.push(temp);
        }
    });
    marginList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            margindata.push(temp);
        }
    });
    listStyleList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            listStyledata.push(temp);
        }
    });
    onShadowList.map((item, i) => {
        if(item.name.indexOf(s) !== -1 || item.dis.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            temp.class = item.class;
            temp.type = item.type;
            temp.dis = item.dis;
            onShadowdata.push(temp);
        }
    });
    this.setState({
        colorList: colordata,
        fontList: fontdata,
        fontStyleList: fontstyledata,
        radiusList: radiusdata,
        floatList: floatdata,
        layoutList: layoutdata,
        hideList: hidedata,
        widthList: widthdata,
        paddingList: paddingdata,
        marginList: margindata,
        listStyleList: listStyledata,
        onShadowList: onShadowdata
    })
  }
  render () {
        return (
        <div style={{paddingBottom:'4rem'}}>
            <div 
                className={s.clearfix}
                style={{
                    width: '90%',
                    paddingTop: '1rem',
                    margin: '0 auto',
                    marginBottom: '0.5rem'
                }}
            >
                <div 
                    style={{
                        float: 'left',
                        textAlign: 'right',
                        color:'gray',
                        lineHeight:'2rem',
                        fontSize:'1.5rem',
                        }}
                >
                    <span className="icon-search-a" style={{paddingRight:'0.5rem'}}></span>
                </div>
                <div style={{width:'90%', float:'right'}}>
                    <input type="text" 
                    onKeyUp={this.handlerSearch} 
                    />
                </div>
            </div>
            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.colorList.length===0?'none':'block'}`}}>
             <h4 style={{paddingBottom:'0.5rem'}}>色彩</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.color.dis}</p>
                <h5>变量</h5>
                <div className={s.clearfix} >
                    {this.state.colorList.map((item, i) => {
                        if (item.type === 0) {
                            return(
                                <div className={`${s.coloritem} bg-${item.class.replace('.','')}`} key={i} style={{fontSize:'.8rem'}}>{item.name}</div>
                            )
                        }
                    })}
                </div>
                <h5>Css</h5>
                <div className={s.clearfix} >
                    {this.state.colorList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div className={`${s.coloritem} bg-${item.class.replace('.','')} ${item.name=='.black'?'gray-light':''}`} key={i} style={{fontSize:'.8rem'}}>{item.name}</div>
                            )
                        }
                    })}
                </div>
            </div>
            
            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.fontList.length===0?'none':'block'}`}}>
             <h4 style={{paddingBottom:'0.5rem'}}>字体大小</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.fontSize.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>变量</h5>
                <div className={s.clearfix} >
                    {this.state.fontList.map((item, i) => {
                        if (item.type === 0) {
                            return(
                                <div className={`${s.coloritem}`} key={i} style={{textAlign:'left',lineHeight:'1rem',height:'4rem'}}>
                                    <span className={`${item.class}`}>{`字体${item.dis}`}</span><br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.fontList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div className={`${s.coloritem}`} key={i} style={{textAlign:'left',lineHeight:'1rem',height:'4rem'}}>
                                    <span className={`${item.class}`}>{`字体${item.dis}`}</span><br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.fontStyleList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>字体样式</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.fontStyle.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.fontStyleList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div 
                                    className={`${s.radiusbox} ${item.class}`}  
                                    key={i} 
                                    style={{borderBottom:'1px solid #aaa',padding:'.2rem 0'}}>
                                    {`${item.dis}`}<br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.radiusList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>圆角大小</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.borderRadius.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>变量</h5>
                <div className={s.clearfix} >
                    {this.state.radiusList.map((item, i) => {
                        if (item.type === 0) {
                            return(
                                <div className={s.radiuitem} key={i}>
                                    <div style={{padding:'1rem'}}>
                                        <div className={`${s.radiusbox} ${item.class}`}>
                                            {`${item.dis}`}<br/>
                                            <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.radiusList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div className={s.radiuitem} key={i}>
                                    <div style={{padding:'1rem'}}>
                                        <div className={`${s.radiusbox} ${item.class}`}>
                                            {`${item.dis}`}<br/>
                                            <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.floatList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>浮动，清除浮动</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.float.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.floatList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div 
                                    className={`${s.radiusbox} ${item.class}`}  
                                    key={i} 
                                    style={{width:'40%',backgroundColor:`${item.class==='clearfix'?'white':'#ddd'}`}}>
                                    {`${item.dis}`}<br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.layoutList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>布局定位与居中</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.layout.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.layoutList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div 
                                    className={`${s.radiusbox}`}  
                                    key={i} 
                                    style={{borderBottom:'1px solid #eee'}}>
                                    {`${item.dis}`}<br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.hideList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>隐藏与超出隐藏</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.hide.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.hideList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div 
                                    className={`${s.radiusbox}`}  
                                    key={i} 
                                    style={{borderBottom:'1px solid #eee'}}>
                                    {`${item.dis}`}<br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.widthList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>隐藏与超出隐藏</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.width.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.widthList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div 
                                    className={`${s.radiusbox} ${item.class}`}  
                                    key={i} 
                                    style={{border:`${item.name==='...'?'none':'1px solid #eee'}`,marginBottom:'.5rem'}}>
                                    {`${item.dis}`}<br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.paddingList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>内边距（padding）</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.padding.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.paddingList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div 
                                    className={`${s.radiusbox} ${item.class}`}  
                                    key={i} 
                                    style={{border:`${item.name==='...'?'none':'1px solid #eee'}`,marginBottom:'.5rem'}}>
                                    {`${item.dis}`}<br/>
                                    <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.marginList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>边距（margin）</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.margin.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.marginList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div key={i}>
                                    <div 
                                        className={`${s.radiusbox} ${item.class} bg-white`}  
                                        style={{border:`${item.name==='...'?'none':'1px solid #eee'}`}}>
                                        {`${item.dis}`}<br/>
                                        <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.listStyleList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>列表样式（liststyle）</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.listStyle.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} >
                    {this.state.listStyleList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <ul key={i} className={item.class} style={{paddingLeft:'2rem', marginBottom:'1rem'}}>
                                    <li 
                                        className={`${s.radiusbox} bg-white`}  
                                        style={{border:`${item.name==='...'?'none':'1px solid #eee'}`}}>
                                        {`${item.dis}`}<br/>
                                        <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                    </li>
                                </ul>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={s.block}  
                style={{marginBottom:'1rem',display:`${this.state.onShadowList.length===0?'none':'block'}`}}>
                <h4 style={{paddingBottom:'0.5rem'}}>投影（.shadow,.shadow-top,.shadow-bottom）</h4>
                <p style={{fontSize:'.8rem',color:'gray',paddingBottom:'0.5rem'}}>{styleData.onShadow.dis}</p>
                <h5 style={{paddingBottom: '1rem'}}>Css</h5>
                <div className={s.clearfix} style={{padding:'1rem'}}>
                    {this.state.onShadowList.map((item, i) => {
                        if (item.type === 1) {
                            return(
                                <div key={i} style={{marginBottom:'1rem'}}>
                                    <div 
                                        className={`${s.radiusbox} ${item.class} bg-white`}  
                                        style={{border:`${item.name==='...'?'none':'1px solid #eee'}`,padding:'1rem'}}>
                                        {`${item.dis}`}<br/>
                                        <span style={{color:'gray',fontSize:'0.8rem'}}>{item.name}</span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

        </div>
        )
    }
};

export default withStyles(s)(IconList);
