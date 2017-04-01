const TopicReducers = (state = {
	isFecthing: false,
	data: {},
}, action) => {
	let newState;
	switch (action.type) {
		case 'REQUEST_ARTICLE':
			console.log('开始请求')
			state.isFecthing = true;
			state.data = {};
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_ARTICLE':
			console.log('请求结束')
			state.isFecthing = false;
			state.data = action.data;
			newState = Object.assign({}, state)
			return newState
		case 'UP_COMMENT':
			state.commentUps = action.data;
			state.commentUps.replyId = action.replyId;
			state.commentUps.reply = action.reply;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}
export default TopicReducers;