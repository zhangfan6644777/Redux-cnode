let actions = {
	request_index: () => (dispatch, getState) => {
		let url = 'https://cnodejs.org/api/v1/topics';
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			dispatch(actions.requestIndex(data.data))
		}).catch(e => console.log(e))
	},
	request_good: () => (dispatch, getState) => {
		let url = 'https://cnodejs.org/api/v1/topics?tab=good'
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			dispatch(actions.requestIndex(data.data))
		}).catch(e => console.log(e))
	},
	request_share: () => (dispatch, getState) => {
		let url = 'https://cnodejs.org/api/v1/topics?tab=share'
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			dispatch(actions.requestIndex(data.data))
		}).catch(e => console.log(e))
	},
	request_ask: () => (dispatch, getState) => {
		let url = 'https://cnodejs.org/api/v1/topics/?tab=ask'
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			dispatch(actions.requestIndex(data.data))
		}).catch(e => console.log(e))
	},
	request_job: () => (dispatch, getState) => {
		let url = 'https://cnodejs.org/api/v1/topics?tab=job'
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			dispatch(actions.requestIndex(data.data))
		}).catch(e => console.log(e))
	},
	requestIndex: data => ({
		type: 'REQUEST_INDEX',
		playload: data
	}),
	requestGood: data => ({
		type: 'REQUEST_INDEX',
		playload: data
	}),
	requestShare: data => ({
		type: 'REQUEST_INDEX',
		playload: data
	}),
	requestAsk: data => ({
		type: 'REQUEST_INDEX',
		playload: data
	}),
	requestJob: data => ({
		type: 'REQUEST_INDEX',
		playload: data
	})
}
export default actions