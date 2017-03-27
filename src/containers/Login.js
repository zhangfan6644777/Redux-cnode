import React from 'react';
import {
	connect
} from 'react-redux';
import {
	NavBar,
	InputItem,
	Button,
	List,
	Icon
} from 'antd-mobile';
let qqqqq = true;
import UserInfo from '../components/Login/UserInfo/UserInfo';
import UserLogin from '../components/Login/UserLogin/UserLogin';
class Login extends React.Component {
	constructor() {
		super();
		this.logout = this.logout.bind(this);
	}
	componentWillReceiveProps(newProps) {
		console.log('我是newProps')
		console.log(newProps)
		let {
			actions,
			dispatch,
			state
		} = newProps
		//console.log(actions)
		if (qqqqq) {
			dispatch(actions.request_UserInfo(newProps.state.Login.loginname));
			qqqqq = false;
		}

	}
	login(access_token) {
		let {
			actions,
			dispatch,
		} = this.props;
		dispatch(actions.request_AccessToken(access_token))
	}
	logout() {
		let {
			actions,
			dispatch,
		} = this.props
			//console.log(this)
		dispatch(actions.loginOut())
	}
	render() {
		let _this = this;
		let {
			actions,
			dispatch,
			state
		} = this.props
		console.log(state)
		console.log('123')
		return (
			<div>
				<NavBar rightContent={
        			<Icon onClick={this.logout.bind(this)} size='md' type={require('../images/logout.svg')} style={{ marginRight: '0.1rem' }} />}>
					个人中心
    			</NavBar>
    			{state.Login.success?<UserInfo state={state.UserInfo}  />:<UserLogin login={this.login.bind(this)} state={state}/>}
			</div>
		)
	}
}

function LoginSelect(state) {
	//console.log(state)
	return {
		state: state
	}
}
export default connect(LoginSelect)(Login)