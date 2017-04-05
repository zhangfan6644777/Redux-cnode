require('./Comment.less');
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
import GetTime from '../../../utils/GetTime';
class Comment extends React.Component {
	constructor(arg) {
		super(arg);
		this.contains = this.contains.bind(this)
	}
	contains(arr, obj) {
		let i = arr.length;
		while (i--) {
			if (arr[i] === obj) {
				return true;
			}
		}
		return false;
	}
	componentWillReceiveProps(newProps) {
		console.log(newProps)
		console.log('zzzzzzzzzz')
	}
	render() {
		const {
			getFieldProps
		} = this.props.form;
		let _this = this;
		let {
			Article,
			Login,
			dispatch,
			actions
		} = this.props;

		return (
			<div>
						<h3>共{Article.data.replies.length}条评论</h3>
						{Article.data.replies.map(function(index,key){
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
									      <Card.Footer content={GetTime.getTime(new Date(),index.create_at)} extra={
									      	<div>
									      	<Icon onClick={()=>dispatch(actions.request_upComment(Login.accesstoken,index.id,key,index.ups))} type={_this.contains(index.ups,Login.id)?require('../../../images/agree-fill.svg'):require('../../../images/agree.svg')}></Icon>
									      	&nbsp;{Article.hasOwnProperty('commentUps')?Article.commentUps.reply.length+1:index.ups.length}&nbsp;
									      	<Icon type={require('../../../images/forward.svg')}></Icon>
									      	</div>} />
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
		        		</List> 
        				< Button onClick={()=>{
        					const content=getFieldProps('count').value
        					dispatch(actions.request_commentArticle(Login.accesstoken,Article.data.id,content))
        					}} className = "btn" type = "primary" > 回复 < /Button> 
        			</div>
		)
	}
}
const Commenter = createForm()(Comment);
export default Commenter;