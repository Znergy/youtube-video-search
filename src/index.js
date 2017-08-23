import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
const API_KEY = 'your_api_key_here';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos }); only works w/ same names (cool!!)
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));


/**** Passing value up from child component ****/
// onVideoSelect is being passed to VideoList
// the purpose of onVideoSelect is to set the selectedVideo based on what the user clicks on in VideoList
// 1st run, onVideoSelect is passed to VideoList as props.onVideoSelect
// VideoList then sets onVideoSelect = props.onVideoSelect (to pass into VideoListItem)
// VideoListItem then sets the value of onVideoSelect to what the user clicks
// This re-renders the VideoList and then re-renders App
// When app re-renders, selectedVideo is now equal to what video the user selected
/** Note: onVideoSelect is a function, so you're passing a function down the tree. Once the user
 * clicks the video it calls the function using the clicked video as an argument. This then goes
 * up the tree setting the selectedVideo as what the user clicked. How awesome!! **/



/**** App Component Setup ****/
// Tasks:
// 1)
// Create a new component. This should produce HTML
// ES6 syntax: const for constant, will never change

// 2)
// Take this components generated HTML and put it on the page (in the DOM)