import {
	combineReducers
} from 'redux';
import Topic from './Topic';
import Article from './Article';
const InitReducers = combineReducers({
	Topic,
	Article
});
export default InitReducers;