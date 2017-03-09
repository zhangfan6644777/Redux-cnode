import React from 'react';
import {
  List
} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

require('./index.less');
class list extends React.Component {
  componentDidMount() {

  }
  render() {
    let {
      state
    } = this.props
    let all = state.topics.map(function(index) {
      return (
        <div key={index.id} className='index-list'>
                <div>
                  <img src={index.author.avatar_url}/>
                  <p>{index.author.loginname}</p>
                </div>
                <div>
                  <p>{index.title}</p>
                  <p>{index.reply_count}/{index.visit_count}</p>
                  <p>创建于{index.create_at.substring(0,10)}</p>
                </div>
              </div>
      )
    })
    return (
      <div>
          <List renderHeader={() => '右侧自定义（无内容 / 文字 / 图片）'} className="my-list">
            <Item>标题文字</Item>
            <Item arrow="horizontal" onClick={() => {}}>标题文字</Item>
            <Item extra="内容内容" arrow="horizontal" onClick={() => {}}>标题文字</Item>
            <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
              标题文字 <Brief>副标题</Brief>
            </Item>
          </List>
      </div>
    )
  }
}
export default list;