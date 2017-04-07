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
	render() {
		let {
			Article,
			dispatch,
			actions,
			Login
		} = this.props
		console.log(this.props)
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
			        title={<Link to={`/userinfo/${Article.data.author.loginname}`}>作者: {Article.data.author.loginname}</Link>}
			        extra={<span>发布于{GetTime.getTime(new Date(),Article.data.create_at)}</span>}
			      />
			      <Card.Body>
			        <div style={{fontSize:'45px'}}>{Article.data.title}</div>
			      </Card.Body>
			      <Card.Footer content={Article.data.visit_count+'次浏览' }extra={<Button style={{width:'70%'}} onClick={()=>dispatch(actions.request_collectArticle(Login.accesstoken,Article.data.id))}  inline size="small" type='primary'>关注</Button>} />
			    </Card>
				<div className='markdown-body' dangerouslySetInnerHTML={{__html:Article.data.content}}></div>
			</div>
		)
	}
}
export default Content;