import {
  TabBar,
  Icon
} from 'antd-mobile';
import React from 'react';
import {
  connect
} from 'react-redux';
import actions from '../actions/actions';
import Topic from './Topic';
import PublishTopic from './PublishTopic';
import Message from './Message';
import Login from './Login';

import HashMap from '../utils/HashMapUtils';

let messageIcon = require('../images/message.svg')
import messageIconFill from '../images/message-fill.svg';

console.log(messageIcon)
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: HashMap.containsKey('selectedTab') ? HashMap.get('selectedTab') : 'index',
      hidden: false,
    };
    this.gotoLogin = this.gotoLogin.bind(this);
  }

  gotoLogin(tab) {
    this.setState({
      selectedTab: tab
    })
  }
  renderContent(pageText) {
    let {
      state,
      dispatch
    } = this.props

    if (pageText == '首页') {
      return (
        <Topic  actions={actions} />
      );
    } else if (pageText == '发布') {
      return (
        <PublishTopic gotoLogin={(tab)=>this.gotoLogin(tab)} actions={actions} />
      )
    } else if (pageText == '消息') {
      return (
        <Message gotoLogin={(tab)=>this.gotoLogin(tab)} actions={actions} />
      )
    } else if (pageText == '我的') {
      return (
        <Login gotoLogin={(tab)=>this.gotoLogin(tab)} actions={actions} />
      )
    }

  }
  render() {
    let {
      state
    } = this.props
    console.log(state)
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      > 
        <TabBar.Item
          title="首页"
          key="首页"
          icon={
						<Icon type={require('../images/index.svg')}></Icon>  
          }
          selectedIcon={
						<Icon type={require('../images/index-fill.svg')}></Icon>  
          }
          selected={this.state.selectedTab === 'index'}
          onPress={() => {
            HashMap.put('selectedTab','index')
            this.setState({
              selectedTab: 'index',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('首页')}
        </TabBar.Item>
        <TabBar.Item
          icon={
						<Icon type={require('../images/write.svg')}></Icon>  
          }
          selectedIcon={
						<Icon type={require('../images/write-fill.svg')}></Icon>      	
          }
          title="发布"
          key="发布"
          selected={this.state.selectedTab === 'publish'}
          onPress={() => {
            HashMap.put('selectedTab','publish')
            this.setState({
              selectedTab: 'publish',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('发布')}
        </TabBar.Item>
        <TabBar.Item
          icon={
						<Icon type={require('../images/message.svg')}></Icon>   
          }
          selectedIcon={
						<Icon type={require('../images/message-fill.svg')}></Icon>  
          }
          title="消息"
          key="消息"
          badge={state.Message.hasnot_read_messages.length}
          selected={this.state.selectedTab === 'message'}
          onPress={() => {
            HashMap.put('selectedTab','message');
            this.setState({
              selectedTab: 'message',
            });
          }}
        >
          {this.renderContent('消息')}
        </TabBar.Item>
        
        <TabBar.Item
          icon={
						<Icon type={require('../images/user.svg')}></Icon>            	
          }
          selectedIcon={
						<Icon type={require('../images/user-fill.svg')}></Icon>            	
          }
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'myinfo'}
          onPress={() => {
            HashMap.put('selectedTab','myinfo');
            this.setState({
              selectedTab: 'myinfo',
            });
          }}
        >
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

function indexSelect(state) {
  return {
    state: state
  }
}

export default connect(indexSelect)(Index);