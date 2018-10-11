import {SAVE_COMMENT, FETCH_COMMENT} from '../actions/types';

export  default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      debugger
      return [...state, action.payload]
    case FETCH_COMMENT:
      debugger
      return state;
    default:
     return state;
  }
}