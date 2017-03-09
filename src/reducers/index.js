const InitState = {
	isFetching: false,
	data: []
}

const reducers = (state = {
	isFetching: false,
	page: 0,
	scrollT: 0,
	topics: []
}, action) => {
	let newState
	switch (action.type) {
		case 'REQUEST_TOPICS':
			state.isFetching = true
			newState = Object.assign({}, state)
			return newState

		case 'RECEIVE_TOPICS':
			state.isFetching = false;
			state.page: action.page,
				state.topics: action.topics,
				state.limit: action.limit
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}

export default reducers