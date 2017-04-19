import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import Article from './containers/Article';
import OtherInfo from './containers/OtherInfo';
class routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component={Index}/>
					<Route path='/arcitle/:id' component={Article}></Route>
					<Route path='/userinfo/:loginname' component={OtherInfo}></Route>
				</Route>	
			</Router>

		)
	}
}
export default routes;