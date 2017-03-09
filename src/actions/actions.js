let actions = {
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
	})
}
export default actions