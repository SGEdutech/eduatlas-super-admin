import { combineReducers } from 'redux';
import tuitionReducer from './tuitionReducer';

const rootReducer = combineReducers({
	tuition: tuitionReducer
});

export default rootReducer;
