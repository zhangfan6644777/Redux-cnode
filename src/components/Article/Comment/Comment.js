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
import {
	Link
} from 'react-router';
import GetTime from '../../../utils/GetTime';
class Comment extends React.Component {
	constructor(arg) {
		super(arg);
		this.contains = this.contains.bind(this)
		this.upComment = [];
		this.state = {
			replyOther: false,
			replyId: ''
		}
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
		let {
			actions,
			dispatch,
			Article
		} = newProps;
		if (Article.hasComment) {
			dispatch(actions.request_article(Article.articleId))
		}
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
			actions,
			gotoLogin
		} = this.props;
		console.log(gotoLogin)
			//console.log(typeof(gotoLogin))
			//eval(gotoLogin)
			//console.log(JSON.parse(gotoLogin))
		if (Article.data.reply_count) { //判断数据是否存在 只是一个判断条件
			Article.data.replies.map(function(index, key) {
				if (_this.contains(index.ups, Login.id)) {
					index.is_uped = true;
				} else {
					index.is_uped = false
				}

				// if(_this.upComment[key]){
				// 	let upNum=index.ups.length;
				// }else if(_this.upComment&&Article.upComment[key]=='up'){
				// 	let upNum=(index.ups.length+1);
				// }else if(_this.upComment&&Article.upComment[key]=='down'){

				// }


				if (_this.upComment.length == Article.data.replies.length) {
					return
				}
				_this.upComment.push(index.is_uped);



			})
			return (
				<div className='Article-comment'>
				<div style={{padding:'60px',textAlign:'center'}}>请先<span style={{color:'#108ee9'}} onClick={()=>{gotoLogin.method('myinfo')}}>登录</span>之后再进行操作</div>
						<h3>共{Article.data.reply_count}条评论</h3>
						{Article.data.replies.map(function(index,key){
							return(
								<div key={key}>
									<div>
									    <WhiteSpace size="lg" />
									    <Card full>
									      <Card.Header
									        title={<Link to={`/userinfo/${index.author.loginname}`}>{index.author.loginname}</Link>}
											thumb={index.author.avatar_url}
									        extra={<p>{key+1}楼</p>}
									      />
									      <Card.Body>
									      	<div dangerouslySetInnerHTML={{__html:index.content}}></div>
									      </Card.Body>
									      <Card.Footer content={GetTime.getTime(new Date(),index.create_at)} extra={
									      	<div>
									      	<Icon onClick={()=>{dispatch(actions.request_upComment(Login.accesstoken,index.id,key,index.ups,Article.data.id));_this.upComment[key]=!_this.upComment[key]}} type={_this.upComment[key]?require('../../../images/agree-fill.svg'):require('../../../images/agree.svg')}></Icon>
									      	&nbsp;{(_this.upComment[key])?index.ups.length:index.ups.length}&nbsp;
									      	<Icon onClick={()=>_this.setState({replyOther:!_this.state.replyOther,replyId:index.id})} type={require('../../../images/forward.svg')}></Icon>
									      	</div>} />
									    </Card>
									    <div style={{display:(_this.state.replyOther&&_this.state.replyId==index.id)?"block":"none"}}>
										    <List renderHeader={() => '添加回复'}>
							            	<TextareaItem
							            	{...getFieldProps('count', {initialValue:`@${index.author.loginname} `})}
							            	rows={5}
							            	count={200}
							            	clear
							           		 />
					        				</List>
			        						< Button onClick={()=>{
				        					const content=getFieldProps('count').value;
				        					dispatch(actions.request_commentArticle(Login.accesstoken,Article.data.id,content,index.id));
				        					}} className = "btn" type = "primary" > 回复 < /Button> 
										</div>
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
				            	clear
				            />
		        		</List>
        				< Button onClick={()=>{
        					const content=getFieldProps('count').value;
        					dispatch(actions.request_commentArticle(Login.accesstoken,Article.data.id,content));
        					}} className = "btn" type = "primary" > 回复 < /Button> 
        			</div>
			)
		} else {
			return (<div style={{padding:'60px',textAlign:'center'}}>请先<span style={{color:'#108ee9'}} onClick={()=>{gotoLogin('myinfo')}}>登录</span>之后再进行操作</div>)
		}

	}
}
const Commenter = createForm()(Comment);
export default Commenter;