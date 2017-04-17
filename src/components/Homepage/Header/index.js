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
		console.log(this.props)
		let {
			login,
			UserInfo,
			gotoLogin
		} = this.props
		let sidebar;
		console.log(UserInfo.userInfo.avatar_url)
		if (login.success && !UserInfo.isFetching) {
			sidebar = (
				<div style={{width:document.documentElement.clientWidth*3/4}}>
					<p style={{textAlign:'center'}}><img src={UserInfo.userInfo.avatar_url}/></p>
			        <Accordion defaultActiveKey="0" className="my-accordion">
			          <Accordion.Panel header="发布的话题">
			            <List className="my-list">
			          		{UserInfo.userInfo.recent_replies.map(function(index,key){	
					           	return(
					           			<List.Item key={key}><Link key={key} to={`/arcitle/${index.id}`}><p>{index.title}</p></Link></List.Item>
					           		)
				           	})}
			            </List>
			          </Accordion.Panel>
			          <Accordion.Panel header="参与的话题" className="pad">this is panel content2 or other</Accordion.Panel>
			          <Accordion.Panel header="收藏的话题" className="pad">
			            文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本
			          </Accordion.Panel>
			        </Accordion>
					<Button onClick={()=>{
					}} type="primary" style={{marginTop:40}}>退出</Button>
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
		<NavBar iconName="ellipsis" onLeftClick={this.onOpenChange.bind(this)}>基本</NavBar>
	      <Drawer
	        className="my-drawer"
	        style={{height:document.documentElement.clientHeight-189}}
	        sidebar={sidebar}
	        dragHandleStyle={{ display: 'none' }}
	        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
	        {...drawerProps}
	      >
      	  </Drawer>
    </div>);
	}
}
export default header;