import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID bFzbSz8y_VXCAPrG6VP2DJ-7i5vrjk_P9ldVnNlfbWc'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
    
}

export default App;