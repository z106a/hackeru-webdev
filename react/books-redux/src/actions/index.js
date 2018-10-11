export function selectBook(book) {
  console.log('clicked', book);
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}

export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    payload: {title: book}
  }
}