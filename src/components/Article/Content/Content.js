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
			<div className='markdown-body' dangerouslySetInnerHTML={{__html:state.content}}></div>

		)
	}
}
export default Content;