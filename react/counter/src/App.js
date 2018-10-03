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
  
  clickH = (sign) => {
    sign === '+' ? 
      this.setState({counter: this.state.counter + 1}) :
      this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.counter}</div>
        <div className="btn-group">
          <Button sign="+" buttonHandler={this.clickH}/>
          <Button sign="-" buttonHandler={this.clickHandler}/>
          <Button buttonHandler={this.clickHandler}>+</Button>
        </div>
        
      </div>
    );
  }
}
export default App;

const Button = (props) => {
  const sign = props.sign ? props.sign : props.children;
  return (
    <button 
      onClick={() => props.buttonHandler(sign )}>
      {sign}
    </button>
  )  ;
}
