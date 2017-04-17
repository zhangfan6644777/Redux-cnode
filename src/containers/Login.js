import React from 'react';
import {
	connect
} from 'react-redux';
import {
	NavBar,
	InputItem,
	Button,
	List,
	Icon,
	Modal
} from 'antd-mobile';
const alert = Modal.alert;
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
		} = newProps;
		if (window.localStorage.getItem('masterInfo')) {
			return
		} else {
			let accesstoken = state.Login.accesstoken
			let loginname = state.Login.loginname
			let userInfo = JSON.stringify({
				accesstoken,
				loginname
			})
			if (userInfo === '{}') return
			window.localStorage.setItem('masterInfo', userInfo);
			dispatch(actions.request_UserInfo(loginname));
			dispatch(actions.request_Message(accesstoken));
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
		window.localStorage.removeItem('masterInfo');
		dispatch(actions.loginOut());
	}
	render() {
		let _this = this;
		let {
			actions,
			dispatch,
			state,
			gotoLogin
		} = this.props
		return (
			<div className='myLogin'>
				<NavBar rightContent={
        			<Icon onClick={() => alert('退出', '确定退出么???', [
				      { text: '取消', onPress: () => console.log('cancel') },
				      { text: '确定', onPress: () => this.logout(), style: { fontWeight: 'bold' } },
				    ])} size='md' type={require('../images/logout.svg')} style={{ marginRight: '0.1rem',display:state.Login.success?'block':'none' }} />}>
					个人中心
    			</NavBar>
    			{state.Login.success?<UserInfo gotoLogin={gotoLogin} userinfo={state.UserInfo.userInfo} collect={state.UserInfo.collect}  />:<UserLogin login={this.login.bind(this)} state={state}/>}
			</div>
		)
	}
}

function LoginSelect(state) {
	return {
		state: state
	}
}
export default connect(LoginSelect)(Login)