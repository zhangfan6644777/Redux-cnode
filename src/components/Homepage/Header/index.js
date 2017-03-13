import React from 'react';
import {
	Drawer,
	List,
	NavBar,
	Icon
} from 'antd-mobile';

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

		const sidebar = (
			<div>
				<p><img/></p>
				<a><p>我发布的主题</p></a>
				<a><p>我关注的</p></a>
				<button>退出登录</button>
			</div>);
		const drawerProps = {
			open: this.state.open,
			position: this.state.position,
			onOpenChange: this.onOpenChange.bind(this),
		};
		return (<div>
		<NavBar iconName="ellipsis" onLeftClick={this.onOpenChange.bind(this)} rightContent={[
        <Icon  key="0" type="search" style={{ marginRight: '0.32rem' }} />,
      ]} >基本</NavBar>
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