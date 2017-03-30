const MessageReducers = (state = {
	has_read_messages: [],
	hasnot_read_messages: []
}, action) => {
	let newState;
	switch (action.type) {
		case 'RECEIVE_MESSAGE':
			state.has_read_messages = action.has_read_messages;
			state.hasnot_read_messages = action.hasnot_read_messages;
			newState = Object.assign({}, state);
			return newState
		default:
			return state
	}
}
export default MessageReducers;