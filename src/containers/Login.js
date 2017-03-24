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
			//dispatch(actions.request_userInfo())
	}
	login(access_token) {
		let {
			actions,
			dispatch,
		} = this.props
		dispatch(actions.request_AccessToken(access_token))
	}
	logout() {
		let {
			actions,
			dispatch,
		} = this.props
		console.log(this)
		dispatch(actions.loginOut())
	}
	render() {
		//console.log(this.props)
		let _this = this;
		let {
			actions,
			dispatch,
			state
		} = this.props

		let userInfo = (
			<div className='userInfo' style={{backgroundColor:'#108ee9',width:'100%',height:400,color:'#FFF'}}>
				<div>
					<div >22</div>
					<div>
						<p>1111</p>
						<p>
							<span>积分:</span>
							<span>注册于</span>
						</p>
					</div>
				</div>
			</div>
		);
		let login = (
			<List style={{margin:60,marginTop:350}}>
    				<List.Item>
						<InputItem ref='input' placeholder='Access Token' style={{border:'1px solid #CCC'}}/>
						<Button onClick={()=>{
							const access_token=this.refs.input.refs.input.value;
							dispatch(actions.request_AccessToken(access_token))
						}} type="primary" style={{marginTop:40}}>登录</Button>
					</List.Item>
				</List>
		)
		return (
			<div>
				<NavBar  onLeftClick={() => history.go(-1)} rightContent={
        			<Icon onClick={this.logout.bind(this)} size='md' type={require('../images/logout.svg')} style={{ marginRight: '0.1rem' }} />}>
					个人中心
    			</NavBar>
    			{this.props.state.success?<UserInfo state={state}  />:<UserLogin login={this.login.bind(this)} state={state}/>}
			</div>
		)
	}
}

function LoginSelect(state) {
	//console.log(state)
	return {
		state: state.Login
	}
}
export default connect(LoginSelect)(Login)