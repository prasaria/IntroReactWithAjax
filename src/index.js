import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

//Create a new component. This component should produce
//some html

const API_Key = 'AIzaSyBdVj3t0bajPY292Be0BYdVA0ojfWb1SeY';


class App extends Component {
    constructor(props){

        super(props);
       
        this.state = { 
            videos: [],
            selectedVideo: null
        };
      
        this.videoSearch('marbozir');
        
    }

    videoSearch(term) {
        YTSearch({key: API_Key, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
         });
    }

    render() {

        const vidSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
              <SearchBar onSearchTermChange={vidSearch}/>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList 
                     onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                     videos={this.state.videos} />
            </div>
          ); 
    }

}

//Take this component generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));