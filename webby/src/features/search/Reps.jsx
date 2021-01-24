import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from '../../utils/GetArticle';

class Reps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ' ',
      url: ' ',
      title: ' ',
      query: this.props.query,
    };
  }
  componentWillReceiveProps() {
    console.log('url next');
    console.log(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=AIzaSyCTWna4c9sM7nDNFqw8O71FymNyM27AG4A&tbm=nws&cx=ca0b35f95481b7956`
    );
    get(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=AIzaSyCTWna4c9sM7nDNFqw8O71FymNyM27AG4A&tbm=nws&cx=ca0b35f95481b7956`
    ).then((res) =>
      this.setState({
        data: res.items[0].snippet,
        url: res.items[0].formattedUrl,
        title: res.items[0].title,
      })
    );
  }

  render() {
    const { data, url, title } = this.state;
    return (
      <div className="d-flex flex-row text-wrap">
        <p className="text-wrap">
          Conservative article title: {title}
          <br></br>
          <br></br>
          Conservative article snippet: {data}
          <br></br>
          <br></br>
          URL: {url}
        </p>
      </div>
    );
  }
}

Reps.propTypes = {
  url: PropTypes.string,
};

export default Reps;