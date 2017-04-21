import React from 'react';
import {
	List,
	Card,
	Button
} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import {
	Link
} from 'react-router';

import GetTime from '../../../utils/GetTime';

require('./Content.less')
class Content extends React.Component {
	constructor(...arg) {
		super(...arg);
		this.is_collect = false;
	}
	render() {
		let _this = this;
		let {
			Article,
			dispatch,
			actions,
			Login,
			UserInfo
		} = this.props;
		if (UserInfo.collect.length != 0 && !this.is_collect) {
			UserInfo.collect.map(function(item, key) {
				if (item.id === Article.articleId) {
					Article.data.is_collect = true;
				}
			})
		}
		let from;
		if (Article.data.tab == 'job') {
			from = '招聘'
		} else if (Article.data.tab == 'share') {
			from = '分享'
		} else if (Article.data.tab == 'ask') {
			from = '问答'
		}
		return (
			<div>
			    <Card full>
			      <Card.Header
			        title={<span>作者: <Link to={`/userinfo/${Article.data.author.loginname}`}>{Article.data.author.loginname}</Link></span>}
			        extra={<span>发布于{GetTime.getTime(new Date(),Article.data.create_at)}</span>}
			      />
			      <Card.Body>
			        <div style={{fontSize:'45px'}}>{Article.data.title}</div>
			      </Card.Body>
			      <Card.Footer content={Article.data.visit_count+'次浏览 共'+Article.data.replies.length+'条评论'}
			      extra={<Button style={{width:'70%'}} onClick={()=>{
					let accesstoken=Login.accesstoken;
					let articleId=Article.data.id;
					this.is_collect=!this.is_collect;
			      	dispatch(actions.request_collectArticle(accesstoken,articleId,Article.data.is_collect))
			      }}
			      inline size="small" type='primary'>{Article.data.is_collect?'取消关注':'关注'}</Button>} />
			    </Card>
				<div className='markdown-body' dangerouslySetInnerHTML={{__html:Article.data.content}}></div>
			</div>
		)
	}
}
export default Content;