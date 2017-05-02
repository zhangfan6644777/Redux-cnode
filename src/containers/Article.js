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
import HashMap from '../utils/HashMapUtils';

class Article extends React.Component {
	constructor(...arg) {
		super(...arg);
		this.like = this.like.bind(this);
		this.comment = this.comment.bind(this);
		this.gotoLogin = this.gotoLogin.bind(this);
		console.log(this)
	}
	componentDidMount() {
		const {
			dispatch,
			params
		} = this.props;
		dispatch(actions.request_article(params.id))
	}
	componentWillReceiveProps(newProps) {
		let {
			dispatch,
			Article
		} = newProps;
		if (Article.hasComment) {
			//回复消息的逻辑
			dispatch(actions.request_article(Article.articleId))
		}
	}
	like(accesstoken, commentid, key, indexup, topicid) {
		const {
			dispatch
		} = this.props;
		dispatch(actions.request_upComment(accesstoken, commentid, key, indexup, topicid))
	}
	comment(accesstoken, topicid, content, commentid) {
		const {
			dispatch
		} = this.props;
		dispatch(actions.request_commentArticle(accesstoken, topicid, content, commentid));
	}
	gotoLogin() {
		HashMap.put('gotoLogin', true);
		history.go(-1);
	}
	render() {
		let {
			Article,
			Login,
			UserInfo,
			dispatch
		} = this.props;
		let gotoLogin = this.gotoLogin;
		//method("myinfo"); //调用函数，传入参数
		return (
			<div>
				<div style={{position:'fixed',top:0,width:'100%',zIndex:99999}}>
					<NavBar  onLeftClick={() => history.go(-1)}>
						详情
		    		</NavBar>
				</div>

	    		{Article.data.id?<div style={{marginTop:'90px'}}><Content {...({dispatch,actions,Login,Article,UserInfo})} /><Comment like={this.like} comment={this.comment}  {...({dispatch,actions,Article,Login,gotoLogin})}/></div>: <ActivityIndicator size="large" />}
    		</div>
		)
	}
}

function ArticleSelect(state) {
	let {
		Article,
		Login,
		UserInfo
	} = state;
	return {
		Article,
		Login,
		UserInfo
	}
}
export default connect(ArticleSelect)(Article)