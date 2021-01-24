import React from 'react';
import SearchBar from './SearchBar';


class SearchArea extends React.Component {
    // '(data|| {'items': [{'snippet':'hi'},{'snippet': '33'}]}).items[1].snippet || data'

  
 render()  {
const text = 'Enter your search here'

  return (
    <div>
      {text}
      <SearchBar onSubmit={(query) => {this.props.parentCallback(query)}} />
    </div>
  );}
};

export default SearchArea;
