import React from 'react';
import {
	connect
} from 'react-redux';
import {
	NavBar,
	Icon
} from 'antd-mobile'
import MessageList from '../components/Message/MessageList'
class Message extends React.Component {
	constructor(...arg) {
		super(...arg);
		this.markMessage = this.markMessage.bind(this);
	}

	componentWillMount() {
		let {
			dispatch,
			actions,
			Login
		} = this.props;
		dispatch(actions.request_Message(Login.accesstoken));
	}
	markMessage(accesstoken, msgid) {
		let {
			dispatch,
			actions
		} = this.props;
		dispatch(actions.mark_Message(accesstoken, msgid))
	}
	render() {
		let {
			Login,
			Message,
			gotoLogin,
			dispatch,
			actions
		} = this.props
		let markMessage = this.markMessage;
		return (
			<div className='message'>
				<NavBar>
					消息
    			</NavBar>
    			{Login.success?<MessageList {...({dispatch,actions,Login,markMessage})}  state={Message}/>:<div style={{padding:'60px',textAlign:'center'}}>请先<span style={{color:'#108ee9'}} onClick={()=>{gotoLogin('myinfo')}}>登录</span>之后再进行操作</div>}
			</div>
		)
	}
}

function MessageSelect(state) {
	let {
		Login,
		Message
	} = state
	return {
		Login,
		Message
	}
}
export default connect(MessageSelect)(Message)