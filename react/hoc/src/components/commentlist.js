import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map((item, idx) => {
      return <li key={idx}>{item}</li>
    })
  }
  render(){
    return ( 
    <div>
      <h3>CommentList</h3>
      <button className='btn btn-success' onClick={this.props.fetchComments}>Fetch comments</button>
      <ul>
        {this.renderComments()}
      </ul>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps, actions)(CommentList);