import React from 'react';
import {
	createForm
} from 'rc-form';

import {
	Card,
	WhiteSpace,
	List,
	TextareaItem,
	Button,
	Icon
} from 'antd-mobile';
require('./Comment.less')
class Comment extends React.Component {
	replyTime() {
		//2017-03-21T06:34:58.590Z
		console.log(new Date().getFullYear())
	}
	render() {
		const {
			getFieldProps
		} = this.props.form;
		let _this = this;
		console.log(this.props)
		let {
			state
		} = this.props;

		return (
			<div>
				<h3>共{state.replies.length}条评论</h3>
				{state.replies.map(function(index,key){
					return(
						<div key={key}>
							<div>
							    <WhiteSpace size="lg" />
							    <Card full>
							      <Card.Header
							        title={index.author.loginname}
									thumb={index.author.avatar_url}
							        extra={<span>{key+1}楼</span>}
							      />
							      <Card.Body>
							      	<div dangerouslySetInnerHTML={{__html:index.content}}></div>
							       
							      </Card.Body>
							      <Card.Footer content={_this.replyTime()} extra={<div><Icon type={require('../../../images/agree.svg')}></Icon>&nbsp;&nbsp;<Icon type={require('../../../images/forward.svg')}></Icon></div>} />
							    </Card>
							</div>
						</div>
		)
	})
}
<List renderHeader={() => '添加回复'}>
		          <TextareaItem
		            {...getFieldProps('count', {})}
		            rows={5}
		            count={200}
		          />
        		</List> < Button className = "btn"
type = "primary" > 回复 < /Button> < /div >
)
}
}
const Commenter = createForm()(Comment);
export default Commenter;