import React, { Component } from 'react';
import  BookList from './components/book-list';
import  BookDetail from './components/book-detail';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <BookList />
        <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
