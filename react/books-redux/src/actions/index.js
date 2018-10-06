export function selectBook(book) {
  console.log('clicked', book);
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}