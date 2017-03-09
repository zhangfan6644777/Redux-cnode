import React from 'react';
import {
	connect
} from 'react-redux';
import actions from '../actions/actions'
class App extends React.Component {
	render() {
		let {
			state,
			dispatch
		} = this.props
		console.log(this.props.children)
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