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
import actions from '../actions/actions';
import UserInfo from '../components/Login/UserInfo/UserInfo';
class Login extends React.Component {
	componentWillReceiveProps(newProps) {
		let {
			actions,
			dispatch,
			state
		} = newProps;
	}
	componentDidMount() {
		let {
			dispatch
		} = this.props
		dispatch(actions.request_OtherInfo(this.props.params.loginname));
	}
	render() {
		let _this = this;
		let {
			actions,
			dispatch,
			state
		} = this.props
		return (
			<div className="otherInfo">
				<NavBar onLeftClick={() => history.go(-1)}>
					详情
    			</NavBar>
    			<UserInfo userinfo={state.otherInfo} collect={state.collect} />
			</div>
		)
	}
}

function LoginSelect(state) {
	console.log(state)
	return {
		state: state.OtherInfo
	}
}
export default connect(LoginSelect)(Login)