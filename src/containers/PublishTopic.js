import React from 'react';
import {
	connect
} from 'react-redux';
import {
	NavBar
} from 'antd-mobile';
import Publish from '../components/PublishTopic/PublishTopic';
import HashMap from '../utils/HashMapUtils';

class PublishTopic extends React.Component {
	constructor(...arg) {
		super(...arg);
		this.publish = this.publish.bind(this);
	}
	publish(accesstoken, select, title, content) {
		let {
			dispatch,
			actions
		} = this.props;
		dispatch(actions.request_PublishTopic(accesstoken, select, title, content))
	}
	render() {
		let {
			Login,
			PublishTopic,
			gotoLogin
		} = this.props;
		let publish = this.publish;
		return (
			<div className='publishTopic'>
				<NavBar>
					发布
	    		</NavBar>
				{Login.success?<Publish {...({Login,PublishTopic,publish})}/>:<div style={{padding:'60px',textAlign:'center'}}>请先<span style={{color:'#108ee9'}} onClick={()=>{gotoLogin('myinfo')}}>登录</span>之后再进行操作</div>}
			</div>
		)
	}
}

function PublishTopicSelect(state) {
	let {
		Login,
		PublishTopic
	} = state
	return {
		Login,
		PublishTopic
	}
}
export default connect(PublishTopicSelect)(PublishTopic)