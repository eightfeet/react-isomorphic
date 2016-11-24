import React, {PropTypes, Component} from 'react';
import styleData from './styleData';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

const colorList = styleData.color.data;
const fontList = styleData.fontSize.data;
const radiusList = styleData.borderRadius.data;
const floatList = styleData.float.data;

class IconList extends Component {
  constructor () {
    super();
    this.state = {
      colorList: colorList,
      fontList: fontList,
      radiusList: radiusList,
      floatList: floatList
    };
  }
  handlerSearch = (event) => {
    let s = event.target.value;
    let colordata = [];
    let fontdata = [];
    let radiusdata = [];
    let floatdata = [];
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
    this.setState({
        colorList: colordata,
        fontList: fontdata,
        radiusList: radiusdata,
        floatList: floatdata
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

        </div>
        )
    }
};

export default withStyles(s)(IconList);
