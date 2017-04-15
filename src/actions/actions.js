let actions = {
	//Topic
	selectTab: tab => ({
		type: 'SELECT_TAB',
		tab
	}),
	request_topic: (tab, page = 1, limit = 10) => (dispatch, getState) => {
		let url = `https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`;
		//if (getState().isFetching) return
		//dispatch(actions.selectTab(tab))
		dispatch(actions.requestTopic(tab))
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
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
	request_upComment: (accessToken, replyId, key, replydata, id) => (dispatch, getState) => {
		fetch(`https://cnodejs.org/api/v1/reply/${replyId}/ups`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `accesstoken=${accessToken}`
			})
			.then(res => res.json())
			.then(data => {
				//dispatch(actions())
				dispatch({
					type: 'UP_COMMENT',
					action: data.action,
					key: key,
					reply: replydata,
					replyId: replyId
				})
			})
	},
	request_collectArticle: (accessToken, articleId) => (dispatch, getState) => {
		console.log('接口现在有问题')
		return
		const postConent = replyId ? `accesstoken=${accessToken}&content=${content}&replyId=${replyId}`:`accesstoken=${accessToken}&content=${content}`
		https://cnodejs.org/api/v1/topic/${topicId}/replies
		fetch(`https://cnodejs.org/topic/collect`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `accesstoken=${accessToken}&topic_Id=${articleId}`
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				dispatch({
					type: 'COLLECT_ARTICLE',
					success: data.success
				})
			})
	},
	request_commentArticle: (accessToken, topicId, content, replyId) => (dispatch, getState) => {
		const reply = replyId ? `accesstoken=${accessToken}&content=${content}&replyId=${replyId}` : `accesstoken=${accessToken}&content=${content}`
		fetch(`https://cnodejs.org/api/v1/topic/${topicId}/replies`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: reply
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				dispatch({
					type: 'COMMENT_ARTICLE',
					success: data.success,
					replyId: data.reply_id
				})
			})
	},
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
	//UserInfo 个人信息和收藏的主题

	request_UserInfo: (loginname) => (dispatch, getState) => {
		if (getState().isFetching) return
		dispatch(actions.requestUserInfo(loginname));
		dispatch(actions.request_Collection(loginname));
		fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
			.then(res => res.json())
			.then(data => {
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
	}),
	request_Collection: (loginname) => (dispatch, getState) => {
		fetch(`https://cnodejs.org/api/v1/topic_collect/${loginname}`)
			.then(res => res.json())
			.then(data => {
				dispatch(actions.receiveCollection(loginname, data.data))
			})
	},
	receiveCollection: (loginname, collectlist) => ({
		type: 'RECEIVE_COLLECTION',
		loginname,
		collectlist
	}),
	//OtherInfo
	request_OtherInfo: (loginname) => (dispatch, getState) => {
		if (getState().isFetching) return
		dispatch(actions.requestOtherInfo(loginname));
		dispatch(actions.request_OtherCollection(loginname));
		fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
			.then(res => res.json())
			.then(data => {
				dispatch(actions.receiveOtherInfo(loginname, data.data))
			})
	},
	requestOtherInfo: (loginname) => ({
		type: 'REQUEST_OTHERINFO',
		loginname
	}),
	receiveOtherInfo: (loginname, otherinfo) => ({
		type: 'RECEIVE_OTHERINFO',
		loginname,
		otherinfo
	}),
	request_OtherCollection: (loginname) => (dispatch, getState) => {
		fetch(`https://cnodejs.org/api/v1/topic_collect/${loginname}`)
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: 'RECEIVE_OTHERCOLLECTION',
					loginname: loginname,
					collect: data.data
				})
			})
	},
	//Message
	request_Message: (access_token) => (dispatch, getState) => {
		fetch(`https://cnodejs.org/api/v1/messages?accesstoken=${access_token}`)
			.then(res => res.json())
			.then(data => {
				dispatch(actions.receiveMessage(data.data.has_read_messages, data.data.hasnot_read_messages))
			})
	},
	receiveMessage: (has_read_messages, hasnot_read_messages) => ({
		type: 'RECEIVE_MESSAGE',
		has_read_messages,
		hasnot_read_messages
	}),
	//PublishTopic
	request_PublishTopic: (accesstoken, select, title, content) => (dispatch, getState) => {
		if (getState().isFetching) return
		const body = `accesstoken=${accesstoken}&tab=${select}&content=${content}&title=${title}`
		dispatch(actions.requestPublishTopic())
		fetch(`https://cnodejs.org/api/v1/topics`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: body
			})
			.then(res => res.json())
			.then(data => {
				if (data.success) {
					dispatch(actions.receivePublishTopic(data.success, data.topic_id));
				} else {
					dispatch(actions.failPublishTopic(data.success, data.error_msg));
				}
			})
	},
	requestPublishTopic: () => ({
		type: 'REQUEST_PUBLISHTOPIC'
	}),
	receivePublishTopic: (success, topic_id) => ({
		type: 'RECEIVE_PUBLISHTOPIC',
		success,
		topic_id

	}),
	failPublishTopic: (success, error_msg) => ({
		type: 'FAIL_PUBLISHTOPIC',
		success,
		error_msg
	})
}
export default actions