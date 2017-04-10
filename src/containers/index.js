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
        <Login actions={actions} />
      )
    }

  }
  render() {
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
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'index'}
          badge={1}
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
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="发布"
          key="发布"
          badge={'new'}
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
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="消息"
          key="消息"
          dot
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
          icon={require('../images/index.svg')}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
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
export default Index;