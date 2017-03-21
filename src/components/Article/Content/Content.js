import React from 'react';
import {
	List
} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

require('./Content.less')
class Content extends React.Component {
	render() {
		let {
			state
		} = this.props

		return (
			<div>
				<h2>{state.title}</h2>
				<div className='markdown-body' dangerouslySetInnerHTML={{__html:state.content}}></div>
			</div>
		)
	}
}
export default Content;