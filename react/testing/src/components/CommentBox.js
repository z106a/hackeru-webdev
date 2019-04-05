import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

// export default () => {
//   return <div>Comment Boxxxx</div>
// }

class CommentBox extends Component {
  state = {
    comment: ''
  }
  handleChange = (e) => {
    this.setState({comment: e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // TODO - Call an action creator;
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment } onChange={this.handleChange}/>
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
         {/* part 2 */}
        <button onClick={this.props.fetchComments} className="fetch-comments">Fetch</button>
      </Fragment>
    );
  }
}

export default connect(null, actions)(CommentBox);