import {
	combineReducers
} from 'redux';
import Topic from './Topic';
import Article from './Article';
import Login from './Login';
const InitReducers = combineReducers({
	Topic,
	Login,
	Article
});
export default InitReducers;