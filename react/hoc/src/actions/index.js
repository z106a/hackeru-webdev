import axios from 'axios';
import {CHANGE_AUTH, SAVE_COMMENT, FETCH_COMMENT} from './types';


export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: !isLoggedIn
  }
}

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
      type: FETCH_COMMENT,
      payload: response
    }
}