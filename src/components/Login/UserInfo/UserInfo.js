import React from 'react';
import {
	Card,
	Tabs,
	WhiteSpace,
	ActivityIndicator
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
		let {
			userinfo,
			collect
		} = this.props;
		console.log(userinfo)
		console.log(collect)
		if (JSON.stringify(userinfo) != '{}' && collect) {
			return (
				<div>
			    <Card full>
			      <Card.Header
					title = {userinfo.loginname}
			        thumb={userinfo.avatar_url}
			        extra={<div>积分&nbsp;{userinfo.score}</div>}
			      />
			      <Card.Body>
			<div><a style={{color:'#000',textDecoration:'underline'}} href={`https://github.com/${userinfo.githubUsername}`}>{`https://github.com/${userinfo.githubUsername}`}</a></div>
			      </Card.Body>
			      <Card.Footer content={'创建于'+GetTime.getTime(new Date(),userinfo.create_at)}/>
			    </Card>
			    <Tabs defaultActiveKey="1"  onChange={callback}>
				    <TabPane tab="我发布的主题" key="1">
				        <div  style={{ display: 'flex', backgroundColor: '#fff',height:'7.5rem'}}>
				           <ul className='userTopic'>
				           {userinfo.recent_topics.map(function(index,key){
				           	return(
									<Link key={key} to={`/arcitle/${index.id}`}><li><p>{index.title}</p><p>{GetTime.getTime(new Date(),index.last_reply_at)}</p></li></Link>
				           		)
				           })}
				           </ul>
				        </div>
				    </TabPane>
					<TabPane tab="我参与的话题" key="2">
				        <div style={{ display: 'flex', backgroundColor: '#fff',height:'7.5rem' }}>
				           <ul className='userTopic'>
				           {userinfo.recent_replies.map(function(index,key){	
				           	return(
				           			<Link key={key} to={`/arcitle/${index.id}`}><li><p>{index.title}</p><p>{GetTime.getTime(new Date(),index.last_reply_at)}</p></li></Link>
				           		)
				           })}
				           </ul>
				        </div>
				    </TabPane>
				    <TabPane tab="我收藏的话题" key="3">
				        <div style={{ display: 'flex', backgroundColor: '#fff',height:'7.5rem' }}>
				           <ul className='userTopic'>
				           {collect.map(function(index,key){	
				           	return(
				           			<Link key={key} to={`/arcitle/${index.id}`}><li><p>{index.title}</p><p>{GetTime.getTime(new Date(),index.last_reply_at)}</p></li></Link>
				           		)
				           })}
				           </ul>
				        </div>
				    </TabPane>
			    </Tabs>
			</div>
			)
		} else {
			return (<ActivityIndicator size="large" />)
		}

	}
}
export default UserInfo