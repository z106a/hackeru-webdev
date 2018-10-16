import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import WeatherList from './components/weather_list';
import styled from 'styled-components';

const header = styled.div`
  background: grey;
  border: 2px solid palevioletred;
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="col-md-12">
            <SearchBar />
            <WeatherList />
          </div>
        </header> 
      </div>
    );
  }
}

export default App;


