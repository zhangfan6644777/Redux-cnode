let actions = {
	//Topic
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

	//Article
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
	}),
	//Access_Token
	request_AccessToken: (access_token) => (dispatch, getState) => {
		//7d97b9fb-4e23-40df-a90b-d6cc31b84fcd
		//if (getState().isFetching) return
		let url = 'https://cnodejs.org/api/v1/accesstoken'
		fetch(url, {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `accesstoken=${access_token}`
			})
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				console.log(data)
				if (data.success) {
					dispatch(actions.successLogin(access_token, data.loginname, data.id))
				} else {
					dispatch(actions.failLogin(data.error_msg))
				}
			})
	},
	successLogin: (accesstoken, loginname, id) => ({
		type: 'SUCCESS_LOGIN',
		accesstoken,
		loginname,
		id
	}),
	failLogin: (error_msg) => ({
		type: 'FAIL_LOGIN',
		error_msg
	}),
	loginOut: () => ({
		type: 'LOG_OUT'
	}),
	//UserInfo
	request_UserInfo: (loginname) => (dispatch, getState) => {
		if (getState().isFetching) return
		dispatch(actions.requestUserInfo());
		fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				dispatch(actions.receiveUserInfo(loginname, data.data))
			})
	},
	requestUserInfo: (loginname) => ({
		type: 'REQUEST_USERINFO',
		loginname
	}),
	receiveUserInfo: (loginname, userinfo) => ({
		type: 'RECEIVE_USERINFO',
		loginname,
		userinfo
	})
}
export default actions