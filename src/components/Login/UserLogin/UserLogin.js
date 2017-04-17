import React from 'react';
import {
	List,
	Button,
	InputItem
} from 'antd-mobile';
require('./UserLogin.less')
class UserLogin extends React.Component {
	login(access_token) {
		this.props.login(access_token)
	}
	render() {
		//console.log(this.props.state)
		return (
			<List style={{margin:60,marginTop:350}}>
    				<List.Item>
						<InputItem ref='input' placeholder='cnode社区设置最下面查看Token' style={{border:'1px solid #CCC'}}/>
						<Button onClick={()=>{
							const access_token=this.refs.input.refs.input.value;
							this.login(access_token)
						}} type="primary" style={{marginTop:40}}>登录</Button>
					</List.Item>
				</List>
		)
	}
}
export default UserLogin