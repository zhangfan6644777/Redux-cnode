import React from 'react';
import {
  Tabs,
  WhiteSpace
} from 'antd-mobile';
require('./index.less');
let myAction, mYdispatch;
const TabPane = Tabs.TabPane;
class list extends React.Component {
  componentDidMount() {
    let {
      actions,
      dispatch
    } = this.props
      //console.log(actions)
      //console.log('我的天啊')
      //console.log(dispatch)
    dispatch(actions.request_index())
  }
  callback(key) {
    //console.log(key)
    switch (key) {
      case '1':
        console.log(key)
        mYdispatch(myAction.request_index())
        break;
      case '2':
        console.log(key)
        mYdispatch(myAction.request_good())
        break;
      case '3':
        console.log(key)
        mYdispatch(myAction.request_share())
        break;
      case '4':
        console.log(key)
        mYdispatch(myAction.request_ask())
        break;
      case '5':
        console.log(key)
        mYdispatch(myAction.request_job())
        break;
    }

  }
  render() {
    let {
      state,
      actions,
      dispatch
    } = this.props
    myAction = actions;
    mYdispatch = dispatch;
    console.log('我是最里层')
    return (
      <div>
    <Tabs defaultActiveKey="1" onChange={this.callback}>
      <TabPane tab="全部" key="1">
        {state.data.map(function(index){
          return(
            <div key={index.id} className='index-list'>
              <div>
                <img src={index.author.avatar_url}/>
                <p>{index.author.loginname}</p>
              </div>
              <div>
                <p>{index.title}</p>
                <p>{index.reply_count}/{index.visit_count}</p>
                <p>创建于{index.create_at.substring(0,10)}</p>
              </div>
            </div>
            )
        })}
      </TabPane>
      <TabPane tab="精华" key="2">
                {state.data.map(function(index){
          return(
            <div key={index.id} className='index-list'>
              <div>
                <img src={index.author.avatar_url}/>
                <p>{index.author.loginname}</p>
              </div>
              <div>
                <p>{index.title}</p>
                <p>{index.reply_count}/{index.visit_count}</p>
                <p>创建于{index.create_at.substring(0,10)}</p>
              </div>
            </div>
            )
        })}
      </TabPane>
      <TabPane tab="分享" key="3">
                {state.data.map(function(index){
          return(
            <div key={index.id} className='index-list'>
              <div>
                <img src={index.author.avatar_url}/>
                <p>{index.author.loginname}</p>
              </div>
              <div>
                <p>{index.title}</p>
                <p>{index.reply_count}/{index.visit_count}</p>
                <p>创建于{index.create_at.substring(0,10)}</p>
              </div>
            </div>
            )
        })}
      </TabPane>
            <TabPane tab="问答" key="4">
                      {state.data.map(function(index){
          return(
            <div key={index.id} className='index-list'>
              <div>
                <img src={index.author.avatar_url}/>
                <p>{index.author.loginname}</p>
              </div>
              <div>
                <p>{index.title}</p>
                <p>{index.reply_count}/{index.visit_count}</p>
                <p>创建于{index.create_at.substring(0,10)}</p>
              </div>
            </div>
            )
        })}
      </TabPane>
            <TabPane tab="招聘" key="5">
        {state.data.map(function(index){
          return(
            <div key={index.id} className='index-list'>
              <div>
                <img src={index.author.avatar_url}/>
                <p>{index.author.loginname}</p>
              </div>
              <div>
                <p>{index.title}</p>
                <p>{index.reply_count}/{index.visit_count}</p>
                <p>创建于{index.create_at.substring(0,10)}</p>
              </div>
            </div>
            )
        })}
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
    )

  }
}
export default list;