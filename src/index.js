import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';

//Create a new component. This component should produce
//some html

const API_Key = 'AIzaSyBdVj3t0bajPY292Be0BYdVA0ojfWb1SeY';

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    ); 
}

//Take this component generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));