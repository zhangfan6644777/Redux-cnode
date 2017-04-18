import React from 'react';
import {
	connect
} from 'react-redux';
import actions from '../actions/actions';
let width = document.documentElement.clientWidth;
//在这里面主要是需要一个登陆的状态贯穿全局
class App extends React.Component {
	componentWillMount() {
		let {
			dispatch
		} = this.props;
		if (window.localStorage.getItem('masterInfo')) {
			//console.log(window.localStorage.getItem('masterInfo'))
			const userInfo = JSON.parse(window.localStorage.getItem('masterInfo'));
			//console.log('masterInfo')
			dispatch(actions.request_AccessToken(userInfo.accesstoken))
			dispatch(actions.request_UserInfo(userInfo.loginname));

		}
	}
	render() {
		let {
			state,
			dispatch
		} = this.props

		return (
			<div style={{width:'100%'}}>{this.props.children}</div>
		)
	}
}

function select(state) {
	return {
		state: state
	}
}
export default connect(select)(App)