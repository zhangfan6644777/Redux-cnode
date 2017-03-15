import React from 'react';
import {
	connect
} from 'react-redux';
import {
	ActivityIndicator
} from 'antd-mobile';
import actions from '../actions/actions';
import Content from '../components/Article/Content/Content';
import Comment from '../components/Article/Comment/Comment';
import {
	NavBar,
	Icon
} from 'antd-mobile';
class Article extends React.Component {
	componentDidMount() {
		const {
			dispatch,
			params
		} = this.props;
		dispatch(actions.request_article(params.id))
	}
	render() {
		let {
			state
		} = this.props;
		console.log(this.props)
		return (
			<div>
				<NavBar  onLeftClick={() => history.go(-1)}>
					详情
    			</NavBar>
    			{state.data.id?<div><Content state={state.data}/><Comment state={state.data}/></div>:<ActivityIndicator size="large" />}
			</div>
		)
	}
}

function ArticleSelect(state) {
	return {
		state: state.Article
	}
}
export default connect(ArticleSelect)(Article)