import React from 'react';

// const SearchBar = () => {
//   return <input />; // React.createElement
// }
// class SearchBar extends React.Component {
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
//   render() {
//     return <input onChange={this.onInputChange }/>;
//   }
// }


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''}; // class based components
  }
  
  render() {
    return(

      <div className="search-bar">
        <input
          // onChange={ event => this.setState({term: event.target.value})}
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term} 
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// const foo = 5;
export default SearchBar; // export foo;