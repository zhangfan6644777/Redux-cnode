import React from 'react';
import {
	List,
	Card,
	Button
} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

import GetTime from '../../../utils/GetTime';

require('./Content.less')
class Content extends React.Component {
	render() {
		let {
			Article
		} = this.props

		return (
			<div>
			    <Card full>
			      <Card.Header
			        title={'作者:'+Article.data.author.loginname+'来自'}
			        extra={<span>发布于{GetTime.getTime(new Date(),Article.data.create_at)}</span>}
			      />
			      <Card.Body>
			        <div style={{fontSize:'45px'}}>{Article.data.title}</div>
			      </Card.Body>
			      <Card.Footer content={Article.data.visit_count+'次浏览' }extra={<Button style={{width:'70%'}} inline size="small" type='primary'>关注</Button>} />
			    </Card>
				<div className='markdown-body' dangerouslySetInnerHTML={{__html:Article.data.content}}></div>
			</div>
		)
	}
}
export default Content;