import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, Route} from 'react-router-dom';
import * as actions from './actions';
import CommentBox from './components/commentbox';
import CommentList from './components/commentlist';

class App extends Component { 
  // props.auth - true, false, 
  // props.changeAuth - function from action
  toggleAuth() {
    this.props.changeAuth(this.props.auth);
  }
  renderButton() {
    if (this.props.auth) {
      return <button onClick={this.toggleAuth.bind(this)}>Sign Out</button>
    }
    return <button onClick={this.toggleAuth.bind(this)}>Sign In</button>
  }

  render() {
   return (
      <div className="container">
        <div className="row">
          <ul className='header'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post a comment</Link></li>
            <li>{this.renderButton()}</li>
          </ul>

          <div className="row">
          <div className="col-md-auto">
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(App);