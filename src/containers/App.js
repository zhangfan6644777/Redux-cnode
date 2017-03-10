import React from 'react';
import {
	connect
} from 'react-redux';
import actions from '../actions/actions'
//在这里面主要是需要一个登陆的状态贯穿全局
class App extends React.Component {
	render() {
		let {
			state,
			dispatch
		} = this.props

		return (
			<div>{this.props.children}</div>
		)
	}
}

function select(state) {
	return {
		state: state
	}
}
export default connect(select)(App)