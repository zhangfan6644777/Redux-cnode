const InitState = {
	isCeshi: false,
	data: []
}

const reducers = (state = {
	data: []
}, action) => {
	let newState
	switch (action.type) {
		case 'REQUEST_INDEX':
			//console.log('reducers')
			//console.log(state)
			state.data = action.playload
			newState = Object.assign({}, state)
			return newState

		case 'REQUEST_GOOD':
			//console.log('reducers')
			//console.log(state)
			state.data = action.playload
			newState = Object.assign({}, state)
			return newState

		case 'REQUEST_SHARE':
			//console.log('reducers')
			//console.log(state)
			state.data = action.playload
			newState = Object.assign({}, state)
			return newState

		case 'REQUEST_ASK':
			//console.log('reducers')
			//console.log(state)
			state.data = action.playload
			newState = Object.assign({}, state)
			return newState

		case 'REQUEST_JOB':
			//console.log('reducers')
			//console.log(state)
			state.data = action.playload
			newState = Object.assign({}, state)
			return newState

		default:
			return state
	}
}

export default reducers