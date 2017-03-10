let actions = {
	selectTab: tab => ({
		type: 'SELECT_TAB',
		tab
	}),
	request_topic: (tab, page = 1, limit = 15) => (dispatch, getState) => {
		let url = `https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`;
		if (getState().isFetching) return
		console.log(url)
		dispatch(actions.requestTopic(tab))
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			dispatch(actions.receiveTopic(tab, data.data, page, limit))
		}).catch(e => console.log(e))
	},
	requestTopic: (tab) => ({
		type: 'REQUEST_TOPICS',
		tab
	}),
	receiveTopic: (tab, topics, page, limit) => ({
		type: 'RECEIVE_TOPICS',
		tab,
		topics,
		page,
		limit
	}),
	recordScrollT: (tab, scrollT) => {
		return ({
			type: 'RECORD_SCROLLT',
			tab,
			scrollT
		})
	},
	request_article: (id, request = true) => (dispatch, getState) => {
		let url = `https://cnodejs.org/api/v1/topic/${id}`;
		//dispatch()
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(111)
		}).catch(e => console.log(e))
	},
	requestArticle: () => ({
		type: 'REQUEST_ARTICLE'
	}),
	receiveArticle: () => ({
		type: 'RECEIVE_ARTICLE'
	})
}
export default actions