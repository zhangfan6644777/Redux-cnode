import React from 'react';
import {
  List,
  RefreshControl
} from 'antd-mobile';
import FlipMove from 'react-flip-move';
import {
  Link
} from 'react-router';
const Item = List.Item;
const Brief = Item.Brief;


require('./index.less');
class list extends React.Component {
  componentWillUnmount() {

  }
  componentDidMount() {

  }
  onrefresh() {}
  render() {
    let {
      state,
      gotoLogin
    } = this.props
    console.log(this.props)
    console.log(this.props)
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
      // console.log('qqqqqqqqqqqqqq')
    console.log(gotoLogin)
    // console.log(JSON.stringify({
    //   method: gotoLogin
    // }))
    // console.log({
    //   method: gotoLogin
    // }.toString())
    // eval({
    //   method: gotoLogin
    // }.toString())
    return (
      <div>
      <div style={{height:'100px'}} onClick={()=>alert(1)}>1231231</div>
        <List  className="my-list" >
              {state.map(function(index){
                return(
        <Link key={index.id} to={{pathname:`/arcitle/${index.id}`,state:{method:gotoLogin}}} style={{display:'block'}} >
                    <Item  extra={index.create_at.substring(0,10)} align="bottom" thumb={index.author.avatar_url} multipleLine>
                      {index.title}<Brief>{index.reply_count}/{index.visit_count} 分享</Brief>
                    </Item>
                  </Link>
                )
              })}
        </List>  
      </div>
    )


  }
}



export default list;