import {
	Toast
} from 'antd-mobile';
const PublishTopicReducers = (state = {
	isFetching: false
}, action) => {
	let newState;
	switch (action.type) {
		case 'REQUEST_PUBLISHTOPIC':
			//console.log('kaishi')
			state.isFetching = true;
			newState = Object.assign({}, state);
			Toast.loading('发布中...', 1, () => {
				//console.log('加载完成!!!');
			});
			return newState
		case 'RECEIVE_PUBLISHTOPIC':
			state.isFetching = false;
			state.topic_id = action.topic_id;
			state.success = action.success;
			newState = Object.assign({}, state);
			Toast.success('发布成功!!!', 1);
			return newState
		case 'FAIL_PUBLISHTOPIC':
			state.isFetching = false;
			state.success = action.success;
			state.error_msg = action.error_msg;
			newState = Object.assign({}, state)
			Toast.fail('发布失败!!!', 1);
			return newState
		default:
			return state
	}
}
export default PublishTopicReducers;