import React from 'react';
import {
	connect
} from 'react-redux';
import Header from '../components/Homepage/Header/index';
import List from '../components/Homepage/List/index';
import {
	Tabs,
	WhiteSpace
} from 'antd-mobile';
const TabPane = Tabs.TabPane;
let myAction, mYdispatch; //保存action和dispatch

//let presentState;
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
	componentWillMount() {

	}
	componentDidMount() {
		//console.log(this.props)
		//console.log("haha")
		let {
			actions,
			dispatch,
			state
		} = this.props
		let {
			selectedTab
		} = state
		//console.log(selectedTab)
		dispatch(actions.request_topic(selectedTab))
	}
	componentWillReceiveProps(newProps) {
		let {
			actions,
			dispatch
		} = newProps;
		//console.log('我是newProps')
		//console.log(newProps)
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
		mYdispatch(myAction.recordScrollT(tab[key - 1].tab, 0))
			//改变数据中的tabData 让他为空导致topics.length==0
			//然后在去调用componentWillReceiveProps
			//中的dispatch  此时正好fetching==false 
	}
	render() {
		let {
			state,
			actions,
			dispatch
		} = this.props;
		myAction = actions;
		mYdispatch = dispatch;
		//presentState = state;
		//console.log(presentState)
		//console.log(this.props)

		//console.log('wwwww')
		return (
			<div style={{height:document.documentElement.clientHeight-99}}>
				<Header/>
      			<div>
				    <Tabs defaultActiveKey="1" onChange={this.callback}>
						{tab.map(function(index){
							return (
								<TabPane tab={index.name} key={index.key}>
				       				{index.tab==state.selectedTab&&state.tabData.topics?<List state={state.tabData.topics} />:<div></div>}		
				      			</TabPane>
							)
						})}
				    </Tabs>
    				<WhiteSpace />
  				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	//console.log(state)
	//console.log("tian")
	return {
		state: state.Topic
	}
}
export default connect(mapStateToProps)(HomePage)