const initBooks =  [
  {title: 'js the good parts'},
  {title: 'Harry poter'},
  {title: 'the dark Tower'},
  {title: 'eloquent ruby'},
];

export default function (state = initBooks, action) {

  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    default:
      console.log(state);
      return state;
  }
}