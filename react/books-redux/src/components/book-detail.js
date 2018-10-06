import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  
  render() {
    console.log(this.props);
    if (!this.props.book) {
      return <div>Select a book.</div>
    }

    return (
      <div>
        <h3>Details: </h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    book: state.active
  };
}

export default connect(mapStateToProps)(BookDetail);