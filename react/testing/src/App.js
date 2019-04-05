import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         hi there!
//       </div>
//     );
//   }
// }

export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  )
}
// export default App;
