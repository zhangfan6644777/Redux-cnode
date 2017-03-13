const TopicReducers = (state = {
	currentTopicId: '',
	isFecthing: false,
	data: {}
}, action) => {
	let newState;
	switch (action.type) {
		case 'REQUEST_ARTICLE':
			console.log('开始请求')
			state.isFecthing = true;
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_ARTICLE':
			console.log('请求结束')
			state.isFecthing = false;
			state.data = action.data;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}
export default TopicReducers;