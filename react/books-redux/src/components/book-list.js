import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  state = {
    newBook: ''
  };

  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={()=> this.props.selectBook(book)}

        >{book.title}</li>
      );
    });
  }
  
  addBook() {
    this.props.addBook(this.state.newBook);
    this.setState({newBook: ''});
  }

  render() {
    return (
      <div>
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      <input value={this.state.newBook} onChange={(event) => this.setState({newBook: event.target.value})}></input>

      <button onClick={() => this.addBook() }>add</button>
      </div>
    )
  }
}

//whatever is returned will show up as props 
function mapStateToProps(state) {
  return {books: state.books};
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({selectBook: selectBook}, dispatch);
// }

export default connect(mapStateToProps, actions)(BookList);