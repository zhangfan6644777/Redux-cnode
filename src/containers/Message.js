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
	render() {
		console.log(this.props)
		let {
			Login,
			Message,
			gotoLogin,
			dispatch,
			actions
		} = this.props
		return (
			<div className='message'>
				<NavBar>
					消息
    			</NavBar>
    			{Login.success?<MessageList dispatch={dispatch} actions={actions} login={Login} state={Message}/>:<div style={{padding:'60px',textAlign:'center'}}>请先<span style={{color:'#108ee9'}} onClick={()=>{gotoLogin('myinfo')}}>登录</span>之后再进行操作</div>}
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