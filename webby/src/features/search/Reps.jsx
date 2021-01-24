import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import {get, getArticle} from '../../utils/GetArticle'

const getinfo = async   ({ url }) => {
  return  await get('https://freegeoip.app/json/')
}
class Reps extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        data: 'hii',
      };
    }
  componentDidMount() {
    get('https://freegeoip.app/json/')
    .then(res => this.setState({ data: res }));
  }

 render  () {
  const {data} = this.state;
   return(
    <div className="d-flex flex-row">
    <p>
    My Time Zone is: {data.time_zone || data}
    </p>
    </div>
   )
 };
};

Reps.propTypes = {
  url: PropTypes.string,
};

export default Reps;


