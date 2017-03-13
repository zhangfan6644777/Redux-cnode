let actions = {
	selectTab: tab => ({
		type: 'SELECT_TAB',
		tab
	}),
	request_topic: (tab, page = 1, limit = 15) => (dispatch, getState) => {
		let url = `https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`;
		if (getState().isFetching) return
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
	request_article: (id) => (dispatch, getState) => {
		let url = `https://cnodejs.org/api/v1/topic/${id}`;
		if (getState().isFetching) return
		dispatch(actions.requestArticle())
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			dispatch(actions.receiveArticle(data.data, id))
		}).catch(e => console.log(e))
	},
	requestArticle: (id) => ({
		type: 'REQUEST_ARTICLE',
		id
	}),
	receiveArticle: (data, id) => ({
		type: 'RECEIVE_ARTICLE',
		data,
		id
	})
}
export default actions