import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, Route} from 'react-router-dom';
import * as actions from './actions';
import CommentBox from './components/commentbox';
import CommentList from './components/commentlist';
import Signin from './components/signin';

class App extends Component { 
  // props.auth - true, false, 
  // props.changeAuth - function from action
  toggleAuth() {
    this.props.changeAuth(this.props.auth);
  }
  renderButton() {
    if (this.props.auth) {
      return <button onClick={this.toggleAuth.bind(this)} className="btn btn-danger">Sign Out</button>
    }
    return <Link to="/login" className="btn btn-primary">Sign In</Link>
  }

  render() {
   return (
      <div className="container">
        <div className="row header">
          <ul className='col-md-12'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post a comment</Link></li>
            <li>{this.renderButton()}</li>
          </ul>
        </div>

          <div className="row" style={{"backgroundColor": "aliceblue"}}>
          <div className="col-md-auto">
            <Route path="/login" component={Signin} />
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
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