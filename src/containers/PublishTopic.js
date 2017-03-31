import React from 'react';
import {
	connect
} from 'react-redux';
import {
	NavBar,
	Icon,
	Picker,
	List,
	TextareaItem,
	Button,
	Toast,
	Modal
} from 'antd-mobile';
import {
	createForm
} from 'rc-form';
const data = [{
	label: '分享',
	value: "share"
}, {
	label: '问答',
	value: "ask"
}, {
	label: '招聘',
	value: "job"
}];

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.showModal = this.showModal.bind(this);
		this.onClose = this.onClose.bind(this);
		this.state = {
			modal1: false,
			modal2: false,
			modal3: false,
		};
	}
	publish(accesstoken, select, title, content) {
		let {
			dispatch,
			actions
		} = this.props;
		//console.log(select)
		dispatch(actions.request_PublishTopic(accesstoken, select, title, content))

	}
	componentWillReceiveProps(newProps) {}
	showModal(key) {
		this.setState({
			[key]: true,
		});
	}
	onClose(key) {
		this.setState({
			[key]: false,
		});
	}
	render() {
		const {
			getFieldProps
		} = this.props.form;
		let {
			Login,
			PublishTopic
		} = this.props;
		return (
			<div>
				<NavBar>
					发布
    			</NavBar>
    			<Picker data={data} cols={1} {...getFieldProps('select')} className="forss">
          			<List.Item arrow="horizontal">请选择发表类型</List.Item>
        		</Picker>
        		<List>
		          <TextareaItem
		            {...getFieldProps('title')}
		            title="标题"
		            autoHeight
		            labelNumber={5}
		          />
		          <TextareaItem
		            {...getFieldProps('content')}
		            rows={3}
		            title="内容"
		            autoHeight
		            placeholder="内容字数30字以上"
		          />
        		</List>
        		<div style={{visibility: PublishTopic.hasOwnProperty('error_msg')?'visible':'hidden',padding:'22px',color:'red',textAlign:'center',height:'30px'}}>{PublishTopic.error_msg}</div>
        		<Button onClick={()=>{
        			const title=getFieldProps('title').value;
        			const content=getFieldProps('content').value;

        			const select=getFieldProps('select').value;
        			if(!select){
        				this.showModal('modal1');
        				return
        			}else if(title.length<=3){
        				console.log(title.length)
        				this.showModal('modal2');
        			}else if(content.length<=5){
        				console.log(content.length)
        				this.showModal('modal3');
        			}
        			console.log(this)
        			const accesstoken=Login.accesstoken
        			this.publish(accesstoken,select.toString(),title,content)
        			}} className="btn" type="primary" style={{margin:'10%',width:'80%'}}>发布</Button>
					<Modal
			          title="这是 title"
			          transparent
			          maskClosable={false}
			          visible={this.state.modal1}
			          onClose={()=>this.onClose('modal1')}
			          footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('modal1'); } }]}
			        >
			          没选择<br/>
			         </Modal>
			         <Modal
			          title="这是 title"
			          transparent
			          maskClosable={false}
			          visible={this.state.modal1}
			          onClose={()=>this.onClose('modal2')}
			          footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('modal1'); } }]}
			        >
			          这是标题字数不够<br/>
			         </Modal>
			         <Modal
			          title="这是 title"
			          transparent
			          maskClosable={false}
			          visible={this.state.modal1}
			          onClose={()=>this.onClose('modal3')}
			          footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('modal1'); } }]}
			        >
			          内容太少<br />
			         </Modal>
			</div>
		)
	}
}
const PublishTopic = createForm()(Test);

function PublishTopicSelect(state) {
	//console.log(state)
	let {
		Login,
		PublishTopic
	} = state
	return {
		Login,
		PublishTopic
	}
}
export default connect(PublishTopicSelect)(PublishTopic)