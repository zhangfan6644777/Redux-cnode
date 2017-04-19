import {
	Toast
} from 'antd-mobile';
const TopicReducers = (state = {
	isFecthing: false,
	data: {},
	upComment: []
}, action) => {
	let newState;
	switch (action.type) {
		case 'REQUEST_ARTICLE':
			//alert('开始请求')
			state.data = {};
			state.isFecthing = true;
			state.hasComment = false;
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_ARTICLE':
			//alert('请求结束')
			state.isFecthing = false;
			state.data = action.data;
			state.articleId = action.id;
			newState = Object.assign({}, state)
			return newState
		case 'UP_COMMENT':
			state.upComment[action.key] = action.action;
			newState = Object.assign({}, state)
			return newState
		case 'COMMENT_ARTICLE':
			state.hasComment = action.success;
			newState = Object.assign({}, state);
			Toast.success('回复成功!!!', 1);
			return newState
		default:
			return state
	}
}
export default TopicReducers;