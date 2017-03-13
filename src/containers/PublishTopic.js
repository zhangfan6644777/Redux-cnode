import React from 'react';
import {
	NavBar,
	Icon
} from 'antd-mobile';
class Homepage extends React.Component {
	render() {
		return (
			<div>
				<NavBar  onLeftClick={() => history.go(-1)}>
					发布
    			</NavBar>
			</div>
		)
	}
}
export default Homepage