const Topic = (state = {
	selectedTab: 'all',
	tabData: {
		isFetching: false,
		page: 0,
		scrollT: 0,
		topics: []
	}
}, action) => {
	let newState
	switch (action.type) {
		case 'SELECT_TAB':
			state.selectedTab = action.tab;
			state.tabData.topics = [];
			//console.log('select')
			newState = Object.assign({}, state)
			return newState
		case 'REQUEST_TOPICS':
			//console.log("请求开始")
			state.tabData.isFetching = true;
			newState = Object.assign({}, state)
			return newState
		case 'RECEIVE_TOPICS':
			state.tabData.isFetching = false;
			state.tabData.page = action.page;
			//console.log("请求结束")
			state.tabData.topics = action.topics;
			state.tabData.limit = action.limit;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}

export default Topic