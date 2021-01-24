import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {get} from '../../utils/GetArticle'


class Libs extends React.Component {
    constructor(props) {
      super(props);
      // '(data|| {'items': [{'snippet':'hi'},{'snippet': '33'}]}).items[1].snippet || data'
   
      this.state = {
        data: 'hii',
      };
    }
  componentDidMount() {
    get(`https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=AIzaSyBbvk21k9hF6HNwIONXX-zwVw4-xNafNJE&tbm=nws&cx=b2429b4ec66f52cb6`)
    .then(res => this.setState({ data: res }));
  }

 render  () {
  const {data} = this.state;
   return(
    <div className="d-flex flex-row text-wrap">
    {console.log(data)}
    <p className="text-wrap">
    Searching for: {this.props.query}
    {console.log(data)}
    </p>
    </div>
   )
 };
};

Libs.propTypes = {
  url: PropTypes.string,
};

export default Libs;


