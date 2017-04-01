const selectedTab = (state, action) => {
	switch (action.type) {
		case 'SELECT_TAB':
			return action.tab
		default:
			return state
	}
}



const tabDataItem = (state = {
	isFetching: false,
	page: 0,
	scrollT: 0,
	topics: []
}, action) => {
	let newState
	switch (action.type) {
		case 'REQUEST_TOPICS':
			//console.log(state)
			state.isFetching = true;
			//console.log("请求开始")
			newState = Object.assign({}, state)
			return newState

		case 'RECEIVE_TOPICS':
			state.isFetching = false;
			state.page = action.page;
			//console.log("请求结束")
			state.topics = action.topics;
			state.limit = action.limit;
			newState = Object.assign({}, state)
			return newState
		default:
			return state
	}
}


const tabData = (state = {}, action) => {

	switch (action.type) {
		case 'RECEIVE_TOPICS':
		case 'REQUEST_TOPICS':
		case 'RECORD_SCROLLT':
			let newState;
			state = tabDataItem(state[action.tab], action)
			newState = Object.assign({}, state)
			return newState;

		default:
			return state
	}
}



const Topic = (state = {
	selectedTab: 'all',
	tabData: {

	}
}, action) => {
	let newState;
	if (state) {
		const sTab = selectedTab(state.selectedTab, action);
		const tData = tabData(state.tabData, action);
		//console.log(sTab)
		// 返回的一定要是一个新的对象，如果只是改变原来的state,返回的还是原来的state对象,就无法被store.subscribe监听到，从而不会对组件状态进行更新
		state.selectedTab = sTab;
		state.tabData = tData
		newState = Object.assign({}, state)
		return newState
	}
	return state
}
export default Topic