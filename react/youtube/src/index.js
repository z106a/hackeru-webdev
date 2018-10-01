import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import YTSearch from 'youtube-api-search';
import './index.css';
import SearchBar from './components/search-bar';
import VideoList from "./components/video-list";
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyBZqJSHdvtrA4TplSnR9Ac3OnJCPseqicY';



// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//   </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    // YTSearch({key: API_KEY, term: 'surfboards'}, this.getData);
    
    // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    //   this.setState({videos: videos, selectedVideo: videos[0]});
    // });
    
    this.videoSearch('surfboards');
  }
  // getData = this.getData.bind(this);
  // getData(v) {
  //   this.setState({videos: v});
  // }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch} />
        {/* <VideoDetail video={this.state.videos[0]} /> */}
        <VideoDetail video={ this.state.selectedVideo } />

        <VideoList 
          videos={ this.state.videos }
          onVideoSelect={video => this.setState({selectedVideo: video})}
          />
      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
