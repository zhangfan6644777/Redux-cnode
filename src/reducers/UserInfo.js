const UserInfoReducers = (state = {
	isFetching: false,
}, action) => {
	let newState;
	switch (action.type) {
		case 'REQUEST_USERINFO':
			//console.log('正在请求')
			state.userInfo = {};
			state.isFetching = true;
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_USERINFO':
			//console.log('请求成功')
			state.isFetching = false;
			state.userInfo = action.userinfo
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_COLLECTION':
			state.collect = action.collectlist;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}
export default UserInfoReducers;