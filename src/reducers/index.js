import {
	combineReducers
} from 'redux';
import Topic from './Topic';
import Article from './Article';
import Login from './Login';
import UserInfo from './UserInfo';
import Message from './Message';
import PublishTopic from './PublishTopic';
import OtherInfo from './OtherInfo';
const InitReducers = combineReducers({
	Topic,
	Login,
	Article,
	UserInfo,
	Message,
	PublishTopic,
	OtherInfo
});
export default InitReducers;