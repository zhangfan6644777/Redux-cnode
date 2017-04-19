import React from 'react';
import {
	Card,
	Tabs,
	WhiteSpace,
	List,
	Badge
} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import {
	Link
} from 'react-router';
const TabPane = Tabs.TabPane;
require('./MessageList.less')
import GetTime from '../../utils/GetTime';

class Message extends React.Component {
	constructor() {
		super();
		this.handleTabClick = this.handleTabClick.bind(this);
	}
	handleTabClick(key) {
		let {
			dispatch,
			actions,
			state,
			Login
		} = this.props;
		if (key == 2 && (state.hasnot_read_messages.length != 0)) {
			dispatch(actions.markall_Message(Login.accesstoken))
		}
	}
	render() {
		let {
			state,
			markMessage,
			Login
		} = this.props
		return (
			<Tabs defaultActiveKey="1" animated={false}>
				    <TabPane tab="已读消息" key="1">
				        <div  style={{ display: 'flex', backgroundColor: '#fff',height:'10.6rem'}}>
				        	<List className="my-list" style={{width:'100%'}}>
				           {state.has_read_messages.map(function(index,key){
				           	return(	
								<Item key={key} extra={GetTime.getTime(new Date(),index.reply.create_at)} align="middle" wrap  thumb={index.author.avatar_url} multipleLine>
	         						<Link  to={`/arcitle/${index.topic.id}`}>
		         						<div dangerouslySetInnerHTML={{__html:index.reply.content}}></div>	 
		         						<Brief>来自:{index.topic.title}</Brief>
	         						</Link>
	        					</Item>	
				           		)
				           })}
				           
				           </List>
				        </div>
				    </TabPane>
					<TabPane tab={<div>未读消息   <Badge text={state.hasnot_read_messages.length}/></div>} key="2" >
				        <div style={{ display: 'flex', backgroundColor: '#fff',height:'10.6rem' }}>
				        	<List className="my-list" style={{width:'100%'}} onClick={()=>alert(1)}>
				           {state.hasnot_read_messages.map(function(index,key){
				           	return(
									<Item key={key} extra={GetTime.getTime(new Date(),index.reply.create_at)} align="middle" wrap  thumb={index.author.avatar_url} multipleLine>
	         							<Link onClick={()=>markMessage(Login.accesstoken,index.id)} to={`/arcitle/${index.topic.id}`}>	 
	         								 <div dangerouslySetInnerHTML={{__html:index.reply.content}}></div>
	         								 <Brief>来自:{index.topic.title}</Brief>
        								</Link>
        							</Item>	
				           		)
				           })} 
				           <div style={{display:state.hasnot_read_messages.length==0?'block':'none',textAlign:'center',padding:'36px 0'}}>暂无未读消息</div>
				           </List>
				           
				        </div>
				    </TabPane>
			    </Tabs>
		)
	}
}
export default Message;