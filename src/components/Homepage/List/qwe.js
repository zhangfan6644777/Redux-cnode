import React from 'react';
import {
  RefreshControl,
  ListView,
  List
} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import {
  Link
} from 'react-router';


let pageIndex = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    console.log(dataSource)
    this.onRefresh = this.onRefresh.bind(this)
    this.initData = [];
    for (let i = 0; i < 1; i++) {
      this.initData.push(`r${i}`);
    }
    console.log(this.initData)
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
    };
    console.log(this.state.dataSource)
  }
  onRefresh() {
    console.log(this.state.dataSource)
    this.setState({
      refreshing: true
    });
    setTimeout(() => {
      this.initData = [`ref${pageIndex++}`, ...this.initData];
      this.setState({
        refreshing: false
      });
    }, 1000);
  }
  render() {
    let _this = this;
    const row = function(rowID) {
      return (
        <List key={rowID} className="my-list" >
              {_this.props.state.map(function(index){
                return(
                  <Link key={index.id} to={`/arcitle/${index.id}`} style={{display:'block'}} >
                    <Item  extra={index.create_at.substring(0,10)} align="bottom" thumb={index.author.avatar_url} multipleLine>
                      {index.title}<Brief>{index.reply_count}/{index.visit_count} 分享</Brief>
                    </Item>
                  </Link>
                )
              })}
        </List>
      )
    }
    return ( < ListView dataSource = {
        this.state.dataSource
      }
      renderRow = {
        row
      }
      scrollRenderAheadDistance = {
        200
      }
      initialListSize = {
        1
      }
      pageSize = {
        1
      }
      onScroll = {
        this.onScroll
      }
      style = {
        {
          height: document.documentElement.clientHeight,
          border: '1px solid #ddd',
          margin: '0.1rem 0',
        }
      }
      scrollerOptions = {
        {
          scrollbars: true
        }
      }
      refreshControl = {
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />
      }
      />
    );
  }
}

export default App;