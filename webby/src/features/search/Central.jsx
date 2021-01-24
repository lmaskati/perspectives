import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from '../../utils/GetArticle';

class Central extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ' ',
      url: ' ',
      imgUrl: ' ',
      title: ' ',
      query: this.props.query,
    };
  }
  componentWillReceiveProps() {
    const key = 'AIzaSyDT5bQz1R6Sw9yTToQ5T5og9YkhYFT2oIs'
    console.log('url next');
    console.log(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=${key}&tbm=nws&cx=792b3c9d19def1928`
    );
    get(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=${key}&tbm=nws&cx=792b3c9d19def1928`
    ).then((res) =>
      this.setState({
        data: res.items[0].snippet,
        url: res.items[0].formattedUrl,
        title: res.items[0].title,
        imgUrl: res.items[0].pagemap.cse_thumbnail[0].src
      })
    );
  }

  render() {
    const { data, url, title,imgUrl } = this.state;
    return (
      <div className="d-flex flex-row text-wrap">
        <p className="text-wrap">
          Center article title:
          <a href={url}>{title}</a>;
          <br></br>
          <img 
           src={imgUrl}
           alt="photo"
           />
          <br></br>
          <br></br>
          Center article snippet: {data}
          <br></br>
          <br></br>
          URL: {url}
  
        </p>
      </div>
    );
  }
}

Central.propTypes = {
  url: PropTypes.string,
};

export default Central;
