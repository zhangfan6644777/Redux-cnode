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

}
class UserInfo extends React.Component {
	render() {
		let {
			userinfo,
			collect,
			gotoLogin
		} = this.props;
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
			    <Tabs defaultActiveKey="1" swipeable={false} onChange={callback}>
				    <TabPane tab="发布的话题" key="1">
				        <div  style={{ display: 'flex', backgroundColor: '#fff',height:'7.4rem'}}>
				           <ul className='userTopic'>
				           {userinfo.recent_topics.map(function(index,key){
				           	return(
									<Link key={key} to={`/arcitle/${index.id}`}><li><p>{index.title}</p><p>{GetTime.getTime(new Date(),index.last_reply_at)}</p></li></Link>
				           		)
				           })}
				           <div style={{display:userinfo.recent_topics.length==0?'block':'none',textAlign:'center',padding:'36px 0'}}>还没有发不过任何话题,快来<span style={{color:'#108ee9'}} onClick={()=>gotoLogin('publish')}>发布</span>一个吧</div>
				           </ul>
				        </div>
				    </TabPane>
					<TabPane tab="参与的话题" key="2">
				        <div style={{ display: 'flex', backgroundColor: '#fff',height:'7.4rem' }}>
				           <ul className='userTopic'>
				           {userinfo.recent_replies.map(function(index,key){	
				           	return(
				           			<Link key={key} to={`/arcitle/${index.id}`}><li><p>{index.title}</p><p>{GetTime.getTime(new Date(),index.last_reply_at)}</p></li></Link>
				           		)
				           })}
				           </ul>
				        </div>
				    </TabPane>
				    <TabPane tab="收藏的话题" key="3">
				        <div style={{ display: 'flex', backgroundColor: '#fff',height:'7.4rem' }}>
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