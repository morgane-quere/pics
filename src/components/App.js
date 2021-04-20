import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  
  onSearchSubmit(term) {
    const url = 'https://api.unsplash.com/search/photos';
    const client_id = process.env.REACT_APP_PICS_API_KEY;
    console.log(client_id);

    axios.get(url, {
      params: {query: term },
      headers: {
        Authorization: `Client-ID ${client_id}`
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px '}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;