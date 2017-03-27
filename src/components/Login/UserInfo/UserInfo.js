import React from 'react';
import {
	Card,
	Tabs,
	WhiteSpace
} from 'antd-mobile';
import {
	Link
} from 'react-router'
const TabPane = Tabs.TabPane;
require('./UserInfo.less');

import GetTime from '../../../utils/GetTime';

function callback(key) {
	console.log(key);
}
class UserInfo extends React.Component {
	render() {
		console.log(this.props.state)
		console.log('哼')
		let {
			state
		} = this.props;
		if (state.userInfo) {
			return (
				<div>
			    <Card full>
			      <Card.Header
					title = {state.userInfo.loginname}
			        thumb={state.userInfo.avatar_url}
			        extra={<div>积分&nbsp;{state.userInfo.score}</div>}
			      />
			      <Card.Body>
			<div><a style={{color:'#000',textDecoration:'underline'}} href={`https://github.com/${state.userInfo.githubUsername}`}>{`https://github.com/${state.userInfo.githubUsername}`}</a></div>
			      </Card.Body>
			      <Card.Footer content={'创建于'+GetTime.getTime(new Date(),state.userInfo.create_at)}/>
			    </Card>
			    <Tabs defaultActiveKey="1" animated={false} onChange={callback}>
				    <TabPane tab="我发布的主题" key="1">
				        <div  style={{ display: 'flex', backgroundColor: '#fff',height:'7.5rem'}}>
				           <ul className='userTopic'>
				           {state.userInfo.recent_topics.map(function(index,key){
				           	return(
									<Link key={key} to={`/arcitle/${index.id}`}><li>{index.title}<span>{GetTime.getTime(new Date(),index.last_reply_at)}</span></li></Link>
				           		)
				           })}
				           </ul>
				        </div>
				    </TabPane>
					<TabPane tab="我参与的话题" key="2">
				        <div style={{ display: 'flex', backgroundColor: '#fff',height:'7.5rem' }}>
				           <ul className='userTopic'>
				           {state.userInfo.recent_replies.map(function(index,key){	
				           	return(
				           			<Link key={key} to={`/arcitle/${index.id}`}><li>{index.title}<span>{GetTime.getTime(new Date(),index.last_reply_at)}</span></li></Link>
				           		)
				           })}
				           </ul>
				        </div>
				    </TabPane>
			    </Tabs>
			</div>
			)
		} else {
			return (<div></div>)
		}

	}
}
export default UserInfo