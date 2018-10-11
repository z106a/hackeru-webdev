import {combineReducers} from 'redux';
import authReducer from './reducer_auth';
import commentReducer from './reducer_comments';

const rootReducer = combineReducers({
  auth: authReducer,
  comments: commentReducer
})

export default rootReducer;