import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from '../../utils/GetArticle';

class Reps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      url: '',
      imgUrl: '',
      title: '',
      query: this.props.query,
      indic: true
    };
  }
  componentWillReceiveProps() {
    const key = 'AIzaSyBbvk21k9hF6HNwIONXX-zwVw4-xNafNJE'
    console.log('url next');
    console.log(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=${key}&tbm=nws&cx=ca0b35f95481b7956`
    );
    get(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=${key}&tbm=nws&cx=ca0b35f95481b7956`
    ).then((res) =>
      this.setState({
        data: res.items[0].snippet,
        url: res.items[0].formattedUrl,
        title: res.items[0].title,
        imgUrl: res.items[0].pagemap.cse_thumbnail[0].src,
        indic: false
      })
    );
  }

  render() {
    let { data, url, title,imgUrl, indic } = this.state;
    return (
      <div className="d-flex flex-row text-wrap">
        <p className="text-wrap">
          <b>{indic || 'Conservative article title: '}</b>
          <a href={url}> {title}</a>
          <br></br>
          <br></br>

          <img 
          src={imgUrl}
          />
          <br></br>
          <br></br>
          <b>{indic ||'Conservative article snippet: '}</b> {data}
          <br></br>
          <br></br>

        </p>
      </div>
    );
  }
}

Reps.propTypes = {
  url: PropTypes.string,
};

export default Reps;
