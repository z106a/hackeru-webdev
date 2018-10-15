import {CHANGE_AUTH, USER_LOGIN} from '../actions/types';

export default function(state=false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
    case USER_LOGIN:
      return action.payload      
    default:
      return state
  }
}