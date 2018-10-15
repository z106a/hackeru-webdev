import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Signin extends React.Component {
  state = {
    login: '',
    pass: ''
  };

  handleLogin() {
    let {login, pass} = this.state;
    this.props.login(login, pass);
    this.setState({login: '', pass: ''});
    // this.props.history.push('/');
  }

  componentDidUpdate() {
    if (this.props.auth) {
      this.props.history.push('/');
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
        {/* <form style={{"padding": "50px 100px"}}> */}
        <h3>Login page</h3>
        <div className="form-group">
          <label>Email address</label>
          <input 
            className="form-control"
            onChange={(e) => this.setState({login: e.target.value})} 
            value={this.state.login} 
          />
          </div>
          <div className="form-group">
          <label>Password</label>
          <input 
            type="password"
            className="form-control"
            onChange={(e) => this.setState({pass: e.target.value})} 
            value={this.state.pass} 
          />
          </div>
          <button 
            className="btn btn-primary" 
            onClick={this.handleLogin.bind(this)}
          > Login
          </button>
        {/* </form> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

// export default connect(null, actions)(Signin);
export default connect(mapStateToProps, actions)(Signin);