import React from 'react';
import {
	connect
} from 'react-redux';
import Header from '../components/Topic/Header/index';
import List from '../components/Topic/List/index';
//import List from '../components/Homepage/List/qwe';

import Loadmore from '../components/Topic/Loadmore/loadmore';
import {
	Tabs,
	WhiteSpace,
	ActivityIndicator
} from 'antd-mobile';
const TabPane = Tabs.TabPane;
let myAction, mYdispatch; //保存action和dispatch

let tab = [{
	name: '全部',
	tab: 'all',
	key: 1
}, {
	name: '精华',
	tab: 'good',
	key: 2
}, {
	name: '分享',
	tab: 'share',
	key: 3
}, {
	name: '问答',
	tab: 'ask',
	key: 4
}, {
	name: '招聘',
	tab: 'job',
	key: 5
}]
class HomePage extends React.Component {
	constructor(...arg) {
		super(...arg);
		this.loadmore = this.loadmore.bind(this);
	}
	componentWillMount() {

	}
	componentDidMount() {
		let {
			actions,
			dispatch,
			state
		} = this.props
		let {
			selectedTab
		} = state
		dispatch(actions.selectTab(selectedTab))
			//dispatch(actions.request_topic(selectedTab))
	}
	componentWillReceiveProps(newProps) {
		let {
			actions,
			dispatch
		} = newProps;
		//console.log('我是newProps')
		let {
			topics,
			isFetching
		} = newProps.state.tabData

		//console.log(newProps.state)

		//console.log(actions)
		if (!isFetching && topics.length === 0) {
			dispatch(actions.request_topic(newProps.state.selectedTab))
		}

	}
	callback(key) {
		mYdispatch(myAction.selectTab(tab[key - 1].tab))
			//改变数据中selectTab
			//mYdispatch(myAction.recordScrollT(tab[key - 1].tab, 0))
			//改变数据中的tabData 让他为空导致topics.length==0
			//然后在去调用componentWillReceiveProps
			//中的dispatch  此时正好fetching==false 
	}
	scroll(divdom, listdom) {
		if (divdom.scrollTop + divdom.offsetHeight > listdom.offsetHeight) {
			this.loadmore();
		}
	}
	loadmore() {
		let {
			dispatch,
			state,
			actions
		} = this.props;
		let num = state.tabData.limit;
		num = num + 10;
		if (!state.tabData.isFecthing) {
			dispatch(actions.request_topic(state.selectedTab, 1, num));
		}
	}
	render() {
		let {
			state,
			actions,
			dispatch,
			Login,
			UserInfo,
			gotoLogin
		} = this.props;
		myAction = actions;
		mYdispatch = dispatch;
		let _this = this;
		let defaultActiveKey;
		if (state.selectedTab == 'all') { //解决go(-1)的时候 渲染不出的问题
			//本来我是job进入的 article 然后返回的是第一个all 的tab 导致
			//index.tab(all)==state.selectedTab(job)不相等
			defaultActiveKey = '1';
		} else if (state.selectedTab == 'good') {
			defaultActiveKey = '2';
		} else if (state.selectedTab == 'share') {
			defaultActiveKey = '3';
		} else if (state.selectedTab == 'ask') {
			defaultActiveKey = '4';
		} else if (state.selectedTab == 'job') {
			defaultActiveKey = '5';
		}
		return (
			<div style={{height:document.documentElement.clientHeight-99}}>
				<Header UserInfo={UserInfo} gotoLogin={gotoLogin} login={Login}/>
      			<div>
				    <Tabs defaultActiveKey={defaultActiveKey} animated={false} onChange={this.callback}>
						{tab.map(function(index){
							return (
								<TabPane tab={index.name} key={index.key}>
									{(index.tab == state.selectedTab && state.tabData.topics.length != 0) ? <List scroll={_this.scroll.bind(_this)} state={state.tabData.topics} /> : <ActivityIndicator size="large" />}
				      			</TabPane>
							)
						})}
				    </Tabs>
  				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state: state.Topic,
		Login: state.Login,
		UserInfo: state.UserInfo
	}
}
export default connect(mapStateToProps)(HomePage)