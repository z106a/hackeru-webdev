import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(sign) {
    sign === '+' ? 
      this.setState({counter: this.state.counter + 1}) :
      this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.counter}</div>
        <Button sign="+" buttonHandler={this.clickHandler}/>
        <Button sign="-" buttonHandler={this.clickHandler}/>
      </div>
    );
  }
}
export default App;

const Button = (props) => {
  return (
    <button 
      onClick={() => props.buttonHandler(props.sign)}>
      {props.sign}
    </button>
  )  ;
}
