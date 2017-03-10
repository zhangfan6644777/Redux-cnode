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
  onrefresh() {
    console.log('chuichucic')
  }
  render() {
    let {
      state,
      actions,
      dispatch
    } = this.props
      //console.log(this.props)
      //let disableAllAnimations = topics.length === 20 ? false : true
      // disableAllAnimations从启用到禁用时enterAnimation设定的动画会不起作用，原因不明。
    let enterAnimation = {
      from: {
        transform: 'translateY(-158px)',
        opacity: 0
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1
      }
    }
    console.log(this.props)
    console.log(state)
    console.log('wo qu ni ma ')
    return (
      <div>
      <RefreshControl onRefresh={this.onrefresh}></RefreshControl>
        <List className="my-list" >
          <FlipMove enterAnimation={enterAnimation} easing='ease-out' duration='400' staggerDelayBy='40' staggerDurationBy='4'>
              {state.tabData.topics.map(function(index){
                return(
                  <Link key={index.id} to={`/topic/${index.id}`} style={{display:'block'}} >
                    <Item  extra={index.create_at.substring(0,10)} align="bottom" thumb={index.author.avatar_url} multipleLine>
                      {index.title}<Brief>{index.reply_count}/{index.visit_count} 分享</Brief>
                    </Item>
                  </Link>
                )
              })}
            </FlipMove>
          </List>  
      </div>
    )


  }
}



export default list;