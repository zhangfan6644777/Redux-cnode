import React from 'react';

import Header from '../components/Homepage/Header/index';
import List from '../components/Homepage/List/index';
import {
	Tabs,
	WhiteSpace
} from 'antd-mobile';
const TabPane = Tabs.TabPane;
let myAction, mYdispatch; //保存action和dispatch
let allStats = true;
let goodStats = true;
let asktats = true;
let jobStats = true;
let shareStats = true;

let tab = [{
	name: '全部',
	tab: '',
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
class BottomNavigationExampleSimple extends React.Component {
	componentDidMount() {
		let {
			actions,
			dispatch
		} = this.props
			//console.log(actions)
		dispatch(actions.request_topic(''))
	}

	callback(key) {
		switch (key) {
			case '1':
				//if (allStats) {
				mYdispatch(myAction.request_topic(''));
				//allStats = false
				//}
				break;
			case '2':
				//if (goodStats) {
				console.log('不要请求啦');
				mYdispatch(myAction.request_topic('good'));
				//goodStats = false;
				//};
				break;
			case '3':
				//mYdispatch(myAction.request_share())
				//if (shareStats) {
				mYdispatch(myAction.request_topic('share'));
				//shareStats = false
				//}
				break;
			case '4':
				//mYdispatch(myAction.request_ask())
				//if (askStats) {
				mYdispatch(myAction.request_topic('ask'));
				//askStats = false
				//}
				break;
			case '5':
				//mYdispatch(myAction.request_job())
				//if (jobStats) {
				mYdispatch(myAction.request_topic('job'));
				//jobStats = false
				//}
				break;
		}

	}
	render() {
		let {
			state,
			actions,
			dispatch
		} = this.props;
		myAction = actions;
		mYdispatch = dispatch;

		return (
			<div style={{height:document.documentElement.clientHeight-99}}>
				<Header/>
      			<div>
				    <Tabs defaultActiveKey="1" onChange={this.callback}>
						{tab.map(function(index){
							return (
								<TabPane tab={index.name} key={index.key}>
				       				<List state={state}/>
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

export default BottomNavigationExampleSimple;