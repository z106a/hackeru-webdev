import interfaceReducer from './interface';

const combineReducers = reducer => {
  return (state = {}, action) => {
    const keys = Object.keys(reducer);
    const nextReducers = {};
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      const invoke = reducer[keys[i]](state[keys[i]], action);
      nextReducers[keys[i]] = invoke;
      console.log(nextReducers);
    }
    return nextReducers;
  };
};

// const rootReducer = (obj, action) => {
//   console.log(obj);
//   return {
//     interface: interfaceReducer(obj.uistate, action)
//   }
// }

const appReducer =  (state, action) => {
  switch (action.type) {
    case 'selectedTab':
      return {...state, selectedTab: action.selectedTab}
    default:
      return state;
  }
}
export default appReducer;

const rootReducer =combineReducers({
  interface: interfaceReducer
});



