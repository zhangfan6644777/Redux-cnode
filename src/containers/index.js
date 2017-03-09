import React from 'react';

import Header from '../components/Homepage/Header/index';
import List from '../components/Homepage/List/index';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends React.Component {
	componentDidMount() {

	}
	render() {
		let {
			state,
			actions,
			dispatch
		} = this.props
		return (
			<div style={{height:document.documentElement.clientHeight-99}}>
				<Header/>
				<List state={state} actions={actions} dispatch={dispatch}/>				
			</div>
		);
	}
}

export default BottomNavigationExampleSimple;