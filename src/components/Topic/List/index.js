import React from 'react';
import ReactDOM from 'react-dom';
import {
  List,
  RefreshControl
} from 'antd-mobile';
import {
  Link
} from 'react-router';
const Item = List.Item;
const Brief = Item.Brief;

import Loadmore from '../Loadmore/loadmore';
require('./index.less');
class list extends React.Component {
  componentWillUnmount() {

  }
  componentDidMount() {

  }
  onrefresh() {
    alert(1)
  }
  render() {
    let {
      state
    } = this.props
    let _this = this;
    //   //let disableAllAnimations = topics.length === 20 ? false : true
    //   // disableAllAnimations从启用到禁用时enterAnimation设定的动画会不起作用，原因不明。
    // let enterAnimation = {
    //   from: {
    //     transform: 'translateY(-800px)',
    //     opacity: 0
    //   },
    //   to: {
    //     transform: 'translateY(0)',
    //     opacity: 1
    //   }
    // }<FlipMove enterAnimation={enterAnimation} easing='ease-out' duration='4000' staggerDelayBy='40' staggerDurationBy='4'>
    //    </FlipMove>
    // console.log('qqqqqqqqqqqqqq')extra={index.create_at.substring(0,10)}
    return (
      <div ref='mylistdiv' onScroll={()=>this.props.scroll(ReactDOM.findDOMNode(this.refs.mylistdiv),ReactDOM.findDOMNode(this.refs.mylist))} style={{height:document.documentElement.clientHeight-276,overflow:'auto'}}>
        <List ref='mylist'  className="my-list" >
              {state.map(function(index){
                return(
                  <Link key={index.id} to={`/arcitle/${index.id}`} style={{display:'block'}} >
                    <Item align="bottom" thumb={index.author.avatar_url} multipleLine>
                      {index.top?<span style={{color:'red',marginRight:'15px',fontWeight:'bold'}}>顶</span>:''}{index.good?<span style={{color:'blue',marginRight:'15px',fontWeight:'bold'}}>精</span>:''}{index.title}<Brief>{index.reply_count}/{index.visit_count} 分享<span style={{float:'right'}}>{index.create_at.substring(0,10)}</span></Brief>
                    </Item>
                  </Link>
                )
              })}
              <Loadmore/>
        </List>  
      </div>
    )
  }
}
export default list;