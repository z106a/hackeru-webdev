import React from 'react';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';
import {connect} from 'react-redux';
import {Button} from './Buttons';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = (e) => this.setState({term: e.target.value});

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }



  render() {
    return (
      <form className="form-inline" onSubmit={(e) => this.handleSubmit.call(this, e)}>
      <div className="form-group" style={{"textAlign": "center", "padding": "20px"}}>
        <input 
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-day forecast in your fav cities"
        />
        <span className="input-group-btn">
          <Button type="submit" className="btn">Submit</Button>
        </span>
      </div>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

