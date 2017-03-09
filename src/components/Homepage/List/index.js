import React from 'react';
require('./index.less');
class list extends React.Component {
  componentDidMount() {

  }
  render() {
    let {
      state
    } = this.props
    console.log('我是最里层')
    console.log(state)
    console.log('我服了')
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
      <div>{all}</div>
    )
  }
}
export default list;