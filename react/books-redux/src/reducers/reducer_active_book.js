export default function(state = null, action) {
  switch (action.type) {
    case 'SELECT_BOOK':
      console.log(action.payload);
      return action.payload;
      default:
      return state;
  }
  
}