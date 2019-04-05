import React from 'react';
import {connect} from 'react-redux';
// export default () => {
//   return <div>Comment list</div>
// }

class CommentList extends React.Component {
  rednerComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.rednerComments()}
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
export default connect(mapStateToProps)(CommentList);