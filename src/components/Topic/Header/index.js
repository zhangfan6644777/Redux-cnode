import React from 'react';
import {
	Drawer,
	List,
	NavBar,
	Icon,
	Button,
	Accordion
} from 'antd-mobile';
import {
	Link
} from 'react-router';
require('./index.less')

class header extends React.Component {
	constructor(...props) {
		super(...props);
		this.state = {
			open: false,
			position: 'left'
		}
	}
	onOpenChange(...args) {
		this.setState({
			open: !this.state.open
		});
	}
	componentDidMount() {

	}
	render() {
		let {
			login,
			UserInfo,
			gotoLogin
		} = this.props
		let sidebar;
		if (login.success && JSON.stringify(UserInfo.userInfo) != '{}' && UserInfo.collect) {
			sidebar = (
				<div id='Drawer' style={{width:document.documentElement.clientWidth*3/4}}>
					<p style={{textAlign:'center'}}><img style={{width:230,height:230}} src={UserInfo.userInfo.avatar_url}/></p>
					<p style={{textAlign:'center'}}><Button type="primary" inline onClick={()=>gotoLogin('myinfo')}>个人详情</Button></p>
			        <Accordion defaultActiveKey="0" className="my-accordion">
			          <Accordion.Panel header="发布的话题" className="pad">
			            <List>
			          		{UserInfo.userInfo.recent_topics.map(function(index,key){	
					           	return(
					           			<List.Item key={key}><Link style={{width:'100%',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap'}} to={`/arcitle/${index.id}`}>{index.title}</Link></List.Item>
					           		)
				           	})}
			            </List>
			          </Accordion.Panel>
			          <Accordion.Panel header="参与的话题" className="pad">
			            <List>
			          		{UserInfo.userInfo.recent_replies.map(function(index,key){	
					           	return(
					           			<List.Item key={key}><Link style={{width:'100%',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap'}} to={`/arcitle/${index.id}`}>{index.title}</Link></List.Item>
					           		)
				           	})}
			            </List>
			          </Accordion.Panel>
			          <Accordion.Panel header="收藏的话题" className="pad">
			            <List>
			          		{UserInfo.collect.map(function(index,key){	
					           	return(
					           			<List.Item key={key}><Link style={{width:document.documentElement.clientWidth*3/4,overflow:'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap'}} to={`/arcitle/${index.id}`}>{index.title}</Link></List.Item>
					           		)
				           	})}
			            </List>
			          </Accordion.Panel>
			        </Accordion>
				</div>);
		} else {
			sidebar =
				<div style={{width:document.documentElement.clientWidth/2}}>
					<Button onClick={()=>{
						gotoLogin('myinfo')
					}} type="primary" style={{margin:'370px 40px 0 40px'}}>请先登录</Button>
				</div>
		}
		const drawerProps = {
			open: this.state.open,
			position: this.state.position,
			onOpenChange: this.onOpenChange.bind(this),
		};
		return (<div>
		<NavBar iconName="ellipsis" onLeftClick={this.onOpenChange.bind(this)}>首页</NavBar>
	      <Drawer
	        className="my-drawer"
	        style={{height:document.documentElement.clientHeight-189}}
	        sidebar={sidebar}
	        dragHandleStyle={{ display: 'none' }}
	        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
	        {...drawerProps}
	      >1
      	  </Drawer>
    </div>);
	}
}
export default header;