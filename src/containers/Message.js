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
			Message
		} = this.props
		return (
			<div>
				<NavBar  onLeftClick={() => history.go(-1)}>
					消息
    			</NavBar>
				<MessageList state={Message}></MessageList>
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