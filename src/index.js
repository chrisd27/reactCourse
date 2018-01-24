import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCttwNcO30x1QnuvJdSbvhM-k3LkWknbQk';

const App = () => {
    return (
        <div> 
            <SearchBar />
        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('.container'));