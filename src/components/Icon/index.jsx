import React, {PropTypes, Component} from 'react';
import IconData from './IconData';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Icon.scss';

class IconList extends Component {
  constructor () {
    super();
    this.state = {
      iconList: IconData
    };
  }
  handlerSearch = (event) => {
    let s = event.target.value
    let data = []
    IconData.map((item, i) => {
        if(item.name.indexOf(s) !== -1){
            let temp = {};
            temp.name = item.name;
            data.push(temp);
        }
    })
    this.setState({
        iconList: data
    })
  }
  render () {
        return (
        <div>
            <div 
                className={s.clearfix}
                style={{
                    width: '90%',
                    paddingTop: '1rem',
                    margin: '0 auto'
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
            <div className={`${s.clearfix} ${s.mhl} ${s.ptl}`}>
                {this.state.iconList.map((item, i) => {
                    return (
                        <div className={`${s.glyph} ${s.fs1}`} key={i}>
                            <div className={`${s.clearfix} ${s.bshadow0} ${s.pbs}`}>
                                <span className={item.name}></span>
                                <span className={s.mls}> {item.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        )
    }
};

export default withStyles(s)(IconList);
