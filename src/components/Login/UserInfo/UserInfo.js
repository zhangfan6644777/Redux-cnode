import React from 'react';
import {
	Card,
	Tabs,
	WhiteSpace
} from 'antd-mobile';

const TabPane = Tabs.TabPane;

function callback(key) {
	console.log(key);
}
class UserInfo extends React.Component {
	render() {
		return (
			<div>
			    <Card full>
			      <Card.Header
			        title="这是 title"
			        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
			        extra={<span>this is extra</span>}
			      />
			      <Card.Body>
			        <div>这是卡片内容</div>
			      </Card.Body>
			      <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
			    </Card>
			    <Tabs defaultActiveKey="3" animated={false} onChange={callback}>
				    <TabPane tab="选项卡一" key="1">
				        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
				           选项卡一内容
				        </div>
				    </TabPane>
				    <TabPane tab="选项卡二" key="2">
				        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
				           选项卡二内容
				        </div>
				    </TabPane>
			    </Tabs>
			</div>
		)
	}
}
export default UserInfo