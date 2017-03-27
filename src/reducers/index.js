import {
	combineReducers
} from 'redux';
import Topic from './Topic';
import Article from './Article';
import Login from './Login';
import UserInfo from './UserInfo';
const InitReducers = combineReducers({
	Topic,
	Login,
	Article,
	UserInfo
});
export default InitReducers;