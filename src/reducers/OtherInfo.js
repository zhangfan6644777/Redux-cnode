const OtherInfoReducers = (state = {
	isFetching: false,
}, action) => {
	let newState;
	switch (action.type) {
		case 'REQUEST_OTHERINFO':
			state.otherInfo = {}
			state.isFetching = true;
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_OTHERINFO':
			console.log('成功')
			state.isFetching = false;
			state.otherInfo = action.otherinfo
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_OTHERCOLLECTION':
			state.collect = action.collect;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}
export default OtherInfoReducers;