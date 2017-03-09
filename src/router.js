import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
import App from './containers/App';
import Homepage from './containers/Homepage';
import Login from './containers/Login';
import PublishTopic from './containers/PublishTopic';
import Message from './containers/Message';
import Topic from './containers/Topic';

class routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Homepage}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/publish' component={PublishTopic}></Route>
				<Route path='/message' component={Message}></Route>
				<Route path='/topic' component={Topic}></Route>
			</Router>

		)
	}
}
export default routes;