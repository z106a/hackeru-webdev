import axios from 'axios';
import {CHANGE_AUTH, SAVE_COMMENT, FETCH_COMMENT, USER_LOGIN} from './types';


export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: !isLoggedIn
  }
}

export function login(l, p) {
  let payload = false;

  if (l === 'test@t.ru' && p === '123') {
    payload = true;
  }
  return {
    type: USER_LOGIN,
    payload
  }
}

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
export function fetchComments(city) {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
      type: FETCH_COMMENT,
      payload: response
    }
}