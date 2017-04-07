import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import Login from './containers/Login';
import PublishTopic from './containers/PublishTopic';
import Message from './containers/Message';
import Article from './containers/Article';
import OtherInfo from './containers/OtherInfo';
class routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component={Index}/>
					<Route path='/login' component={Login}></Route>
					<Route path='/publish' component={PublishTopic}></Route>
					<Route path='/message' component={Message}></Route>
					<Route path='/arcitle/:id' component={Article}></Route>
					<Route path='/userinfo/:loginname' component={OtherInfo}></Route>
				</Route>	
			</Router>

		)
	}
}
export default routes;