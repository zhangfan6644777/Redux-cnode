const LoginReducers = (state = {
	success: false
}, action) => {
	let newState
	switch (action.type) {
		case 'SUCCESS_LOGIN':
			console.log('登录成功');
			state = {};
			state.success = true;
			state.loginname = action.loginname;
			state.id = action.id;
			state.accesstoken = action.accesstoken;
			newState = Object.assign({}, state)
			return newState
		case 'FAIL_LOGIN':
			console.log('登录失败');
			state = {};
			state.success = false;
			state.failmessage = action.error_msg;
			newState = Object.assign({}, state)
			return newState
		case 'LOGOUT':
			state = {};
			state.success = false;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}
export default LoginReducers;